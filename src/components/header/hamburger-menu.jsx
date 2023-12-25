import React from "react";

import Image from "next/image";
import Link from "next/link";

const AccordionMenu = () => {
  return (
    <ul className="text-center">
      <li
        className="h-[64px] text-[30px] leading-[64px] text-[#333]"
        onClick={() => setActiveAccordion(index)}
      >
        <Link href="/">Hakkımızda</Link>
      </li>
      <li
        className="h-[64px] text-[30px] leading-[64px] text-[#333]"
        onClick={() => setActiveAccordion(index)}
      >
        <Link href="/">Partnerlerimiz</Link>
      </li>
      <li
        className="h-[64px] text-[30px] leading-[64px] text-[#333]"
        onClick={() => setActiveAccordion(index)}
      >
        <Link href="/">Nasıl Çalışır?</Link>
      </li>
      <li
        className="h-[64px] text-[30px] leading-[64px] text-[#333]"
        onClick={() => setActiveAccordion(index)}
      >
        <Link href="/">Bize Ulaşın</Link>
      </li>
    </ul>
  );
};

const HamburgerMenu = ({ isShown, onClose }) => {
  return (
    <nav
      className={`${
        isShown
          ? "fixed top-0 z-10 h-screen w-screen overflow-scroll bg-white"
          : "hidden"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <Image src="/images/logo.jpg" width={217} height={56} alt="nivogo" />
        <Image
          src="/images/icons/close.png"
          onClick={() => onClose()}
          width={58}
          height={45}
        />
      </div>
      <div className="absolute left-0 top-[80px] h-full w-full">
        <AccordionMenu />
      </div>
    </nav>
  );
};

export default HamburgerMenu;
