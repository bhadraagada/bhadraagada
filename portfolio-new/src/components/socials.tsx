import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  RiDribbbleLine,
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Hint } from "./hint";

export const socialData = [
  {
    name: "YouTube",
    link: "https://youtube.com", //todo
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com", //todo
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com", //todo
    Icon: RiFacebookLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com", //todo
    Icon: RiDribbbleLine,
  },
  {
    name: "Pinterest",
    link: "https://pinterest.com", //todo
    Icon: RiPinterestLine,
  },
  {
    name: "Github",
    link: "https://github.com/sanidhyy/modern-portfolio", //todo
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            "transition-all duration-300",
            social.name === "Github"
              ? "bg-[#f13024] rounded-full p-[5px] hover:text-white"
              : "hover:text-[#f13024] hover:bg-[#f13024]/10 rounded-full p-[8px]"
          )}
        >
            <social.Icon aria-hidden />
          <Hint label={social.name} side="bottom" aling="center" sideOffset={18}>
            <span className="sr-only">{social.name}</span>
          </Hint>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
