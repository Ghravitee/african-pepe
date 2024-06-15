import React from 'react'
import Image from "next/image"

import uniswap from '../../public/uniswap-3.png'
import dex from '../../public/dex-screener-seeklogo.svg'
import dextool from '../../public/dextools.svg'

const Buy = () => {
  return (
    <div className='px-5 py-10 lg:px-20 lg:py-24'>
        <h2 className='text-white text-center text-[2.5rem] lg:text-[4.5rem] font-bold mb-10 font1 textWithShadow2'>Where to buy $Apepe?</h2>

        <div className="flex gap-8 justify-center items-center mb-16">
      <a
          href=""
          className=""
        >
          <Image 
            src={dex} alt={""} width={90} height={90}
            className="mt-5 hover:transform hover:-translate-y-2 transition duration-300"
            />
        </a>
        <a
          href=""
          className="hover:transform hover:-translate-y-2 transition duration-300"
        >
         <Image 
            src={uniswap} alt={""} width={130} height={120}/> 
        </a>
        <a
          href=""
          className="mt-5 hover:transform hover:-translate-y-2 transition duration-300"
        >
          <Image 
            src={dextool} alt={""} width={90} height={90}/> 
        </a>
      </div>
    </div>
  )
}

export default Buy