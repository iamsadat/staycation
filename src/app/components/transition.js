"use client";
import { motion } from "framer-motion";

const Transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-yellow-500 origin-bottom flex justify-center items-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "bottom" }}
      >
        <h1 className="text-black font-roslindale font-extrabold text-5xl">
          Universal Farms
        </h1>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-yellow-500 origin-top flex justify-center items-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      >
        <h1 className="text-black font-roslindale font-extrabold text-5xl">
          Universal Farms
        </h1>
      </motion.div>
    </>
  );
};

export default Transition;
