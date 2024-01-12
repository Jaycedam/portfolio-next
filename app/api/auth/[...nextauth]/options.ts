import { comparePasswords } from "@/lib/bcrypt";
import { getUser } from "@/utils/get-data";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      // next auth bug with strict mode, https://github.com/nextauthjs/next-auth/issues/2701
      // @ts-ignore
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);

          if (!user) return null;

          const passwordsMatch: boolean = await comparePasswords(
            password,
            user.password
          );

          if (passwordsMatch) {
            return user;
          }

          console.log("Invalid credentials");
          return null;
        }
      },
    }),
  ],
};
