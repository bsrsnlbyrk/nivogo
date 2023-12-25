"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useUserAgent } from "next-useragent";

const Newsletter = () => {
  const { isMobile } = useUserAgent();

  return (
    <div className="w-screen flex flex-col md:flex-row md:gap-x-[165px] justify-center bg-[#EDF49B]">
      <div className="order-2 md:order-1 md:mt-[115px]">
        <Image
          src="/images/phone_mock.png"
          alt="hayata-dondur"
          width={isMobile ? 234 : 298}
          height={isMobile ? 332 : 412}
        />
      </div>
      <div className="order-1 md:order-2 md:mt-[115px] max-w-[553px]">
        <p className="text-black font-bold text-2xl md:text-[51px] leading-[54px]">
          Hadi Hayata Döndür!
        </p>
        <p className="text-gray text-base leading-[26px] md:text-[25px] md:leading-8 md:mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button className="bg-[#01675A] text-white text-[19px] leading-[26px] font-bold md:px-[40px] md:mt-[77px] rounded-full md:font-black py-3">
          Hemen Başla
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
