import React, { FC } from "react";
import Logo from "./Logo/Logo";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";
import Navigation from "./Navigation/Navigation";
import MenuBar from "./MobileMenu";
import SwitchDarkMode from "../SwitchDarkMode";
import UserButton from "@/components/Pages/auth/UserButton";
import { useCurrentUser } from "@/hooks/auth/client/useCurrentUser";

export interface MainNav1Props {
  className?: string;
}

const Nav: FC<MainNav1Props> = ({ className = "" }) => {
  const user = useCurrentUser();

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container h-20 relative flex justify-between">
        <div className="lg:flex hidden justify-start flex-1 space-x-4 sm:space-x-10">
          <Logo className="w-24 self-center" />
          <Navigation />
        </div>

        <div className="flex justify-between lg:hidden md:flex flex-[3] !mx-auto md:px-3 ">
          <Logo className="w-24 self-center" />
          <div className="self-center lg:hidden md:flex xl:hidden">
            <div className="flex items-center">
              <div className="px-0.5" />
              <MenuBar />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex md:hidden flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className=" space-x-0.5 lg:flex md:hidden hidden">
            <SwitchDarkMode />
            {/* <SearchDropdown className="flex items-center" /> */}
            <div className="px-1" />

            {user?.email ? (
              <UserButton />
            ) : (
              <ButtonPrimary className="self-center" href="/auth/signup">
                Sign up
              </ButtonPrimary>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
