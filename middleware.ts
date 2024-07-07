import NextAuth, { Session } from "next-auth";
import { NextRequest } from "next/server";
import authConfig from "@/auth.config";

import {
  ApiAuthPrefix,
  AuthRoutes,
  DefaultRedirectUrl,
  PrivateRoutes,
  PublicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(
  (req: NextRequest & { auth: Session | null }): Response | void => {
    const { nextUrl } = req;
    const isLogedIn = !!req.auth;

    const isApiAuthPrefix = nextUrl.pathname.startsWith(ApiAuthPrefix);
    const isPublicRoute = PublicRoutes.includes(nextUrl.pathname);
    const isPrivateRoute = PrivateRoutes.includes(nextUrl.pathname);
    const isAuthRoute = AuthRoutes.includes(nextUrl.pathname);

    if (isApiAuthPrefix) {
      return;
    }
    if ((isLogedIn && isPublicRoute) || (isLogedIn && isPrivateRoute)) {
      return;
    }

    if (isLogedIn && isAuthRoute) {
      return Response.redirect(new URL(DefaultRedirectUrl, nextUrl));
    }
    if (!isLogedIn && isPrivateRoute) {
      return Response.redirect(new URL("/auth/login", nextUrl));
    }
  }
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
