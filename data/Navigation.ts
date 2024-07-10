import { NavItemType } from "@/components/shared/Header/Navigation/NavigationItem";
import { GenUuid } from "@/utils/Uuid";

const OtherPages: NavItemType[] = [
  { id: GenUuid(), href: "/auth/login", name: "Login" },
  { id: GenUuid(), href: "/auth/signup", name: "Signup" },
];

export const DashboardNavItems = [
  {
    id: GenUuid(),
    href: "/dashboard/acount",
    name: "Acount",
  },
  {
    id: GenUuid(),
    href: "/dashboard/acount/savelist",
    name: "Account Savelists",
  },
  {
    id: GenUuid(),
    href: "/dashboard/acount/password",
    name: "Account Password",
  },
  {
    id: GenUuid(),
    href: "/dashboard/acount/billing",
    name: "Account Billing",
  },
];

export const NavigationData: NavItemType[] = [
  {
    id: GenUuid(),
    href: "/",
    name: "Home",
    type: "none",
  },
  {
    id: GenUuid(),
    href: "/about",
    name: "About Us",
    type: "none",
  },
  {
    id: GenUuid(),
    href: "/contact",
    name: "Contact",
    type: "none",
  },
  {
    id: GenUuid(),
    href: "/",
    name: "Other pages",
    type: "dropdown",
    children: OtherPages,
  },
];
