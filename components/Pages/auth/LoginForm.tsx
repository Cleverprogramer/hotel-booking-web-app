"use client";

import React from "react";
import Link from "next/link";

import Input from "@/components/shared/Input";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schema/Login";
import { useMutation } from "@tanstack/react-query";
import { LoginUser } from "@/server/auth/login";
import toast from "react-hot-toast";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationKey: ["login the user"],
    mutationFn: async (data: z.infer<typeof LoginSchema>) => {
      const user = await LoginUser(data);
      if (user?.error) throw new Error(user.error);
    },
    onError(error, variables, context) {
      toast.error(error.message as string);
    },
    onSuccess(data, variables, context) {
      reset();
      // toast.success(data?.success as string);
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    mutate(values);
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
          {errors.email && (
            <span className="text-red-500 dark:text-red-400">
              {errors.email.message}
            </span>
          )}
        </label>
        <label className="block">
          <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
            Password
            <Link href="/auth/login" className="text-sm underline font-medium">
              Forgot password?
            </Link>
          </span>
          <Input type="password" className="mt-1" {...register("password")} />
          {errors.password && (
            <span className="text-red-500 dark:text-red-400">
              {errors.password.message}
            </span>
          )}
        </label>
        <ButtonPrimary loading={isPending} type="submit">
          Continue
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default LoginForm;
