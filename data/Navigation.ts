import { NavItemType } from "@/components/shared/Header/Navigation/NavigationItem";
import { GenUuid } from "@/utils/Uuid";

const OtherPages: NavItemType[] = [
  { id: GenUuid(), href: "/contact", name: "Contact us" },
  { id: GenUuid(), href: "/auth/login", name: "Login" },
  { id: GenUuid(), href: "/auth/signup", name: "Signup" },
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
    href: "/rooms",
    name: "Rooms",
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
    href: "/",
    name: "Other pages",
    type: "dropdown",
    children: OtherPages,
  },
];
