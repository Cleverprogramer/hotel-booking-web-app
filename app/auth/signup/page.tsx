import React, { FC } from "react";
import facebookSvg from "@/Images/SVg/Facebook.svg";
import twitterSvg from "@/Images/SVg/Twitter.svg";
import googleSvg from "@/Images/SVg/Google.svg";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/shared/Input";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";

const SignupPage: FC = ({}) => {
  return (
    <div className={`nc-PageSignUp  `}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            <button className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
              <Image
                className="flex-shrink-0"
                src={googleSvg}
                alt="Continue with Google"
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Continue with Google
              </h3>
            </button>
            <button className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
              <Image
                className="flex-shrink-0"
                src={facebookSvg}
                alt="Continue with Facebook"
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Continue with Facebook
              </h3>
            </button>
            <button className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
              <Image
                className="flex-shrink-0"
                src={twitterSvg}
                alt="Continue with Apple"
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Continue with Apple
              </h3>
            </button>
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
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

          {/* For existin user */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account?
            <Link href="/auth/login" className="font-semibold underline">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;