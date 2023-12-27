import React from "react";

import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-rows-2 grid-cols-2 gap-8">
        <Input
          type="text"
          placeholder="Adınız"
          variant="bordered"
          className="md:w-[306px]"
          classNames={{
            inputWrapper: ["border border-[#01675A]", "rounded-[6px]"],
          }}
        />
        <Input
          type="text"
          placeholder="Soyadınız"
          variant="bordered"
          className="md:w-[306px]"
          classNames={{
            inputWrapper: ["border border-[#01675A]", "rounded-[6px]"],
          }}
        />
        <Input
          type="email"
          placeholder="E-posta Adresiniz"
          variant="bordered"
          className="md:w-[306px]"
          classNames={{
            inputWrapper: ["border border-[#01675A]", "rounded-[6px]"],
          }}
        />
        <Input
          type="phone"
          placeholder="Telefon Numaranız"
          variant="bordered"
          className="md:w-[306px]"
          classNames={{
            inputWrapper: ["border border-[#01675A]", "rounded-[6px]"],
          }}
        />
      </div>
      <Input
        type="text"
        placeholder="Konu"
        variant="bordered"
        classNames={{
          inputWrapper: ["border border-[#01675A]", "rounded-[6px]"],
        }}
      />
      <Textarea
        placeholder="Mesajınız"
        variant="bordered"
        minRows="4"
        classNames={{
          inputWrapper: ["border border-[#01675A]", "rounded-[6px]"],
        }}
      />
      <Checkbox defaultSelected>
        Yukarıdaki e-posta adresi veya telefon numarası üzerinden benimle
        iletişime geçebileceğine katılıyorum
      </Checkbox>
      <Button className="h-[66px] text-white text-xl font-black rounded-[6px] bg-[#01675A]">
        GÖNDER
      </Button>
    </div>
  );
};

export default ContactForm;
