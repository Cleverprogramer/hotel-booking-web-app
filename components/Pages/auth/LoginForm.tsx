"use client";

import React from "react";
import Link from "next/link";

import Input from "@/components/shared/Input";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";

const LoginForm = () => {
  return (
    <div>
      <form className="grid grid-cols-1 gap-6">
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
            <Link href="/auth/login" className="text-sm underline font-medium">
              Forgot password?
            </Link>
          </span>
          <Input type="password" className="mt-1" />
        </label>
        <ButtonPrimary type="submit">Continue</ButtonPrimary>
      </form>
    </div>
  );
};

export default LoginForm;
