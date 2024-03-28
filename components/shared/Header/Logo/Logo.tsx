import React from "react";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24" }) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}>
      <LogoSvgLight />
      <LogoSvg />
    </Link>
  );
};

export default Logo;
