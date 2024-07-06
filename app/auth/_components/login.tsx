import React from "react";
import Link from "next/link";

import Input from "@/components/shared/Input";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import AuthProvider from "@/components/Pages/auth/authProvider";

const LoginPageComponent = () => {
  return (
    <div className="container mb-24 lg:mb-32">
      <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
        Login
      </h2>
      <div className="max-w-md mx-auto space-y-6">
        <AuthProvider />
        {/* OR */}
        <div className="relative text-center">
          <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
            OR
          </span>
          <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
        </div>
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Email address
            </span>
            <Input
              type="email"
              placeholder="example@example.com"
              className="mt-1"
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Password
              <Link
                href="/auth/login"
                className="text-sm underline font-medium">
                Forgot password?
              </Link>
            </span>
            <Input type="password" className="mt-1" />
          </label>
          <ButtonPrimary type="submit">Continue</ButtonPrimary>
        </form>

        {/* For new user */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          New user?
          <Link href="/auth/signup" className="font-semibold underline">
            Create an account
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPageComponent;
