"use client";
import ButtonCircle from "@/components/shared/Button/ButtonCircle";
import Input from "@/components/shared/Input";
import { useCurrentUser } from "@/hooks/auth/client/useCurrentUser";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useFormStatus } from "react-dom";

const ReviewSubmitButton = () => {
  const session = useCurrentUser();
  const { pending } = useFormStatus();
  return (
    <>
      <Input
        autoComplete="off"
        disabled={pending || !session?.email}
        name="comment"
        fontClass=""
        className="pr-10"
        sizeClass="h-16 pl-4 pr-16 py-3"
        rounded="rounded-3xl"
        placeholder="Share your thoughts ..."
      />
      <ButtonCircle
        disabled={pending || !session?.email}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        size=" w-12 h-12 ">
        <ArrowRightIcon className="w-5 h-5" />
      </ButtonCircle>
    </>
  );
};

export default ReviewSubmitButton;
