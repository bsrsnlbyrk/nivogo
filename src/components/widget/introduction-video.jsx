import React from "react";

import Image from "next/image";

const IntroductionVideo = () => {
  return (
    <div className="flex flex-col items-center gap-y-[14px] md:gap-y-[43px] w-full mt-[70px] mb-[96px]">
      <p className="text-center text-xl leading-[22px] font-bold md:text-[56px] md:leading-[64px]">
        Tanıtım Videosu
      </p>
      <div className="relative w-[377px] h-[212px] md:w-[1089px] md:h-[613px]">
        <Image src="/images/youtube.png" alt="tanitim-videosu" fill />
      </div>
    </div>
  );
};

export default IntroductionVideo;
