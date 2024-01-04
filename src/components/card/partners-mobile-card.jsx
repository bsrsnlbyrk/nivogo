import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const PartnersMobileCard = () => {
  /* return (
    <div className="flex flex-col gap-y-[23px]">
      <div className="relative w-full px-8">
        <div className="absolute -z-10 w-full h-auto top-0 left-0">
          <Image src="" alt="" fill />
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-[75px] h-[75px] flex items-center justify-center rounded-full bg-white">
            <Image src="/images/levis.svg" alt="" fill />
          </div>
          <span className="text-[26px] font-black leading-[68px] text-white">
            Levi's
          </span>
        </div>
        <Link href="/partnerlerimiz/levis">
          <Button className="px-3 py-[10px] text-[#F5FFFE] text-[11px] font-medium leading-5 rounded-[6px] bg-[#F5FFFE]">
            LEVI’S Dijital Dolabıma Git
          </Button>
        </Link>
      </div>
      <div className="relative w-full px-8">
        <div className="absolute -z-10 w-full h-auto top-0 left-0">
          <Image src="" alt="" fill />
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-[75px] h-[75px] flex items-center justify-center rounded-full bg-white">
            <Image src="/images/boyner.svg" alt="" fill />
          </div>
          <span className="text-[26px] font-black leading-[68px] text-white">
            Boyner
          </span>
        </div>
        <Link href="/partnerlerimiz/levis">
          <Button className="px-3 py-[10px] text-[#F5FFFE] text-[11px] font-medium leading-5 rounded-[6px] bg-[#F5FFFE]">
            Boyner Dijital Dolabıma Git
          </Button>
        </Link>
      </div>
    </div>
  ); */

  return (
    <div className="flex flex-col gap-y-[23px]">
      <Link href="/partnerlerimiz/levis">
        <div className="relative w-full h-auto px-8">
          <Image src="/images/levis-mobile.jpg" alt="" fill />
        </div>
      </Link>
      <Link href="/partnerlerimiz/boyner">
        <div className="relative w-full h-auto px-8">
          <Image src="/images/boyner-mobile.jpg" alt="" fill />
        </div>
      </Link>
    </div>
  );
};

export default PartnersMobileCard;
