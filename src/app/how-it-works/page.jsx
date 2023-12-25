import React from "react";

import HowItWorksTabs from "@/components/tab-menu/how-it-works";
import IntroductionVideo from "@/components/widget/introduction-video";
import Faq from "@/components/widget/faq";

const HowItWorks = () => {
  return (
    <div>
      <HowItWorksTabs />
      <IntroductionVideo />
      <Faq />
    </div>
  );
};

export default HowItWorks;
