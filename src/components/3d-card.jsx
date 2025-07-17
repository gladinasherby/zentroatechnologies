"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const stats = [
  {
    title: "INDUSTRY",
    number: "10+",
    desc: "Years Experience",
  },
  {
    title: "TEAM",
    number: "45+",
    desc: "In-house Experts",
  },
  {
    title: "DELIVERED",
    number: "325+",
    desc: "Website Projects",
  },
  {
    title: "SATISFACTION",
    number: "350+",
    desc: "Loyal Customers",
  },
];

export default function StatsCards() {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-0">
      {stats.map((stat, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-72 h-auto rounded-xl p-6 border flex flex-col items-center justify-center">
            <CardItem
              translateZ={40}
              className="text-sm font-semibold text-neutral-500 dark:text-neutral-300 uppercase tracking-wide"
            >
              {stat.title}
            </CardItem>

            <CardItem
              translateZ={100}
              className="text-7xl sm:text-8xl font-extrabold mt-3 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-500 ease-out group-hover/card:scale-110"
            >
              {stat.number}
            </CardItem>

            <CardItem
              translateZ={30}
              className="text-sm text-neutral-600 mt-2 dark:text-neutral-400"
            >
              {stat.desc}
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
