"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn, spring } from "@/app/utils/motion";
import { FaMedium } from "react-icons/fa6";
import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start w-full px-5 py-10 lg:px-20 lg:py-28">
      <div className="lg:w-[33.3%] w-full">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeIn("right", "tween", 0, 0.5)}
          viewport={{ once: true }}
          className="font1 text-white textWithShadow1 text-center lg:text-left text-[3rem] lg:text-[4rem] font-bold uppercase font1 lg:mb-6"
        >
          $Apepe
        </motion.h2>
        <div className="w-full md:max-w-[60rem]">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "tween", 0, 0.5)}
            viewport={{ once: true }}
            className="text-white text-center textWithShadow2 font1 text-[2rem] lg:text-left lg:text-[2.5rem] px-8 lg:px-0 lg:max-w-[30rem] uppercase font-bold leading-[3.5rem] tracking-wider"
          >
            Bridging Cultures in the Crypto Realm
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={spring}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-[50%] lg:w-[33.3%] relative mb-6 lg:mb-0"
      >
        <Image
          src={"/apepe-character.png"}
          width={450}
          alt="apepe"
          height={450}
          className="mx-auto self-center"
        />
        
     
      </motion.div>

      <motion.div
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       variants={fadeIn("left", "tween", 0, 0.5)}
       className="w-full lg:w-[40%] flex flex-col justify-end lg:items-end items-center">
        <h2 className="text-center text-[1.2rem] lg:text-right lg:text-[2.4rem] font1 mb-4">
          <span className="text-[#ff0054]">Step into the vibrant world of $Apepe</span> where the iconic Pepe meme
          intertwines with the rich tapestry of African heritage.
        </h2>
        <a
          href=""
          className="bg-green-500 px-4 py-3 flex justify-center items-center text-white font-semibold text-2xl w-[70%] lg:w-[50%] shadow-[1px_2px_0px_2px_#000000] hover:shadow-none transition duration-300 sm:text-2xl lilita rounded-2xl"
        >
          Buy Now
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
