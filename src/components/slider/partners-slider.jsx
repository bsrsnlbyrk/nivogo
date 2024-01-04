"use client";

import React from "react";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

const PartnersSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    useTransform: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="w-full mt-10 text-center md:mt-[150px]">
      <p className="w-fit mx-auto border-b-[5px] border-[#01675A] text-[28px] text-[#313131] leading-[64px] font-bold mb-2 md:text-[56px]">
        Partnerlerimiz
      </p>
      <Slider className="h-[300px] py-[75px]" {...settings}>
        <Image
          src="/images/ebebek.jpg"
          alt="ebebek"
          width={278}
          height={90}
          className="px-[50px]"
        />
        <Image
          src="/images/decathlon.jpg"
          alt="decathlon"
          width={278}
          height={90}
          className="px-[50px]"
        />
        <Image
          src="/images/new_balance.jpg"
          alt="new_balance"
          width={278}
          height={90}
          className="px-[50px]"
        />
        <Image
          src="/images/jimmy.jpg"
          alt="jimmy"
          width={278}
          height={90}
          className="px-[50px]"
        />
        <Image
          src="/images/boyner.jpg"
          alt="boyner"
          width={278}
          height={90}
          className="px-[50px]"
        />
        <Image
          src="/images/yumos.jpg"
          alt="yumos"
          width={278}
          height={90}
          className="px-[50px]"
        />
      </Slider>
    </div>
  );
};

export default PartnersSlider;
