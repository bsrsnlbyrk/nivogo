import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";

const Introduction = () => {
  return (
    <div className="flex flex-wrap justify-center md:flex-nowrap">
      <div className="max-w-[360px] md:max-w-[876px]">
        <p className="mb-3 text-[28px] leading-10 font-bold text-black md:text-[46px] md:leading-[72px] md:mb-[27px]">
          Dolabında kullanmadıklarından kazanmanın en kolay yolu
        </p>
        <p className="mb-9 text-lg leading-8 text-black md:text-[22px] md:leading-9 md:mb-[21px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>
        <div className="flex flex-col gap-y-4 md:gap-y-5">
          <div className="flex gap-x-5 items-center">
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
              <Image
                src="/images/icons/tick.png"
                alt=""
                width={15}
                height={12}
              />
            </div>
            <span className="text-lg leading-[27px] text-[#636363]">
              Et vim graeco principes
            </span>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
              <Image
                src="/images/icons/tick.png"
                alt=""
                width={15}
                height={12}
              />
            </div>
            <span className="text-lg leading-[27px] text-[#636363]">
              Cu dico nullam pri
            </span>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
              <Image
                src="/images/icons/tick.png"
                alt=""
                width={15}
                height={12}
              />
            </div>
            <span className="text-lg leading-[27px] text-[#636363]">
              Duo stet possim quaerendum
            </span>
          </div>
          <Button className="w-[212px] mt-12 mx-auto mb-[53px] py-[22px] bg-[#01675A] rounded-[6px] text-lg font-medium text-white md:rounded-[10px] md:text-[24px] md:w-[338px] md:h-[75px] md:m-0 md:mt-12">
            Hemen Başla
          </Button>
        </div>
      </div>
      <div className="relative w-[202px] h-[405px] mx-auto md:w-[303px] md:h-[612px] md:mx-0">
        <Image src="/images/phone_full.png" alt="" fill />
      </div>
    </div>
  );
};

export default Introduction;
