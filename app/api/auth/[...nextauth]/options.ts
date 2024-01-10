import { comparePasswords } from "@/lib/bcrypt";
import { getUser } from "@/utils/get-data";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        // get user from db and hash password
        try {
          const user = await getUser(credentials?.username);
          // compares form password and hashed password from db
          const passwordsMatch: boolean = await comparePasswords(
            credentials?.password,
            user.password
          );
          if (passwordsMatch) {
            return user;
          }
          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
};
