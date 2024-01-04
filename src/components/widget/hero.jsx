"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useUserAgent } from "next-useragent";

import Logo from "../icons/logo";

const Hero = () => {
  const { isMobile } = useUserAgent();

  return (
    <div className="relative text-center bg-[#F2F0DC] pb-[106px] md:pb-0 md:bg-transparent md:text-left">
      {!isMobile && (
        <div className="absolute w-screen h-[869px] top-0 left-0 -z-[10]">
          <Image src="/images/background.png" alt="" fill />
        </div>
      )}
      <div className="flex flex-wrap gap-x-[53px] gap-y-[29px] items-center justify-evenly pt-[78px] mx-auto">
        <div className="flex flex-col justify-start">
          <h1 className="text-[28px] font-bold text-[#313131] md:text-[68px]">
            <span className="text-[#01675A]">Nivogo’yla</span> Ürünlerini{" "}
            <span className="text-[#01675A]">Hayata</span> Döndür
          </h1>
          <p className="text-xl md:text-[28px] mt-[27px] leading-[44px] text-[#636363]">
            Dolabına yük olan ürünleri getir, NivoPuan kazan. Döngüsel Alışveriş
            deneyimini mağazalarımızda keşfet.
          </p>
          <Button
            variant="bordered"
            startContent={<Logo />}
            radius="2xl"
            className="w-fit flex justify-start gap-x-3 py-[5px] mt-[48px] mx-auto border border-[#01675A] rounded-2xl bg-white md:w-[251px] md:h-[58px] md:pl-3 md:ml-[164px]"
          >
            HAYATA DÖNDÜR
          </Button>
        </div>
        <Image
          src="/images/hayata_dondur.png"
          alt=""
          width={isMobile ? 333 : 738}
          height={isMobile ? 292 : 642}
        />
      </div>
      {isMobile && (
        <div className="absolute z-10 w-full h-[119px] -bottom-2 left-0">
          <Image src="/images/rectangle.svg" alt="" fill />
        </div>
      )}
    </div>
  );
};

export default Hero;
