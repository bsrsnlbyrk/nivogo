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
      <Image src="/images/logo.jpg" width={266} height={68} />
      <div className="flex items-center gap-x-[60px]">
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/partnerlerimiz">Partnerlerimiz</Link>
        <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
        <Link href="/bize-ulasin">Bize Ulaşın</Link>
        <Link href="#">
          <Button className="w-[159px] bg-[#01675A] text-white text-base font-medium leading-6 rounded-lg py-3">
            Dijital Dolabım
          </Button>
        </Link>
        <Link href="#">
          <Button className="w-[159px] bg-[#01675A] text-white text-base font-medium leading-6 rounded-lg py-3">
            Giriş Yap
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
