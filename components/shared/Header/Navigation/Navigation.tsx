import React from "react";
import NavigationItem from "./NavigationItem";
import { NavigationData } from "@/data/Navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {NavigationData.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
