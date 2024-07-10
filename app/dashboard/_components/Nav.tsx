"use client";

import { DashboardNavItems } from "@/data/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <div className="container">
      <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
        {DashboardNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`block py-5 md:py-8 border-b-2 flex-shrink-0 capitalize ${
                isActive
                  ? "border-primary-500 font-medium"
                  : "border-transparent"
              }`}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardNav;
