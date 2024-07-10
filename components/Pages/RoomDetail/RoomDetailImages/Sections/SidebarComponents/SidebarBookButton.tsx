"use client";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import { useCurrentUser } from "@/hooks/auth/client/useCurrentUser";
import React from "react";
import { useFormStatus } from "react-dom";

const SidebarBookButton = () => {
  const session = useCurrentUser();
  const { pending } = useFormStatus();
  return (
    <ButtonPrimary
      disabled={pending || !session?.email}
      className="w-full"
      type="submit">
      Book now
    </ButtonPrimary>
  );
};

export default SidebarBookButton;
