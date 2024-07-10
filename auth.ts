import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import prisma from "./utils/db";
import { getUserById } from "./constants/getUserByEmail";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: { error: "/auth/login", signIn: "/auth/login" },
  callbacks: {
    async session({ session, token }) {
      if (token.sub && token.email) {
        session.user.name = token.name;
        session.user.image = token.picture;
        session.user.emailVerified = token.emailVerified as Date;
        session.user.username = token.username as string;
        session.user.role = token.role as "admin" | "user";
        session.user.address = token.address as string;
        session.user.id = token.userid as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (token.sub) {
        const currentUser = await getUserById(token.sub);
        token.name = currentUser?.name;
        token.picture = currentUser?.image;
        token.role = currentUser?.role;
        token.username = currentUser?.username;
        token.emailVerified = currentUser?.emailVerified;
        token.address = currentUser?.address;
        token.userid = currentUser?.id;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
