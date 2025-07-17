// components/FloatingContent.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const FloatingContent = () => {
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
          Web Design Company in Dubai
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Zentroa Technologies is a leading web design company in Dubai, UAE,
          specializing in website design, development, digital marketing, and
          SEO. With six strategically located offices and a team of over 45
          in-house experts, we bring over 20 years of incorporated experience to
          every project.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          With a proven track record of completing over 575 web and digital
          projects, we have demonstrated our expertise in stunning responsive
          web design, mobile only website, custom development, UX/UI design,
          WordPress E-commerce, PHP development, branding, SMM, and SEO.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our clients praise us across leading review platforms for our
          innovative solutions that consistently deliver measurable results.
          With multiple awards in Dubai UAE and the Middle East digital services
          industry, partnering with our company provides you with a competitive
          edge in the fast-paced digital environments of Abu Dhabi and Dubai.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Talk to our experts and start your digital transformation today!
        </p>
      </motion.section>
    </div>
  );
};

export default FloatingContent;
