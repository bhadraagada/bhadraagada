"use client";

import Home from "@/app/page";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Work from "@/app/work/page";
import Testimonials from "@/app/testimonials/page";
import Contact from "@/app/contact/page";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { RouteTranstion } from "./route-transition";

export const MotionDiv = () => {
  const pathname = usePathname();

  const getComponent = () => {
    switch (pathname) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      case "/services":
        return <Services />;
      case "/work":
        return <Work />;
      case "/testimonials":
        return <Testimonials />;
      case "/contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <RouteTranstion />
        {getComponent()}
      </motion.div>
    </AnimatePresence>
  );
};
