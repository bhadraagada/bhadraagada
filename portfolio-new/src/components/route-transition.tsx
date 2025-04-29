import { motion } from "framer-motion";

export const RouteTranstion = () => {
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };

  return (
    <>
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#5b47a2]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};
