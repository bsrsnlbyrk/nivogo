"use client";

import React from "react";

import Image from "next/image";
import { Tabs, Tab } from "@nextui-org/react";
import { useUserAgent } from "next-useragent";

const HowItWorks = () => {
  const { isMobile } = useUserAgent();

  const tabContent = (
    <div className="flex flex-wrap gap-x-[130px] justify-center items-center md:px-[135px] md:py-[80px]">
      <Image
        src="/images/smartmockups.jpg"
        alt=""
        width={isMobile ? 206 : 570}
        height={isMobile ? 151 : 480}
      />
      <div className="text-center md:max-w-[470px] md:text-left">
        <p className="text-xl leading-[64px] font-bold text-[#333333] md:text-[41px]">
          Hesabına Giriş Yap
        </p>
        <p className="text-base leading-6 text-[#636363] md:text-2xl md:leading-8">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>
      </div>
    </div>
  );

  return (
    <div className="text-center mt-[64px] pb-[8px] md:borber-b border-[#DBDBDB]">
      <p className="mb-3 text-lg leading-6 font-medium text-[#313131] tracking-extremely-wide">
        NASIL ÇALIŞIR
      </p>
      <p className="text-[28px] leading-[64px] font-bold text-[#333333] md:text-[56px]">
        Hayata Döndürmenin <span className="text-[#01675A]">Adımları</span>
      </p>
      <Tabs
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "mt-[74px] gap-x-5 md:gap-x-[150px] w-fit relative rounded-none p-0 font-normal mx-auto overflow-auto md:overflow-hidden",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12 [&>span]:h-1 [&>span]:bg-[#01675A]",
          tabContent:
            "text-[15px] md:text-[23px] outline-none leading-6 text-[#999999] group-data-[selected=true]:font-bold group-data-[selected=true]:text-[#222222]",
        }}
      >
        <Tab key="login" title="Giriş Yap">
          {tabContent}
        </Tab>
        <Tab key="list" title="Listele">
          {tabContent}
        </Tab>
        <Tab key="choose" title="Ürünleri Seç">
          {tabContent}
        </Tab>
        <Tab key="proposal" title="Teklif">
          {tabContent}
        </Tab>
        <Tab key="delivery" title="Ürün Teslimi">
          {tabContent}
        </Tab>
      </Tabs>
    </div>
  );
};

export default HowItWorks;
