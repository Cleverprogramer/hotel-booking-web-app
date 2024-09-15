import React from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";

const Page404 = () => (
  <div className="flex items-center justify-center mx-auto h-[70vh] 
">
    <div className="container relative pt-5 pb-16 lg:pb-10 lg:pt-10
    ">
      {/* HEADER */}
      <header className="text-center max-w-2xl mx-auto space-y-2">
      <span className="mb-3 text-6xl text-neutral-800 sm:text- dark:text-neutral-200 tracking-wider font-medium">
        Payment cancelled
        </span>
        <span className="pt-4
         block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
        Something went wrong with our end, please try again later.
        </span>
        <div className="pt-9">
          <ButtonPrimary href="/">Return Home Page</ButtonPrimary>
        </div>
      </header>
    </div>
  </div>
);

export default Page404;
