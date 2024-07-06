"use client";

import React from "react";

import Input from "@/components/shared/Input";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";

const SingupForm = () => {
  return (
    <div>
      <form className="grid grid-cols-1 gap-6" action="#" method="post">
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
          </span>
          <Input type="password" className="mt-1" />
        </label>
        <ButtonPrimary type="submit">Continue</ButtonPrimary>
      </form>
    </div>
  );
};

export default SingupForm;
