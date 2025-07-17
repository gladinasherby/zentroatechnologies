"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-4 py-12"
      >
        <div className="bg-white text-black rounded-xl shadow-xl p-8 md:p-12 max-w-6xl w-full text-sm md:text-base text-center">
          {/* Logo & Contact Info */}
          <div className="text-xl md:text-2xl font-bold mb-4">
            Zentroa Technologies
          </div>
          <p className="mb-1">📞 +971 52 559 9052 | +971 50 848 5672</p>
          <p className="mb-6">📧 hello@zentroa.com</p>

          {/* Address Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-1">DU - Dubai</h3>
              <p>
                First Floor, Ascon House,
                <br />
                Salahuddin Street,
                <br />
                Dubai, United Arab Emirates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">AD - Abu Dhabi</h3>
              <p>
                11th Floor, Millenium Towers,
                <br />
                Hamdan Street, Abu Dhabi,
                <br />
                United Arab Emirates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">SA - Riyadh</h3>
              <p>
                4th Floor, Riyadh Gallery Mall,
                <br />
                Abdulaziz Rd, King Fahd,
                <br />
                Riyadh, Saudi Arabia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">QA - Doha</h3>
              <p>
                Building 149, 4th Floor,
                <br />
                Street 224, B Ring Road,
                <br />
                Doha, Qatar.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">TN - Chennai</h3>
              <p>
                #110, Sir Thyagaraja Road,
                <br />
                Pondy bazaar, T Nagar,
                <br />
                Chennai, India.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">KL - Kerala</h3>
              <p>
                Parayil Building,
                <br />
                Erattupetta, Kottayam,
                <br />
                Kerala, India.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
