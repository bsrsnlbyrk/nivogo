import React from "react";

import Image from "next/image";

const ProductsCanBeRecycled = () => {
  return (
    <div className="text-center mt-[110px] overflow-x-scroll">
      <p className="text-[56px] leading-[64px] font-bold text-[#333333]">
        Hangi Ürünleri Hayata Döndürüyoruz?
      </p>
      <p className="mt-9 text-[36px] leading-[64px] font-bold text-[#333333]">
        Sonbahar Dönüşümü
      </p>
      <p className="mt-4 text-2xl leading-9 text-[#667085]">
        Bu sezon içerisinde kabul ettiğimiz ürünler aşağıdaki gibidir.
      </p>
      <div className="w-full flex justify-center gap-x-[58px] overflow-scroll bg-[#F4FEFF] mt-[26px] pt-[69px] pb-3 px-[27px]">
        <div>
          <Image src="/images/denim.png" alt="" width={325} height={407} />
          <p className="mt-9">Wide-leg denim</p>
        </div>
        <div>
          <Image src="/images/maxi-dress.png" alt="" width={325} height={407} />
          <p className="mt-9">Maxi dresses</p>
        </div>
        <div>
          <Image src="/images/sweater.png" alt="" width={325} height={407} />
          <p className="mt-9">Chunky sweaters</p>
        </div>
        <div>
          <Image
            src="/images/denim-jacket.png"
            alt=""
            width={325}
            height={407}
          />
          <p className="mt-9">Denim jackets</p>
        </div>
        <div>
          <Image src="/images/denim.png" alt="" width={325} height={407} />
          <p className="mt-9">Wide-leg denim</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCanBeRecycled;
