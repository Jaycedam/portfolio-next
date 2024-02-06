import { comparePasswords } from "@lib/bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userSchema } from "@/utils/zod-schema";
import { getUserByUsername } from "@utils/get-data";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      // next auth bug with strict mode, https://github.com/nextauthjs/next-auth/issues/2701
      // @ts-ignore
      async authorize(credentials) {
        const parsedCredentials = userSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUserByUsername(username);

          const passwordsMatch: boolean = await comparePasswords(
            password,
            user.password
          );

          if (passwordsMatch) {
            return user;
          }

          return null;
        }
      },
    }),
  ],
};
