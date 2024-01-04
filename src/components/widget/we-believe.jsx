import React from "react";

import Image from "next/image";

const WeBelieve = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto pt-[80px] pb-[72px] gap-y-9 md:flex-nowrap md:mt-[70px] md:pt-[115px] md:pb-[105px]">
      <div className="text-center w-[270px] md:w-auto">
        <div className="relative w-[270px] h-[176px] rounded-[10px] md:w-[382px] md:h-[248px] mx-auto mb-6 md:mb-[34px]">
          <Image
            src="/images/we_love.png"
            alt=""
            fill
            className="rounded-[10px]"
          />
        </div>
        <p className="text-2xl md:text-[34px] leading-[45px] font-bold mb-[7px]">
          We Love
        </p>
        <p className="text-base text-[#636363] leading-6 md:text-[22px] md:leading-[34px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi nihil
          tantas platonem eos.{" "}
        </p>
      </div>
      <div className="text-center w-[270px] md:w-auto">
        <div className="relative w-[270px] h-[176px] rounded-[10px] md:w-[382px] md:h-[248px] mx-auto mb-6 md:mb-[34px]">
          <Image
            src="/images/we_know.png"
            alt=""
            fill
            className="rounded-[10px]"
          />
        </div>
        <p className="text-2xl md:text-[34px] leading-[45px] font-bold mb-[7px]">
          We Know
        </p>
        <p className="text-base text-[#636363] leading-6 md:text-[22px] md:leading-[34px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi nihil
          tantas platonem eos.{" "}
        </p>
      </div>
      <div className="text-center w-[270px] md:w-auto">
        <div className="relative w-[270px] h-[176px] rounded-[10px] md:w-[382px] md:h-[248px] mx-auto mb-6 md:mb-[34px]">
          <Image
            src="/images/we_believe.png"
            alt=""
            fill
            className="rounded-[10px]"
          />
        </div>
        <p className="text-2xl md:text-[34px] leading-[45px] font-bold mb-[7px]">
          We Believe
        </p>
        <p className="text-base text-[#636363] leading-6 md:text-[22px] md:leading-[34px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi nihil
          tantas platonem eos.{" "}
        </p>
      </div>
    </div>
  );
};

export default WeBelieve;
