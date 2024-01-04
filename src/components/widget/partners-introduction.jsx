import React from "react";

import Image from "next/image";

const PartnersIntroduction = () => {
  return (
    <div className="flex flex-wrap w-[295px] mx-auto mt-[10px] items-center justify-center gap-y-6 md:w-full md:flex-nowrap md:mt-[140px]">
      <div className="relative px-[22px] md:border-r-[2px] md:border-[#EAECF0] md:w-[357px]">
        <div className="relative w-10 h-10 mx-auto md:left-[132px] md:-top-[70px] md:w-[62px] md:h-[62px] md:absolute">
          <Image src="/images/icons/wind.png" alt="" fill />
        </div>
        <p className="text-center text-[32px] leading-[51px] md:text-[60px] font-medium md:leading-[103px] text-[#01675A]">
          Find it
        </p>
        <p className="mt-[10px] md:mt-4 text-center text-base leading-6 md:text-[26px] md:leading-[40px] text-[#101828]">
          Discover the thrill of finding one-of-a-kind pieces at
          out-of-this-world prices.
        </p>
      </div>
      <div className="relative px-[22px] md:border-r-[2px] md:border-[#EAECF0] md:w-[357px]">
        <div className="relative w-10 h-10 mx-auto md:left-[132px] md:-top-[70px] md:w-[62px] md:h-[62px] md:absolute">
          <Image src="/images/icons/thumbs-up.png" alt="" fill />
        </div>
        <p className="text-center text-[32px] leading-[51px] md:text-[60px] font-medium md:leading-[103px] text-[#01675A]">
          Flaunt it
        </p>
        <p className="mt-[10px] md:mt-4 text-center text-base leading-6 md:text-[26px] md:leading-[40px] text-[#101828]">
          Show off your secondhand clothes with pride, knowing you saved money
          and the planet.
        </p>
      </div>
      <div className="relative px-[22px] md:border-r-[2px] md:border-[#EAECF0] md:w-[357px]">
        <div className="relative w-10 h-10 mx-auto md:left-[132px] md:-top-[70px] md:w-[62px] md:h-[62px] md:absolute">
          <Image src="/images/icons/rocket.png" alt="" fill />
        </div>
        <p className="text-center text-[32px] leading-[51px] md:text-[60px] font-medium md:leading-[103px] text-[#01675A]">
          Set it free
        </p>
        <p className="mt-[10px] md:mt-4 text-center text-base leading-6 md:text-[26px] md:leading-[40px] text-[#101828]">
          Feel good about releasing your unwanted clothes to thrifters who will
          love them.
        </p>
      </div>
    </div>
  );
};

export default PartnersIntroduction;
