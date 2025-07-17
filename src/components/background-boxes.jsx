"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

export default function BackgroundBoxesDemo() {
  return (
    <div>
      {/* Background Section */}
      <div className="h-auto py-16 px-6 md:px-12 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg text-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <h1
          className={cn(
            "md:text-4xl text-2xl text-white font-bold relative z-20"
          )}
        >
          Instant Quote + 15 Minutes of Free Expert Consultation!
        </h1>

        <p className="text-lg mt-4 text-neutral-300 relative z-20 max-w-2xl">
          Get an instant website quote and a 15-minute{" "}
          <span className="text-white font-semibold">
            Free Expert Consultation
          </span>{" "}
          with our experts. No waiting, no commitment – just personalized advice
          tailored to your business!
        </p>

        {/* Elegant Button */}
        <div className="relative z-20 mt-8">
          <button
            onClick={() => window.open("https://wa.me/zentroa", "_blank")}
            className="px-6 py-3 text-white border border-white rounded-full bg-transparent hover:bg-white hover:text-slate-900 transition-all duration-300 text-sm md:text-base flex items-center gap-2"
          >
            Get Expert Advice Now <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
