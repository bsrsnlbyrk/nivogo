import React from "react";

import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavBar = () => {
  return (
    <div className="flex gap-[90px] justify-center items-center py-6">
      <Link href="/">
        <Image src="/images/Logo.svg" width={266} height={68} />
      </Link>
      <div className="flex items-center gap-x-[60px]">
        <Link href="/hakkimizda">
          <span className="text-[#222]">Hakkımızda</span>
        </Link>
        <Link href="/partnerlerimiz">
          <span className="text-[#222]">Partnerlerimiz</span>
        </Link>
        <Link href="/nasil-calisir">
          <span className="text-[#222]">Nasıl Çalışır?</span>
        </Link>
        <Link href="/bize-ulasin">
          <span className="text-[#222]">Bize Ulaşın</span>
        </Link>
        <Link href="#">
          <Button className="w-[159px] bg-[#01675A] text-white text-base font-medium leading-6 rounded-lg py-3">
            Dijital Dolabım
          </Button>
        </Link>
        <Link href="/giris">
          <Button className="w-[159px] bg-[#01675A] text-white text-base font-medium leading-6 rounded-lg py-3">
            Giriş Yap
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
