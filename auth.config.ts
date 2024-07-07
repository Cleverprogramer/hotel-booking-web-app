import type { NextAuthConfig } from "next-auth";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schema/Login";
import { getUserByEmail } from "./constants/getUserByEmail";
import bcrypt from "bcryptjs";

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validating = LoginSchema.safeParse(credentials);

        if (validating.success) {
          const { email, password } = credentials;
          const existingUser = await getUserByEmail(email as string);

          if (!existingUser || !existingUser.password) return null;

          const passwordMatch = await bcrypt.compare(
            password as string,
            existingUser.password
          );

          if (passwordMatch) return existingUser;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
