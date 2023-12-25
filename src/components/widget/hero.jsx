"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useUserAgent } from "next-useragent";

import Logo from "../icons/logo";

const Hero = () => {
  const { isMobile } = useUserAgent();

  return (
    <div className="relative">
      <div className="absolute w-screen h-[869px] top-0 left-0 -z-[10]">
        <Image src="/images/background.png" alt="" fill />
      </div>
      <div className="flex gap-x-[53px] items-center justify-evenly pt-[78px] mx-auto">
        <div className="flex flex-col justify-start">
          <h1 className="text-[68px] font-bold text-[#313131]">
            <span className="text-[#01675A]">Nivogo’yla</span> Ürünlerini{" "}
            <span className="text-[#01675A]">Hayata</span> Döndür
          </h1>
          <p className="text-[28px] mt-[27px] leading-[44px] text-[#636363]">
            Dolabına yük olan ürünleri getir, NivoPuan kazan. Döngüsel Alışveriş
            deneyimini mağazalarımızda keşfet.
          </p>
          <Button
            variant="bordered"
            startContent={<Logo />}
            radius="2xl"
            className="bg-white flex border border-[#01675A] rounded-2xl gap-x-3 md:w-[251px] pl-3 py-[5px] mt-[48px] ml-[164px] justify-start justify-self-center"
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
    </div>
  );
};

export default Hero;
