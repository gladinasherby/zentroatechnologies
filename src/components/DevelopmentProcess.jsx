"use client";
import React from "react";
import { motion } from "framer-motion";

const DevelopmentProcess = () => {
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
          Our Web Design & Development Process
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          At Zentroa, a premier web development company in Dubai, UAE, we apply
          a structured six-step process to website design and web development.
          Our innovation-driven approach leverages the latest technologies to
          create stunning, custom digital solutions that are high-performing,
          scalable, and user-friendly.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our experts manage every part of the project, from detailed analysis
          and planning to front-end design and back-end development, followed by
          rigorous quality checks to ensure everything runs smoothly. Each stage
          is carried out with great care and attention to detail.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We conduct user testing to refine usability and functionality. After
          completing all phases, we handle the launch and deployment, ensuring a
          seamless transition as your website goes live.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Post-launch, we provide ongoing maintenance and support to ensure your
          site consistently performs.
        </p>
      </motion.section>
    </div>
  );
};

export default DevelopmentProcess;
