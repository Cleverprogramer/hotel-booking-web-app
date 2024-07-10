/**
 * @title Public Routes
 * @description This file contains the definition of public routes for the application.
 * These routes are accessible to all users without the need for authentication.
 * Public routes include the home page, about page, contact page, login page, and register page.
 * @type {{string}}
 */

export const PublicRoutes = ["/", "/about", "/contact", "/rooms"];

/**
 * @title Auth Routes
 * @description This routes contains the definition of public routes for the application.
 * These routes are not accessible to all users without the need for authentication.
 * Auth routes include the login page, signup page.
 * @type {{[string]}}
 */

export const AuthRoutes = ["/auth/login", "/auth/signup"];

/**
 * @title Api auth Prefix
 * @description These routes contains the definition of api auth prefix routes for the application.
 * These routes are accessible to all users without the need for authentication because next auth uses these routes and we don't need to be authenticated with the users.
 * Api Auth Prefix are all most public.
 * @type {{string}}
 */

export const ApiAuthPrefix = "/api/auth";

/**
 * @title Default Redirect Url
 * @description this route is used to redirect users after a successful login
 * @type {{string}}
 */

export const DefaultRedirectUrl = "/dashboard/acount";

export const PrivateRoutes = [
  "/dashboard/acount",
  "/dashboard/acount/password",
  "/dashboard/acount/billing",
  "/dashboard/acount/savelist",
];
