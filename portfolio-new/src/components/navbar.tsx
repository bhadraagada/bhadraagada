"use client";

import { cn } from "@/lib/utils";
import {
  Columns3Icon,
  HouseIcon,
  LayoutPanelLeftIcon,
  MailIcon,
  MessageSquareTextIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hint } from "./hint";

const navData = [
  {
    name: "home",
    path: "/",
    Icon: HouseIcon,
  },
  {
    name: "about",
    path: "/about",
    Icon: UserIcon,
  },
  {
    name: "services",
    path: "/services",
    Icon: LayoutPanelLeftIcon,
  },
  {
    name: "work",
    path: "/work",
    Icon: Columns3Icon,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: MessageSquareTextIcon,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: MailIcon,
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={cn(
              "relative flex items-center group  transition-all duration-300 hover:bg-[#f13024]/10 rounded-full p-4 xl:p-3 hover:text-[#F13024] ",
              pathname === link.path &&
                "text-[#F13024] bg-[#F13024]/10 rounded-full p-4 xl:p-3"
            )}
          >
            <Hint label={link.name} side="right" aling="center" sideOffset={18}>
              <link.Icon className="size-5 font-bold" />
            </Hint>
          </Link>
        ))}
      </div>
    </nav>
  );
};
