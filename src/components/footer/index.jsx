"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useUserAgent } from "next-useragent";

const Footer = () => {
  const { isMobile } = useUserAgent();

  return (
    <div className="w-screen flex flex-col justify-center md:justify-start px-[29px] pt-[54px] pb-[34px] md:px-[153px] md:py-[66px] text-white bg-[#01675A]">
      <div className="flex justify-between">
        <div className="max-w-[718px]">
          <p className="text-[56px] leading-[64px] font-bold">Testimonials</p>
          <p className="text-xl leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex gap-x-[96px]">
          <div className="flex flex-col gap-y-[42px] md:gap-y-[29px]">
            <Link href="#">
              <p className="md:mb-[10px] whitespace-nowrap font-black text-base leading-[21px] md:text-[23px] md:leading-[30px]">
                Müşteri Hizmetleri
              </p>
            </Link>
            <Link href="/hesap-olustur">
              <p className="font-black text-base leading-[21px]">Kayıt Ol</p>
            </Link>
            <Link href="/giris">
              <p className="font-black text-base leading-[21px]">Giriş Yap</p>
            </Link>
          </div>
          <div className="flex flex-col gap-y-[42px] md:gap-y-[29px]">
            <Link href="#">
              <p className="md:mb-[10px] font-black text-base leading-[21px] md:text-[23px] md:leading-[30px]">
                Yardım
              </p>
            </Link>
            <Link href="#">
              <p className="font-black text-base leading-[21px]">
                Sıkça Sorulan Sorular
              </p>
            </Link>
            <Link href="/nasil-calisir">
              <p className="font-black text-base leading-[21px]">
                Nivogo Ne Yapar?
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {isMobile ? (
          <p className="text-base leading-6">
            © Copyright 2023 Nivogo Tüm Haklar Saklıdır.
          </p>
        ) : null}
        <div className="flex justify-end gap-x-[30px] pb-4 mt-[104px] md:border-b border-[#FDFDFD]">
          <Image
            src="/images/instagram_icon.png"
            alt="instagram"
            width={36}
            height={36}
          />
          <Image
            src="/images/twitter_icon.png"
            alt="twitter"
            width={36}
            height={36}
          />
          <Image
            src="/images/linkedin_icon.png"
            alt="linkedin"
            width={36}
            height={36}
          />
        </div>
        {!isMobile ? (
          <div className="flex mt-[42px] items-end justify-between">
            <div className="flex gap-x-9 mb-3 text-base leading-6 font-bold">
              <Link href="/hakkimizda">
                <span>About</span>
              </Link>
              <Link href="/partnerlerimiz">
                <span>Portfolio</span>
              </Link>
              <Link href="/">
                <span>Blog</span>
              </Link>
              <Link href="/bize-ulasin">
                <span>Contact</span>
              </Link>
            </div>
            <p className="text-base leading-6">
              © Copyright 2023 Nivogo Tüm Haklar Saklıdır.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Footer;
