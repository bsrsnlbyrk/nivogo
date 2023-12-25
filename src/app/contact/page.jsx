import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center md:gap-x-[100px] bg-[#F4FEFF]">
      <div className="relative w-screen h-[372px] md:w-[702px] md:h-[606px]">
        <Image src="/images/contact-img.png" alt="" fill />
      </div>
      <div>
        <p>Bize Ulaşın</p>
        <p>
          Soruların ve taleplerin için bizimle her zaman iletişime geçebilirsin.
        </p>
      </div>
    </div>
  );
};

export default Contact;
