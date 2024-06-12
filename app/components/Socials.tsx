"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, zoomIn, spring } from "@/app/utils/motion";
import { FaMedium } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const Socials = () => {
  return (
    <div className="px-5 py-10 lg:px-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <div>
          <h2 className="text-white text-center lg:text-left text-[2.5rem] lg:text-[4.5rem] font-bold mb-10 font1 textWithShadow2">
            Follow $Apepe on Social Media
          </h2>

          <motion.div
            variants={zoomIn(0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-6 justify-center lg:justify-start items-center mb-6"
          >
            <a
              href=""
              className="flex justify-center items-center hover:shadow-none transition duration-300 bg-green-500 hover:transform hover:scale-75 border-2 border-white w-20 h-20 rounded-full"
            >
              <RiTwitterXFill
                color="white"
                className="text-4xl lg:text-4xl"
              />
            </a>
            <a
              href=""
              className="flex justify-center items-center hover:shadow-none transition duration-300 bg-green-500 hover:transform hover:scale-75 border-2 border-white w-20 h-20 rounded-full"
            >
              <BiLogoTelegram
                color="white"
                className="text-4xl lg:text-4xl"
              />
            </a>
            <a
              href=""
              className="flex justify-center items-center hover:shadow-none transition duration-300 bg-green-500 hover:transform hover:scale-75 border-2 border-white w-20 h-20 rounded-full"
            >
              <FaMedium color="white" className="text-4xl lg:text-4xl" />
            </a>
            <a
              href="i"
              className="mt-2 hover:transform hover:-translate-y-2 transition duration-300"
            >
              {/* <svg
              width="40"
              height="40"
              viewBox="0 0 16 15"
              fill="#ff0054"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.65976 0H12.6568V14.216H11.1893V7.70414H11.175C11.0128 5.90442 9.50023 4.49408 7.65828 4.49408C5.81634 4.49408 4.3038 5.90442 4.14161 7.70414H4.12722V14.216H2.65976V0Z"
                fill="#ff0054"
              ></path>
              <path
                d="M0 2.01775L0.596154 4.0355H1.10059V12.1982C0.847325 12.1982 0.642012 12.4035 0.642012 12.6568V13.2071H0.550296C0.297029 13.2071 0.091716 13.4124 0.091716 13.6657V14.216H5.22781V13.6657C5.22781 13.4124 5.0225 13.2071 4.76923 13.2071H4.67752V12.6568C4.67752 12.4035 4.4722 12.1982 4.21894 12.1982H3.66864V2.01775H0Z"
                fill="#ff0054"
              ></path>
              <path
                d="M11.2811 12.1982C11.0278 12.1982 10.8225 12.4035 10.8225 12.6568V13.2071H10.7308C10.4775 13.2071 10.2722 13.4124 10.2722 13.6657V14.216H15.4083V13.6657C15.4083 13.4124 15.203 13.2071 14.9497 13.2071H14.858V12.6568C14.858 12.4035 14.6527 12.1982 14.3994 12.1982V4.0355H14.9038L15.5 2.01775H11.8314V12.1982H11.2811Z"
                fill="#ff0054"
              ></path>
            </svg> */}
            </a>
          </motion.div>
        </div>

        <motion.div
         variants={spring}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className="mx-auto"
       
      >
        <Image
          src="/hero-pepe.PNG"
          alt="thuglife"
          width={300}
          height={300}
          className=""
        />
      
      </motion.div>
      </div>
    </div>
  );
};

export default Socials;
