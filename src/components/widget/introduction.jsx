import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";

const Introduction = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[876px]">
        <p className="text-[46px] font-bold leading-[72px] md:mb-[27px]">
          Dolabında kullanmadıklarından kazanmanın en kolay yolu
        </p>
        <p className="text-[22px] leading-9 md:mb-[21px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>
        <div className="flex gap-x-5 items-center md:mb-[48px]">
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
            <Image src="/images/icons/tick.png" alt="" width={15} height={12} />
          </div>
          <span className="text-lg leading-[27px] text-[#636363]">
            Et vim graeco principes
          </span>
        </div>
        <div className="flex gap-x-5 items-center md:mb-[48px]">
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
            <Image src="/images/icons/tick.png" alt="" width={15} height={12} />
          </div>
          <span className="text-lg leading-[27px] text-[#636363]">
            Cu dico nullam pri
          </span>
        </div>
        <div className="flex gap-x-5 items-center md:mb-[48px]">
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
            <Image src="/images/icons/tick.png" alt="" width={15} height={12} />
          </div>
          <span className="text-lg leading-[27px] text-[#636363]">
            Duo stet possim quaerendum
          </span>
        </div>
        <Button className="w-[158px] py-[22px] bg-[#01675A] text-white rounded-[10px] text-[24px] text-white font-medium md:w-[338px]">
          Hemen Başla
        </Button>
      </div>
      <div className="relative w-[202px] h-[405px] md:w-[303px] md:h-[612px]">
        <Image src="/images/phone_full.png" alt="" fill />
      </div>
    </div>
  );
};

export default Introduction;
