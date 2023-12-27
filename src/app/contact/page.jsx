import React from "react";

import Image from "next/image";

import ContactForm from "@/components/form/contact-form";

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center py-8 gap-y-[44px] md:gap-x-[100px] md:bg-[#F4FEFF] md:flex-nowrap md:py-[100px]">
      <div className="relative w-screen h-[372px] md:w-[702px] md:h-[606px] md:flex-shrink">
        <Image src="/images/contact-img.png" alt="" fill />
      </div>
      <div className="px-4">
        <p className="text-[28px] font-bold text-[#01675A] md:text-[36px]">
          Bize Ulaşın
        </p>
        <p className="my-5 text-base text-[#333215] md:mb-[60px]">
          Soruların ve taleplerin için bizimle her zaman iletişime geçebilirsin.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
