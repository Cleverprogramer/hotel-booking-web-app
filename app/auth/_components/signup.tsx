import React from "react";
import Link from "next/link";

import AuthProvider from "@/components/Pages/auth/authProvider";
import SingupForm from "@/components/Pages/auth/SingupForm";

const SignupPageComponent = () => {
  return (
    <div className="container mb-24 lg:mb-32">
      <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
        Signup
      </h2>
      <div className="max-w-md mx-auto space-y-6 ">
        <AuthProvider />
        {/* OR */}
        <div className="relative text-center">
          <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
            OR
          </span>
          <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
        </div>
        {/* FORM */}
        <SingupForm />

        {/* For existin user */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Already have an account?
          <Link href="/auth/login" className="font-semibold underline">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignupPageComponent;
