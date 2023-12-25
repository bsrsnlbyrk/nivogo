"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useUserAgent } from "next-useragent";

const StartYourBusiness = () => {
  const router = useRouter();
  const { isMobile } = useUserAgent();

  return (
    <div className="relative">
      {isMobile ? (
        <div className="relative w-screen h-[877px]">
          <Image src="/images/cropped_start_your_business.png" alt="" fill />
        </div>
      ) : (
        <div className="relative w-screen h-[855px]">
          <Image src="/images/start_your_business.png" alt="" fill />
        </div>
      )}
      <div className="absolute top-[173px] left-[85px] md:top-[136px] md:left-[135px]">
        <p className="text-[56px] leading-[64px] font-bold text-white md:text-[68px] md:leading-[80px]">
          Start your business
        </p>
        <p className="text-xl leading-8 text-white md:text-[28px] md:leading-[44px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>
        <Button
          className="w-[212px] bg-[#01675A] text-white text-base font-bold leading-6 rounded-[3px] md:mt-[60px] md:w-[170px] py-3"
          onClick={() => router.push("/giris")}
        >
          Hemen Başla
        </Button>
      </div>
    </div>
  );
};

export default StartYourBusiness;
