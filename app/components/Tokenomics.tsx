"use client"
import React from "react";
import Piechart from '../utils//Piechart'
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/app/utils/motion";

const Tokenomics = () => {
  return (
    <div className="px-5 py-10 lg:px-20 lg:py-24">
      <h2 className="text-white text-center text-[3rem] lg:text-[4.5rem] font-bold mb-10 font1 textWithShadow2">
        Tokenomics
      </h2>
      <div className="lg:hidden flex flex-col justify-center items-center">
        <Piechart />
      </div>

      <div className=" hidden lg:grid lg:grid-cols-3 justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-4">
          <motion.div
           variants={zoomIn(0.2, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
          className="tokenomics-box1 flex justify-center items-center">
            <p className="font1 textWithShadow3 text-white text-[2rem]">10% KOL</p>
          </motion.div>

          <motion.div
           variants={zoomIn(0.4, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
          className="tokenomics-box2 flex justify-center items-center bg-[#2C6E63]">
            <p className="font1 textWithShadow3 text-white text-[2rem]">
              5% Team
            </p>
          </motion.div>
        </div>
        <motion.div
         variants={zoomIn(1, 1)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true}}
        className="lg:h-full lg:w-full w-56 h-56 rounded-full flex justify-center items-center bg-blue-500">
          <p className="font1 textWithShadow3 text-white text-[2.5rem] break-all text-center">
            <span className="block">Total Supply:</span> 1.000.000.000
          </p>
        </motion.div>


        <div className="flex justify-center items-center flex-col gap-4">
          <motion.div
          
          variants={zoomIn(0.6, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true}}className="tokenomics-box3 flex justify-center items-center bg-[#FBE5B6]">
            <p className="font1 textWithShadow3 text-white text-[2rem]">
              80% LP
            </p>
          </motion.div>
          <motion.div
           variants={zoomIn(0.8, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
          className="tokenomics-box4 flex justify-center items-center bg-[#561217]">
            <p className="font1 textWithShadow3 text-white text-[2rem] break-all text-center">
              5% <br /> Community
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
