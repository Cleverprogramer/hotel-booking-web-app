"use client";

import React from "react";
import Link from "next/link";

import Input from "@/components/shared/Input";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schema/Login";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <div>
      <form
        className="grid grid-cols-1 gap-6"
        onSubmit={handleSubmit((data) => onSubmit(data))}>
        <label className="block">
          <span className="text-neutral-800 dark:text-neutral-200">
            Email address
          </span>
          <Input
            type="email"
            {...register("email")}
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
          <Input type="password" className="mt-1" {...register("password")} />
        </label>
        <ButtonPrimary type="submit">Continue</ButtonPrimary>
      </form>
    </div>
  );
};

export default LoginForm;
