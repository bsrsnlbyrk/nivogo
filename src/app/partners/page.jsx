import React from "react";

import PartnersCard from "@/components/card/partners-card";
import PartnersHero from "@/components/widget/partners-hero";
import PartnersIntroduction from "@/components/widget/partners-introduction";

const Partners = () => {
  return (
    <div className="">
      <PartnersHero />
      <p className="mt-[42px] text-center text-[56px] font-bold leading-[55px] text-[#101828]">
        Unleash the full power of data
      </p>
      <p className="mt-6 text-center text-2xl leading-[37px] text-[#667085]">
        Everything you need to convert, engage, and retain more users.
      </p>
      <PartnersIntroduction />
      <PartnersCard />
    </div>
  );
};

export default Partners;
