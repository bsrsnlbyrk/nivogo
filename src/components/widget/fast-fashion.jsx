"use client";

import React from "react";

import Image from "next/image";
import { useUserAgent } from "next-useragent";

const FastFashion = () => {
  const { isMobile } = useUserAgent();

  return (
    <div className="text-center px-6 md:px-0 mb-[86px]">
      <p className="mb-7 text-[#313131] text-[28px] md:text-[56px] md:leading-[64px] font-bold">
        Hızlı Moda'nın <span className="text-[#01675A]">Dünyamıza</span> Etkisi
      </p>
      <p className="mb-9 text-lg leading-7 md:text-[34px] md:leading-[44px] text-[#333333] md:mb-[86px]">
        Hızlı modanın etkisi ile, henüz kullanıcısı ile tanışamadan atık hale
        gelen veya ihtiyacımızdan fazlasını alıp kullanmadığımız ürünlerle
        dünyamıza zarar veriyoruz.
      </p>
      <div className="flex gap-x-[33px] md:px-[128px] md:pt-[135px] md:pb-[55px] md:bg-[#F4FEFF]">
        <div className="text-center">
          <Image
            src="/images/c02.png"
            alt="c02"
            width={isMobile ? 293 : 350}
            height={isMobile ? 293 : 350}
            className="mx-auto"
          />
          <p className="mt-4 text-2xl leading-8 text-[#313131] font-bold">
            Karbon Emisyonu
          </p>
          <p className="text-lg md:text-2xl leading-8 text-[#999999]">
            Küresel karbon emisyonunun %10’u moda endüstrisinden kaynaklı. Bu
            toplam uçuşların ve deniz taşımacılığının neden olduğu karbon
            emisyonundan çok daha fazlası anlamına geliyor.
          </p>
        </div>
        {!isMobile ? (
          <>
            <div className="text-center">
              <Image
                src="/images/kuresel_atik.png"
                alt="c02"
                width={isMobile ? 293 : 350}
                height={isMobile ? 293 : 350}
              />
              <p className="mt-4 text-6 leading-8 text-[#313131] font-bold">
                Küresel Atık ve Su Krizi
              </p>
              <p className="text-lg md:text-6 leading-8 text-[#999999]">
                Moda endüstrisinde her yıl 2 milyon olimpik havuzu dolduracak
                kadar su harcanırken, kişi başı 32kg kıyafet çöpe atılıyor. Bu
                da yılda 85 milyardan fazla tekstil ürününün atık hale gelmesi
                demek oluyor.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/kotu_calisma_sartlari.png"
                alt="c02"
                width={isMobile ? 293 : 350}
                height={isMobile ? 293 : 350}
              />
              <p className="mt-4 text-6 leading-8 text-[#313131] font-bold">
                Kötü Çalışma Şartları
              </p>
              <p className="text-lg md:text-6 leading-8 text-[#999999]">
                Her yıl milyonlarca tekstil işçisi hızlı modanın neden olduğu
                ucuz iş gücü ihtiyacı yüzünden insani olmayan koşulllarda
                çalışmak zorunda kalıyor.
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FastFashion;
