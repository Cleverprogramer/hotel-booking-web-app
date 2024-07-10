"use client";

import React from "react";

import Label from "@/components/Label";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import Input from "@/components/shared/Input";
import toast from "react-hot-toast";

import { PasswordSchema } from "@/schema/Password";
import { UpdatePassword } from "@/server/auth/UpdatePassword";
import { wait } from "@/utils/wait";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const AcountPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof PasswordSchema>>({
    resolver: zodResolver(PasswordSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationKey: ["Update Account Password"],
    mutationFn: async (data: z.infer<typeof PasswordSchema>) => {
      const res = await UpdatePassword(data);
      if (res?.error) {
        throw new Error(res.error);
      }
      if (res.success) {
        return res.success;
      }
    },
    onSuccess(data, variables, context) {
      toast.success(data as string);
      if (data === "Your password was updated!") {
        reset();
        wait(1000).then(() => {
          router.push("/dashboard/acount");
        });
      }
    },
    onError(error, variables, context) {
      toast.error(error.message);
    },
  });

  function onSubmit(values: z.infer<typeof PasswordSchema>) {
    mutate(values);
  }
  return (
    <div className=" max-w-xl space-y-6">
      <form
        className="w-full"
        onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div>
          <Label>Current password</Label>
          <Input
            type="password"
            className="mt-1.5"
            disabled={isPending}
            {...register("currentPassword")}
          />
          {errors.currentPassword && (
            <span className="text-red-500 dark:text-red-400">
              {errors.currentPassword.message}
            </span>
          )}
        </div>
        <div>
          <Label>New password</Label>
          <Input
            type="password"
            className="mt-1.5"
            disabled={isPending}
            autoComplete="off"
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <span className="text-red-500 dark:text-red-400">
              {errors.newPassword.message}
            </span>
          )}
        </div>
        <div>
          <Label>Confirm password</Label>
          <Input
            type="password"
            autoComplete="off"
            className="mt-1.5"
            disabled={isPending}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 dark:text-red-400">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="pt-2">
          <ButtonPrimary type="submit" loading={isPending}>
            Update password
          </ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default AcountPasswordForm;
