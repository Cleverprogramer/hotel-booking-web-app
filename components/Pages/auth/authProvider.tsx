"use client";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { LuGithub } from "react-icons/lu";

import { signIn } from "next-auth/react";

const AuthProvider = () => {
  const HandleOauth = (provider: "google" | "github") => {
    signIn(provider);
  };
  return (
    <div className="grid gap-3">
      <button
        className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
        onClick={() => HandleOauth("google")}>
        <FcGoogle className="text-xl" />
        <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
          Continue with Google
        </h3>
      </button>
      <button
        className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
        onClick={() => HandleOauth("github")}>
        <LuGithub className="text-xl" />
        <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
          Continue with Github
        </h3>
      </button>
    </div>
  );
};

export default AuthProvider;
