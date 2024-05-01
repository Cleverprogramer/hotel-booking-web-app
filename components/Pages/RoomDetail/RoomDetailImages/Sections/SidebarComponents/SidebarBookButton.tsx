"use client";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import React from "react";
import { useFormStatus } from "react-dom";

const SidebarBookButton = () => {
  const { pending } = useFormStatus();
  return (
    <ButtonPrimary disabled={pending} className="w-full" type="submit">
      Book now
    </ButtonPrimary>
  );
};

export default SidebarBookButton;
