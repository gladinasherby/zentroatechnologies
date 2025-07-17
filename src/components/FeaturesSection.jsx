// components/FeaturesSection.jsx
"use client";
import React from "react";

const marqueeItems = [
  "Web Design",
  "App Development",
  "SEO",
  "UI/UX Design",
  "E-Commerce",
  "Digital Marketing",
];

const pastelGlows = [
  "text-shadow-pink",
  "text-shadow-blue",
  "text-shadow-green",
  "text-shadow-yellow",
  "text-shadow-purple",
  "text-shadow-orange",
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="scrolling-marquee whitespace-nowrap overflow-hidden relative">
        <div className="marquee-track animate-marquee flex gap-12 text-xl font-semibold text-gray-800 dark:text-gray-100">
          {[...marqueeItems, ...marqueeItems].map((label, idx) => (
            <span
              key={idx}
              className={`shrink-0 ${pastelGlows[idx % pastelGlows.length]}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
