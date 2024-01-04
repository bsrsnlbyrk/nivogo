import React from "react";

import StartYourBusiness from "@/components/widget/start-your-business";
import WeBelieve from "@/components/widget/we-believe";
import IntroductionVideo from "@/components/widget/introduction-video";
import Newsletter from "@/components/newsletter";
import Introduction from "@/components/widget/introduction";

const About = () => {
  return (
    <div>
      <StartYourBusiness />
      <p className="text-center text-[26px] leading-12 mt-9 text-black md:mt-[41px] md:text-[56px] font-bold md:leading-[84px] md:text-[#323B4B]">
        Hayata Döndür ile Dolaplardaki Serveti ve Okyanusları Serbest
        Bırakıyoruz
      </p>
      <p className="text-center mt-3 text-base leading-6 text-black md:mt-8 md:text-2xl md:leading-9 md:text-[#636363]">
        Lorem ipsum dolor sit amet consectetur. Elementum risus tempor at
        vivamus curabitur viverra diam nec.
      </p>
      <WeBelieve />
      <Introduction />
      <IntroductionVideo />
      <Newsletter />
    </div>
  );
};

export default About;
