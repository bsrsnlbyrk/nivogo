"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import PartnersDetailHero from "@/components/widget/partners-detail-hero";
import IntroductionVideo from "@/components/widget/introduction-video";
import HowItWorksTabs from "@/components/tab-menu/how-it-works";
import Faq from "@/components/widget/faq";
import ProductsCanBeRecycled from "@/components/widget/products-can-recycled";

const PartnersDetail = () => {
  const router = useRouter();

  return (
    <div className="text-center">
      <PartnersDetailHero />
      <IntroductionVideo />
      <HowItWorksTabs />
      <div className="flex items-center pl-[84px] relative max-w-[1216px] h-[192px] bg-[#A9C980] mx-auto rounded-2xl md:gap-x-[187px]">
        <div className="absolute w-[1060px] h-[192px] top-0 left-0 ">
          <Image src="/images/line.png" alt="" fill />
        </div>
        <span className="text-[42px] font-bold leading-[64px] text-white whitespace-nowrap">
          Dönüşüme Şimdi Başla
        </span>
        <Button
          className="bg-[#F5FFFE] text-[#014D43] text-base font-medium leading-6 rounded-[10px] md:px-6 py-[14px]"
          onClick={() => router.push("/giris")}
        >
          Levi’s Dijital Dolabıma Git
        </Button>
      </div>
      <ProductsCanBeRecycled />
      <Faq />
      <p className="text-center text-[46px] font-bold leading-[64px] text-[#333]">
        Levi’s Ürünlerini Hayata Döndürmeye Hazır Mısın?
      </p>
      <Button
        className="bg-[#01675A] text-white text-base font-bold leading-6 rounded-[14px] md:my-[90px] md:px-9 py-5"
        onClick={() => router.push("/giris")}
      >
        Şimdi Başla
      </Button>
    </div>
  );
};

export default PartnersDetail;
