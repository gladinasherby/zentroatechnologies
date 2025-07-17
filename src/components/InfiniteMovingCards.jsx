"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={industries} direction="right" speed="slow" />
    </div>
  );
}

const industries = [
  {
    name: "Construction",
    quote:
      "Delivering web and app solutions for the construction industry, optimizing project management and showcasing developments with targeted digital marketing and brand strategies.",
  },
  {
    name: "Real Estate",
    quote:
      "Designing real estate websites with property listings, integrated booking systems, and virtual tours, using digital marketing to drive property sales and increase engagement.",
  },
  {
    name: "Financial Services",
    quote:
      "Building secure websites and applications for the financial industry, providing digital platforms for banking, insurance, and investments alongside targeted marketing strategies.",
  },
  {
    name: "Aviation",
    quote:
      "Developing aviation industry websites with integrated booking systems and real-time tracking, improving customer experience and engagement through digital branding and marketing.",
  },
  {
    name: "Aerospace",
    quote:
      "Creating custom digital platforms for the aerospace sector, including brand development, optimized web design, and marketing strategies to increase visibility and customer engagement.",
  },
  {
    name: "Information Technology (IT)",
    quote:
      "Providing IT industry websites with robust functionality, secure infrastructure, and user-friendly interfaces, helping businesses thrive through digital transformation and marketing.",
  },
  {
    name: "Telecommunications",
    quote:
      "Designing websites and mobile apps for the telecommunications industry, offering seamless customer service solutions and effective digital marketing to engage users and promote services.",
  },
  {
    name: "Healthcare",
    quote:
      "Building user-friendly websites and mobile apps for healthcare providers, improving patient care through digital solutions and enhancing visibility through targeted digital marketing.",
  },
  {
    name: "Pharmaceuticals",
    quote:
      "Creating pharmaceutical websites and digital platforms for product promotion, offering secure online resources for customers and professionals, along with tailored digital marketing campaigns.",
  },
  {
    name: "Renewable Energy",
    quote:
      "Designing digital marketing campaigns and websites for renewable energy companies, raising awareness about green energy solutions and driving customer engagement through innovative platforms.",
  },
  {
    name: "Training",
    quote:
      "Providing digital solutions like custom e-learning platforms, branding, and marketing strategies to help training companies reach and engage learners effectively.",
  },
  {
    name: "Retail",
    quote:
      "Developing custom e-commerce websites for retail businesses, optimizing user experience with seamless navigation, and using digital ways to increase sales and make customers return.",
  },
  {
    name: "Transportation",
    quote:
      "Designing web applications and websites for the transportation industry, integrating real-time tracking and booking systems, and enhancing customer interaction through digital marketing campaigns.",
  },
  {
    name: "Logistics",
    quote:
      "Building custom websites and web applications for the logistics industry focuses on improving and enhancing supply chains through customer engagement and targeted digital marketing strategies.",
  },
  {
    name: "Media",
    quote:
      "Designing dynamic media websites with engaging content and user-friendly interfaces, promoting digital media through effective marketing and branding solutions to increase audience reach.",
  },
  {
    name: "Education",
    quote:
      "Building interactive websites and digital platforms for educational institutions, delivering e-learning tools and boosting engagement through targeted digital marketing strategies.",
  },
  {
    name: "Entertainment",
    quote:
      "Creating interactive entertainment platforms, such as movie streaming websites and gaming apps, while enhancing brand visibility and user engagement through innovative digital marketing.",
  },
  {
    name: "Agriculture",
    quote:
      "Developing websites and apps for the agriculture industry, promoting agricultural products and services with digital marketing campaigns aimed at increasing customer awareness and engagement.",
  },
  {
    name: "Food Processing",
    quote:
      "Designing websites for food processing companies, integrating e-commerce solutions, and using digital marketing to promote products and enhance customer outreach.",
  },
  {
    name: "Manufacturing",
    quote:
      "Creating custom websites and digital platforms for manufacturing businesses, improving operational efficiency and enhancing brand visibility through effective digital marketing campaigns.",
  },
  {
    name: "Legal Services",
    quote:
      "Designing professional websites for law firms and optimizing lead generation with digital marketing and branding solutions to boost online presence and client engagement.",
  },
  {
    name: "Environmental Services",
    quote:
      "Developing websites and digital marketing strategies for environmental service companies, promoting sustainable solutions and raising awareness through engaging online platforms.",
  },
  {
    name: "Sports",
    quote:
      "Creating interactive websites for sports organizations and teams, enhancing fan engagement with digital platforms, and promoting events through targeted digital marketing campaigns.",
  },
  {
    name: "Recreation",
    quote:
      "Building websites and applications for recreational industries, integrating event management solutions and improving user engagement through strategic digital marketing and branding.",
  },
  {
    name: "Insurance",
    quote:
      "Designing websites for insurance companies, offering online policy management and claims systems while using digital marketing strategies to build brand trust and attract clients.",
  },
  {
    name: "Technology Startups",
    quote:
      "Developing innovative websites and web applications for tech startups, creating modern digital platforms that reflect their creative solutions and attract investors and clients.",
  },
  {
    name: "Event Management",
    quote:
      "Providing digital platforms for event management, including event websites, registration systems, and marketing campaigns that drive attendance and enhance brand presence.",
  },
  {
    name: "Water Treatment",
    quote:
      "Designing digital marketing campaigns and websites for water treatment companies, improving public awareness and promoting sustainable water solutions through interactive digital tools.",
  },
  {
    name: "Desalination",
    quote:
      "Building websites and digital platforms for desalination industries, offering information about water solutions while promoting sustainability and engagement through targeted digital marketing strategies.",
  },
  {
    name: "Automotive Industry",
    quote:
      "Designing websites and applications for automotive companies, enhancing customer engagement with online services, and promoting vehicles through custom digital marketing campaigns.",
  },
];
