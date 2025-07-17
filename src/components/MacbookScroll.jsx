"use client";

import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import img from "../assets/Process.png";
export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F] pt-0 mt-0">
      <div className="scale-[1.15] md:scale-[1.25]">
        <MacbookScroll src={img} showGradient={false} />
      </div>
    </div>
  );
}
