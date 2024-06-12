import React from 'react'
import Image from "next/image"

import uniswap from '../../public/uniswap-3.png'
import dex from '../../public/dex-screener-seeklogo.svg'
import dextool from '../../public/dextools.svg'

const Buy = () => {
  return (
    <div className='px-5 py-10 lg:px-20 lg:py-24'>
        <h2 className='text-white text-center text-[2.5rem] lg:text-[4.5rem] font-bold mb-10 font1 textWithShadow2'>Where to buy $Apepe?</h2>

        <div className="flex gap-4 justify-center items-center mb-16">
      <a
          href="https://dexscreener.com/base/0x4eed24e171db64ba807d2f5e77ec667a8995d597"
          className=""
        >
          <Image 
            src={dex} alt={""} width={60} height={60}
            className="mt-5 hover:transform hover:-translate-y-2 transition duration-300"
            />
        </a>
        <a
          href="https://app.uniswap.org/swap?outputCurrency=0x6189c29EB01493A88DF50AD3A5DD952709dB7616&chain=base"
          className="hover:transform hover:-translate-y-2 transition duration-300"
        >
         <Image 
            src={uniswap} alt={""} width={100} height={90}/> 
        </a>
        <a
          href="https://www.dextools.io/app/en/base/pair-explorer/0x4eed24e171db64ba807d2f5e77ec667a8995d597?t=1717886580623"
          className="mt-5 hover:transform hover:-translate-y-2 transition duration-300"
        >
          <Image 
            src={dextool} alt={""} width={60} height={60}/> 
        </a>
      </div>
    </div>
  )
}

export default Buy