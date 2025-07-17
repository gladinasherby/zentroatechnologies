"use client";
import React from "react";
import { motion } from "framer-motion";

const IndustryFocus = () => {
  return (
    <div className="py-0 px-4 md:px-12 bg-white dark:bg-black">
      <motion.section
        className="max-w-4xl mx-auto text-left space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          What’s Your Industry?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Zentroa blends creativity with cutting-edge technology in web design.
          With over <strong>300 outstanding websites</strong> crafted for
          businesses across
          <strong> 50+ industries</strong>, we help clients build a strong
          online presence and thrive in the region’s competitive market.
        </p>
      </motion.section>
    </div>
  );
};

export default IndustryFocus;
