"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useUserAgent } from "next-useragent";

const Newsletter = () => {
  const { isMobile } = useUserAgent();

  return (
    <div className="w-screen px-4 pt-7 flex flex-col items-center justify-center bg-[#EDF49B] md:px-0 md:pt-0 md:flex-row md:items-start md:gap-x-[165px]">
      <div className="order-2 md:order-1 md:mt-[115px]">
        <Image
          src="/images/phone_mock.png"
          alt="hayata-dondur"
          width={isMobile ? 234 : 298}
          height={isMobile ? 332 : 412}
        />
      </div>
      <div className="order-1 text-center md:text-left md:order-2 md:mt-[115px] max-w-[553px]">
        <p className="text-center text-black font-bold text-2xl md:text-left md:text-[51px] leading-[54px]">
          Hadi Hayata Döndür!
        </p>
        <p className="mt-3 text-center text-gray text-base leading-[26px]  md:text-left md:text-[25px] md:leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button className="h-[53px] mx-auto mt-[34px] mb-[45px] px-[40px] py-3 justify-self-center rounded-full bg-[#01675A] text-white text-[19px] leading-[26px] font-bold md:mx-0 md:mt-[77px] md:mb-0 md:font-black">
          Hemen Başla
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
