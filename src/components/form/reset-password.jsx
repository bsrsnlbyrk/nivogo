import React from "react";

import Link from "next/link";
import { Button, Input } from "@nextui-org/react";

import Chevron from "@/components/icons/chevron";

const ResetPassword = ({ turnSigninCallback }) => {
  return (
    <div className="w-full flex items-center justify-center absolute top-0 left-0 z-10 bg-white">
      <div className="flex flex-col gap-y-6 md:w-[400px] md:mt-[74px] md:mb-[300px]">
        <div>
          <p className="text-[26px] leading-9 font-medium text-[#4B465C]">
            Şifrenizi mi Unuttunuz? 🔒
          </p>
          <p className="mt-[6px] text-sm leading-[22px] text-[#4B465C]">
            Lütfen telefon numaranızı giriniz. Size şifrenizi sıfırlamak için
            gerekli talimatları göndereceğiz.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
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
          <Button className="text-white text-base leading-[18px] font-medium rounded-[6px] bg-[#01675A]">
            Şifremi Sıfırla
          </Button>
          <div className="flex items-center justify-center gap-x-1">
            <Button
              variant="light"
              onClick={() => turnSigninCallback(false)}
              className="h-5 data-[hover=true]:bg-transparent"
            >
              <Chevron />
              <span className="text-[#01675A]">Giriş Yap</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
