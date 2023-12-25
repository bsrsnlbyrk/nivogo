import React from "react";

import Image from "next/image";
import Link from "next/link";

const PartnersCard = () => {
  return (
    <div className="mt-[56px] px-[140px] max-w-[1920px] flex flex-col gap-y-[53px]">
      <p className="w-fit mx-auto border-b-[5px] border-[#01675A] text-[#313131] text-[56px] leading-[64px] font-bold mb-2">
        Partnerlerimiz
      </p>
      <Link href="/partnerlerimiz/boyner">
        <div className="relative mx-auto w-full md:h-[446px]">
          <Image
            src="/images/boyner.png"
            alt="boyner"
            className="rounded-t-lg"
            fill
          />
        </div>
        <div className="w-full py-8 pl-[85px] bg-[#F5FFFE] rounded-b-lg text-[30px] font-bold leading-9 text-[#1D2939]">
          BOYNER DÖNÜŞÜM KAHRAMANI
        </div>
      </Link>
      <Link href="/partnerlerimiz/levis">
        <div className="relative mx-auto w-full md:h-[446px]">
          <Image
            src="/images/levis.png"
            alt="levis"
            className="rounded-t-lg"
            fill
          />
        </div>
        <div className="w-full py-8 pl-[85px] bg-[#F5FFFE] rounded-b-lg text-[30px] font-bold leading-9 text-[#1D2939]">
          LEVI’S DÖNÜŞÜM KAHRAMANI
        </div>
      </Link>
    </div>
  );
};

export default PartnersCard;
