"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiHomeAlt } from "react-icons/bi";
import "../globals.css";

const Navbar = () => {
  return (
    <nav className="font-roslindale text-xl">
      <div className="flex justify-between bg-white m-2 px-3 py-2 rounded-xl">
        <div className="flex justify-start ml-3 text-2xl font-bold items-center text-black font-roslindale cursor-pointer transition duration-150 ease-out hover:ease-in hover:text-yellow-400">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            <a href="/" className="flex items-center px-1">
              <BiHomeAlt className="mx-1" />
              Universal Farms
            </a>
          </motion.div>
        </div>
        <div className="flex px-2 mx-2 text-xl font-normal items-center">
          <ul className="flex px-2">
            <li className="px-2 text-black font-roslindale cursor-pointer transition duration-150 ease-out hover:ease-in hover:text-yellow-400">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
              >
                <a href="/">Home</a>
              </motion.div>
            </li>
            <li className="px-2 text-black font-roslindale cursor-pointer transition duration-150 ease-out hover:ease-in hover:text-yellow-400">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
              >
                <a href="/about">About</a>
              </motion.div>
            </li>
            <li className="px-2 text-black font-roslindale cursor-pointer transition duration-150 ease-out hover:ease-in hover:text-yellow-400">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
              >
                <a href="/gallery">Gallery</a>
              </motion.div>
            </li>
            <li className="px-2 text-black font-roslindale cursor-pointer transition duration-150 ease-out hover:ease-in hover:text-yellow-400">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
              >
                <a href="/contact">Contact</a>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
