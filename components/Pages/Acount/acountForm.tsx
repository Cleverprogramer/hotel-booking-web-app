"use client";
import Label from "@/components/Label";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/TextArea";
import React, { useEffect, useState } from "react";
import AcountProfileImgUpload from "./AcountProfileImgUpload";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { AcountSchema } from "@/schema/Acount";
import { useMutation } from "@tanstack/react-query";
import { UpdateAcount } from "@/server/Acount";
import toast from "react-hot-toast";
import { useProfileImage } from "@/hooks/useProfileImage";
import { wait } from "@/utils/wait";
import AcountProfileImageUpload from "./AcountProfileImgUpload";
import { IUser } from "@/types/User";
import { useCurrentUser } from "@/hooks/auth/client/useCurrentUser";

const AcountForm = ({ user }: { user: IUser }) => {
  const session = useCurrentUser();
  const ProfileImage = useProfileImage((state) => state.ProfileImage);
  const setprofile = useProfileImage((state) => state.SetProfileImage);

  const handle = React.useCallback(async () => {
    if (!ProfileImage) {
      await wait(1000);
    } else {
      setValue("profileImageUrl", ProfileImage);
    }
  }, [ProfileImage]);
  const [isMounted, setIsMounted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof AcountSchema>>({
    resolver: zodResolver(AcountSchema),
    defaultValues: {
      email: user ? (user?.email as string) : "",
      name: user ? (user?.name as string) : "",
      username: user ? (user?.username as string) : "",
      aboutYou: user ? (user?.aboutYou as string) : "",
      gender: user ? (user?.gender as string) : "",
      address: user ? (user?.address as string) : "",
      dateOfBrith: user ? (user?.dateOfBrith as string) : "",
      phoneNumber: user ? (user?.phoneNumber as string) : "",
      profileImageUrl: user ? (user?.image as string) : "",
    },
  });

  const { isPending, mutate } = useMutation({
    mutationKey: ["Update Account"],
    mutationFn: async (data: z.infer<typeof AcountSchema>) => {
      const res = await UpdateAcount(data);
      if (res?.error) {
        throw new Error(res.error);
      }
      if (res.success) {
        return res.success;
      }
    },
    onSuccess(data, variables, context) {
      toast.success(data as string);
      if (data === "Your acount updated successfully!") {
        setprofile("");
        reset();
        wait(1000).then(() => {
          window.location.reload();
        });
      }
    },
    onError(error, variables, context) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (isMounted) {
      handle();
    }
  }, [isMounted, handle]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function onSubmit(values: z.infer<typeof AcountSchema>) {
    mutate(values);
  }
  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-shrink-0 flex items-start">
        <AcountProfileImageUpload image={user.image} />
      </div>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="w-full">
        <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
          <div>
            <Label>Name</Label>
            <Input
              className="mt-1.5"
              disabled={isPending}
              autoComplete="off"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 dark:text-red-400">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* ---- */}
          <div>
            <Label>Gender</Label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  disabled={isPending}
                  {...field}
                  className={`nc-Select h-11 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900`}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              )}
            />

            {errors.gender && (
              <span className="text-sm text-red-500">
                {errors.gender.message}
              </span>
            )}
          </div>
          {/* ---- */}
          <div>
            <Label>Username</Label>
            <Input
              className="mt-1.5"
              disabled={isPending}
              autoComplete="off"
              {...register("username")}
            />
            {errors.username && (
              <span className="text-red-500 dark:text-red-400">
                {errors.username.message}
              </span>
            )}
          </div>
          {/* ---- */}
          <div>
            <Label>Email</Label>
            <Input
              className="mt-1.5"
              disabled
              autoComplete="off"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 dark:text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* ---- */}
          <div className="max-w-lg">
            <Label>Date of birth</Label>
            <Input
              className="mt-1.5"
              type="date"
              disabled={isPending}
              autoComplete="off"
              {...register("dateOfBrith")}
            />
            {errors.dateOfBrith && (
              <span className="text-red-500 dark:text-red-400">
                {errors.dateOfBrith.message}
              </span>
            )}
          </div>
          {/* ---- */}
          <div>
            <Label>Addess</Label>
            <Input
              className="mt-1.5"
              disabled={isPending}
              autoComplete="off"
              {...register("address")}
            />
            {errors.address && (
              <span className="text-red-500 dark:text-red-400">
                {errors.address.message}
              </span>
            )}
          </div>
          {/* ---- */}
          <div>
            <Label>Phone number</Label>
            <Input
              className="mt-1.5"
              disabled={isPending}
              autoComplete="off"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 dark:text-red-400">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
          {/* ---- */}
          <div>
            <Label>About you</Label>
            <Textarea
              className="mt-1.5"
              disabled={isPending}
              autoComplete="off"
              {...register("aboutYou")}
            />
            {errors.aboutYou && (
              <span className="text-red-500 dark:text-red-400">
                {errors.aboutYou.message}
              </span>
            )}
          </div>
          <div className="pt-2">
            <ButtonPrimary type="submit" loading={isPending}>
              Update info
            </ButtonPrimary>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AcountForm;
