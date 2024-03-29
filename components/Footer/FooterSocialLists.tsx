import { FooterSocialListType } from "@/types/SocialList";
import React, { FC } from "react";

export interface FooterSocialListsProps {
  className?: string;
}

const FooterSocial: FooterSocialListType[] = [
  { name: "Facebook", icon: "lab la-facebook-square", href: "#" },
  { name: "Twitter", icon: "lab la-twitter", href: "#" },
  { name: "Youtube", icon: "lab la-youtube", href: "#" },
  { name: "Instagram", icon: "lab la-instagram", href: "#" },
];

const FooterSocialLists: FC<FooterSocialListsProps> = ({
  className = "space-y-2.5",
}) => {
  const renderItem = (item: FooterSocialListType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}>
        <i className={item.icon}></i>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {FooterSocial.map(renderItem)}
    </div>
  );
};

export default FooterSocialLists;
