import React from "react";
import AcountPasswordForm from "./AcountPasswordForm";

const AcountPasswordComponent = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Update your password</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <AcountPasswordForm />
    </div>
  );
};

export default AcountPasswordComponent;
