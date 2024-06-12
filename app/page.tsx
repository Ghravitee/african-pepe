import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Buy from "./components/Buy";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className=" relative border-b-[16px] border-b-white">
        <div className="box1 bg-green-500 -z-50 absolute top-[5rem] left-[10%] lg:left-[4%]"></div>
        <div className="box1 bg-red-500 -z-50 absolute top-[5rem] right-5 lg:top-[17rem] lg:left-[23%]"></div>

        <div className="-z-50 absolute top-0 left-0 w-[30%] h-2 bg-[#ff0054]"></div>
        <div className="-z-50 absolute pattern-1 top-[0.5rem] left-0 w-[30%] h-5 lg:w-[30%] lg:h-10"></div>

        <div className="pattern-1 -z-50 absolute right-0 bottom-[0.5rem] w-[30%] h-5 lg:w-[30%] lg:h-10 lg:block hidden"></div>
        <div className="w-[30%] -z-50 absolute right-0 bottom-0 h-2 bg-[#ff0054] lg:block hidden"></div>

        <div className="box4 absolute -z-50 top-0 right-0"></div>
        <div className="box5 absolute -z-50 top-0 right-[40px] lg:right-[70px]"></div>
        <div className="box6 absolute -z-50 top-0 right-[80px] lg:right-[140px]"></div>

        <div className="box7 absolute -z-50 bottom-0 left-0 lg:block hidden"></div>
        <div className="box8 absolute -z-50 bottom-0 left-[70px] lg:block hidden"></div>
        <div className="box9 absolute -z-50 bottom-0 left-[140px] lg:block hidden"></div>
        <Hero />
      </div>

      <div className="relative border-b-[16px] border-b-white">
        <div className="box1 bg-green-500 -z-50 absolute top-5 lg:top-[5rem] left-[40%] lg:left-[40%]"></div>
        <About />
      </div>
      <div className="relative border-b-[16px] border-b-white">
        <div className="box1 bg-green-500 -z-50 absolute top-5 lg:top-[5rem] left-[40%] lg:left-[40%]"></div>
        <Tokenomics />
      </div>
      <div className="relative border-b-[16px] border-b-white">
        <div className="box1 bg-green-500 -z-50 absolute top-5 lg:top-[5rem] left-[40%] lg:left-[25%]"></div>
        <Buy />
      </div>
      <div className="relative">
        <div className="box1 bg-green-500 -z-50 absolute top-5 lg:top-[5rem] left-[40%] lg:left-[5%]"></div>
        <Socials />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
