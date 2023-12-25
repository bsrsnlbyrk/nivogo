"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useUserAgent } from "next-useragent";

const PartnersDetailHero = () => {
  const router = useRouter();
  const { isMobile } = useUserAgent();

  return (
    <div className="relative">
      {isMobile ? (
        <div className="relative w-screen h-[877px]">
          <Image src="/images/cropped_start_your_business.png" alt="" fill />
        </div>
      ) : (
        <>
          <div className="relative w-screen h-[800px] bg-hero-gradient">
            <Image src="/images/partners-detail-hero.png" alt="" fill />
          </div>
          <div className="absolute top-0 left-0 w-screen h-[800px]">
            <Image src="/images/shadow.png" alt="" fill />
          </div>
        </>
      )}
      <div className="flex flex-col items-center absolute top-[226px] left-1/2 md:top-[175px] md:w-[1085px]">
        <p className="relative -left-1/2 text-center text-[56px] leading-[64px] font-medium text-white md:text-[61px] md:leading-[68px]">
          Hepimiz İkinci Şansa İnanıyoruz. Sen de İnanıyor Musun?
        </p>
        <p className="relative -left-1/2 text-center text-xl leading-8 text-white md:mt-4 md:text-[28px] md:leading-[36px]">
          Levis ile döngüsel deneyime ilk adımını at!
        </p>
        <Button
          className="w-[212px] relative -left-1/2 bg-[#01675A] text-white text-base font-bold leading-6 rounded-[3px] md:mt-[90px] md:w-[299px] py-4"
          onClick={() => router.push("/giris")}
        >
          Hemen Başla
        </Button>
      </div>
    </div>
  );
};

export default PartnersDetailHero;
