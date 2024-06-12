"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/app/utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 justify-between lg:items-center w-full px-5 py-10 lg:px-20 lg:py-24">
      
      <motion.div
         variants={fadeIn("right", "tween", 0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full lg:w-[60%] mx-auto"
      >
        <Image
          src="/African-Pepe-headshot-logo.png"
          width={450}
          alt="thuglife"
          height={450}
          className=""
        />
      </motion.div>

      <div className="">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeIn("left", "tween", 0, 0.5)}
         
          viewport={{ once: true }}
          className="text-white text-center lg:text-left text-[3rem] lg:text-[4.5rem] font-bold mb-10 font1 textWithShadow1"
        >
          about
        </motion.h2>
        <div className="w-full md:max-w-[60rem] mb-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0, 0.8)}
            viewport={{ once: true }}
            className="text-black text-[1.4rem] md:text-3xl leading-7 font-normal"
          >
            {" "}
            This groundbreaking digital token invites you on an exhilarating
            journey—one that transcends borders, celebrates diversity, and
            redefines engagement. 
          </motion.div>
        </div>
        <div className="w-full md:max-w-[60rem]">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0, 1)}
            viewport={{ once: true }}
            className="text-black text-[1.4rem] md:text-3xl leading-7 font-normal"
          >
            {" "}
            <span className="text-[#ff0054] font-bold">African Attire and Symbolism:</span> Apepe wears resplendent African
            garments, each stitch a tribute to the continent’s myriad cultures.
            Embedded within its design are symbols of unity, resilience, and
            community—a nod to Africa’s collective spirit.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
