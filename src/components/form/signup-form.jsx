import React from "react";

import Link from "next/link";

import { Button, Input, Checkbox } from "@nextui-org/react";

const SignupForm = () => {
  return (
    <div className="flex flex-col gap-y-6 p-[41px] border-[2px] border-[#E6E6E6] border-b-[3px] md:w-[416px] ">
      <div>
        <p className="text-[26px] leading-9 font-medium text-[#4B465C]">
          Birlikte Daha Güçlüyüz. 🚀
        </p>
        <p className="mt-[6px] text-sm leading-[22px] text-[#4B465C] whitespace-nowrap">
          Aramıza hemen katılın.
        </p>
      </div>
      <Input
        type="text"
        label="Adınız"
        placeholder="Adınızı Giriniz"
        variant="bordered"
        labelPlacement="outside"
        classNames={{
          inputWrapper: ["border border-[#E6E6E6]", "rounded-[6px]"],
        }}
      />
      <Input
        type="text"
        label="Soyadınız"
        placeholder="Soyadınızı Giriniz"
        variant="bordered"
        labelPlacement="outside"
        classNames={{
          inputWrapper: ["border border-[#E6E6E6]", "rounded-[6px]"],
        }}
      />
      <Input
        type="phone"
        label="Telefon Numaranız"
        placeholder="Telefon Numaranızı Giriniz"
        variant="bordered"
        labelPlacement="outside"
        classNames={{
          inputWrapper: ["border border-[#E6E6E6]", "rounded-[6px]"],
        }}
      />
      <Input
        type="phone"
        label="E-posta Adresiniz"
        placeholder="E-posta Adresinizi Giriniz"
        variant="bordered"
        labelPlacement="outside"
        classNames={{
          inputWrapper: ["border border-[#E6E6E6]", "rounded-[6px]"],
        }}
      />
      <Input
        type="password"
        label="Şifreniz"
        placeholder="********"
        variant="bordered"
        labelPlacement="outside"
        classNames={{
          inputWrapper: ["border border-[#E6E6E6]", "rounded-[6px]"],
        }}
      />
      <Input
        type="password"
        label="Şifrenizi Onaylayın"
        placeholder="********"
        variant="bordered"
        labelPlacement="outside"
        classNames={{
          inputWrapper: ["border border-[#E6E6E6]", "rounded-[6px]"],
        }}
      />
      <Checkbox>
        <Link href="#">
          <span className="text-[#01675A]">KKVK & Kullanım Koşullarını</span>
        </Link>{" "}
        kabul ediyorum.
      </Checkbox>
      <Button className="text-white text-base leading-[18px] font-medium rounded-[6px] bg-[#01675A]">
        Kayıt Ol
      </Button>
      <p className="text-base leading-[22px] text-center">
        Hesabınız mı var?{" "}
        <Link href="/giris">
          <span className="text-[#01675A]">Giriş Yapın</span>
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
