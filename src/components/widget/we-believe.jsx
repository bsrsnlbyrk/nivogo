import React from "react";

import Image from "next/image";

const WeBelieve = () => {
  return (
    <div className="flex flex-wrap mx-auto pt-[80px] pb-[72px] md:flex-nowrap md:mt-[70px] md:pt-[115px] md:pb-[105px]">
      <div className="text-center">
        <div className="relative w-[270px] h-[176px] rouned-[10px] w-[382px] h-[248px] mx-auto mb-6 md:mb-[34px]">
          <Image
            src="/images/we_love.png"
            alt=""
            fill
            className="rounded-[10px]"
          />
        </div>
        <p className="text-[34px] leading-[45px] font-bold mb-[7px]">We Love</p>
        <p className="text-[#636363] text-[22px] leading-[34px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi nihil
          tantas platonem eos.{" "}
        </p>
      </div>
      <div className="text-center">
        <div className="relative w-[270px] h-[176px] rouned-[10px] w-[382px] h-[248px] mx-auto mb-6 md:mb-[34px]">
          <Image
            src="/images/we_know.png"
            alt=""
            fill
            className="rounded-[10px]"
          />
        </div>
        <p className="text-[34px] leading-[45px] font-bold mb-[7px]">We Know</p>
        <p className="text-[#636363] text-[22px] leading-[34px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi nihil
          tantas platonem eos.{" "}
        </p>
      </div>
      <div className="text-center">
        <div className="relative w-[270px] h-[176px] rouned-[10px] w-[382px] h-[248px] mx-auto mb-6 md:mb-[34px]">
          <Image
            src="/images/we_believe.png"
            alt=""
            fill
            className="rounded-[10px]"
          />
        </div>
        <p className="text-[34px] leading-[45px] font-bold mb-[7px]">
          We Believe
        </p>
        <p className="text-[#636363] text-[22px] leading-[34px]">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi nihil
          tantas platonem eos.{" "}
        </p>
      </div>
    </div>
  );
};

export default WeBelieve;
