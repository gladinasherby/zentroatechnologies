"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="pointer-events-none" // ✅ Background won't intercept clicks
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-4xl relative mx-auto py-20 md:py-40 px-4 w-full text-left">
      <h1 className="text-2xl md:text-6xl font-bold dark:text-white">
        Best Web Design Agency in Dubai with Tech and Design Expertise!
      </h1>
      <p className="text-base md:text-xl mt-6 dark:text-neutral-200">
        Renowned for its mastery in cutting-edge technology and bespoke UX/UI
        design, Zentroa Technologies stands out as the best website development
        company in Dubai. Our expert team crafts visually striking, fully
        responsive, and user-centric websites that are not only affordable but
        also strategically aligned with your regional business objectives.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap z-50 relative">
        <button
          onClick={() =>
            (window.location.href = "https://zentroa.com/services/")
          }
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-neutral-800 transition"
        >
          Web Design
        </button>
        <button
          onClick={() =>
            (window.location.href = "https://zentroa.com/services/")
          }
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-neutral-800 transition"
        >
          Web Development
        </button>
      </div>

      {/* Review Text */}
      <div className="mt-6 text-sm md:text-base dark:text-neutral-300 text-neutral-600">
        Google ⭐️⭐️⭐️⭐️⭐️ &nbsp; | &nbsp; We’re rated{" "}
        <strong>4.9/5</strong> (105 reviews)
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 pointer-events-auto" // ✅ Cards are interactive again
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-95 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
