import React from "react";

import Image from "next/image";

const PartnersIntroduction = () => {
  return (
    <div className="flex w-full justify-center md:mt-[140px]">
      <div className="relative px-[22px] border-r-[2px] border-[#EAECF0] md:w-[357px]">
        <div className="absolute left-[132px] -top-[70px] w-[62px] h-[62px]">
          <Image src="/images/icons/wind.png" alt="" fill />
        </div>
        <p className="text-center md:text-[60px] md:font-medium md:leading-[103px] text-[#01675A]">
          Find it
        </p>
        <p className="mt-4 text-center md:text-[26px] md:leading-[40px] text-[#101828]">
          Discover the thrill of finding one-of-a-kind pieces at
          out-of-this-world prices.
        </p>
      </div>
      <div className="relative px-[22px] border-r-[2px] border-[#EAECF0] md:w-[357px]">
        <div className="absolute left-[132px] -top-[70px] w-[62px] h-[62px]">
          <Image src="/images/icons/thumbs-up.png" alt="" fill />
        </div>
        <p className="text-center md:text-[60px] md:font-medium md:leading-[103px] text-[#01675A]">
          Flaunt it
        </p>
        <p className="mt-4 text-center md:text-[26px] md:leading-[40px] text-[#101828]">
          Show off your secondhand clothes with pride, knowing you saved money
          and the planet.
        </p>
      </div>
      <div className="relative px-[22px] border-r-[2px] border-[#EAECF0] md:w-[357px]">
        <div className="absolute left-[132px] -top-[70px] w-[62px] h-[62px]">
          <Image src="/images/icons/rocket.png" alt="" fill />
        </div>
        <p className="text-center md:text-[60px] md:font-medium md:leading-[103px] text-[#01675A]">
          Set it free
        </p>
        <p className="mt-4 text-center md:text-[26px] md:leading-[40px] text-[#101828]">
          Feel good about releasing your unwanted clothes to thrifters who will
          love them.
        </p>
      </div>
    </div>
  );
};

export default PartnersIntroduction;
