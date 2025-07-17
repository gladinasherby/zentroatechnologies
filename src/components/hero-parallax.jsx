"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import ibrahim from "../assets/Ibrahim.png";
import barari from "../assets/Barari Tyres.png";
import makita from "../assets/Makita.png";
import allIndiaPackages from "../assets/All India Packages.png";
import osi from "../assets/OSI Infotech.png";
import daz from "../assets/Daz Food.png";
import printer from "../assets/Printer Rental.png";
export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Barari Tyres",
    link: "https://bararityres.com",
    thumbnail: barari,
  },
  {
    title: "Makita",
    link: "https://makita.ae",
    thumbnail: makita,
  },
  {
    title: "All India Packages",
    link: "https://www.allindiapackages.com",
    thumbnail: allIndiaPackages,
  },

  {
    title: "OSI Infotech",
    link: "https://osiinfotech.com",
    thumbnail: osi,
  },
  {
    title: "Daz Food",
    link: "https://dazfood.com",
    thumbnail: daz,
  },
  {
    title: "Printer Rental",
    link: "https://printerrental.ae",
    thumbnail: printer,
  },

  {
    title: "Ibrahim Alserkal",
    link: "https://iserkal.com",
    thumbnail: ibrahim,
  },
  {
    title: "Barari Tyres",
    link: "https://bararityres.com",
    thumbnail: barari,
  },

  {
    title: "Printer Rental",
    link: "https://printerrental.ae",
    thumbnail: printer,
  },

  {
    title: "OSI Infotech",
    link: "https://osiinfotech.com",
    thumbnail: osi,
  },
  {
    title: "Daz Food",
    link: "https://dazfood.com",
    thumbnail: daz,
  },
];
