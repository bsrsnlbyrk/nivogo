import React, { useState } from "react";

import Link from "next/link";
import { Button, Input, Checkbox } from "@nextui-org/react";

import ResetPassword from "./reset-password";

const SigninForm = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);

  return isResetPassword ? (
    <ResetPassword turnSigninCallback={setIsResetPassword} />
  ) : (
    <div className="flex flex-col gap-y-6 p-[41px] border-[2px] border-[#E6E6E6] border-b-[3px] md:w-[416px] ">
      <div>
        <p className="text-[26px] leading-9 font-medium text-[#4B465C]">
          Nivogo’ya Hoşgeldiniz 👋
        </p>
        <p className="mt-[6px] text-sm leading-[22px] text-[#4B465C] whitespace-nowrap">
          Bilgilerinizi girerek hemen giriş yapabilirsiniz.
        </p>
      </div>
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
      <div className="w-full relative">
        <Input
          type="password"
          label="Şifre"
          placeholder="********"
          variant="bordered"
          labelPlacement="outside"
          classNames={{
            inputWrapper: ["border border-[#E6E6E6]", "rounded-[6px]"],
          }}
        />
        <Button
          variant="light"
          onClick={() => setIsResetPassword(true)}
          className="absolute right-0 top-0 h-5 px-0 text-xs text-[#01675A] data-[hover=true]:bg-transparent"
        >
          Şifremi Unuttum?
        </Button>
      </div>
      <Checkbox>Beni Hatırla</Checkbox>
      <Button className="text-white text-base leading-[18px] font-medium rounded-[6px] bg-[#01675A]">
        Giriş Yap
      </Button>
      <p className="text-center">
        Hesabınız mı yok?{" "}
        <Link href="/hesap-olustur">
          <span className="text-[#01675A]">Hesap Oluştur</span>
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;
