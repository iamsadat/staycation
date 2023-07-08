"use client";
import Navbar from "./components/Navbar";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./components/Transition";

function Home() {
  return (
    <AnimatePresence mode="wait">
      <div className="font-roslindale text-xl">
        <Navbar />
        <div className="flex justify-center text-2xl font-bold items-center text-yellow-500 font-sans cursor-pointer">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            Home
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Transition(Home);
