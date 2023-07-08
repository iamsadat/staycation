"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import transition from "../transition";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center text-2xl font-bold items-center text-yellow-500 font-sans cursor-pointer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          Contact
        </motion.div>
      </div>
    </div>
  );
}
export default transition(Contact);
