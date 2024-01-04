import React from "react";

import { useUserAgent } from "next-useragent";

import PartnersCard from "@/components/card/partners-card";
import PartnersMobileCard from "@/components/card/partners-mobile-card";
import PartnersHero from "@/components/widget/partners-hero";
import PartnersIntroduction from "@/components/widget/partners-introduction";

const Partners = () => {
  const { isMobile } = useUserAgent();
  console.log(isMobile);

  return (
    <div className="">
      <PartnersHero />
      <p className="mt-[30px] text-center text-[26px] font-medium leading-8 md:text-[56px] md:font-bold md:leading-[55px] md:mt-[42px] text-[#101828]">
        Unleash the full power of data
      </p>
      <p className="mt-[14px] text-center text-base leading-6 md:text-2xl md:leading-[37px] md:mt-6 text-[#667085]">
        Everything you need to convert, engage, and retain more users.
      </p>
      <PartnersIntroduction />
      {isMobile ? <PartnersMobileCard /> : <PartnersCard />}
    </div>
  );
};

export default Partners;
