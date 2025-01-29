"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data";

const Photo = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.3, duration: 0.4, ease: "easeIn" },
        }}
        className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]"
      >
        {/* Image positioned inside the circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-[250px] h-[250px] xl:w-[340px] xl:h-[340px]  overflow-hidden"
        >
          <Image
            src={personal.image}
            alt="Profile"
            className="object-cover rounded-full"
            quality={100}
            fill
          />
        </motion.div>

        {/* SVG Circle - Smaller on xl screens */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="200"
            cy="200"
            r="180"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
