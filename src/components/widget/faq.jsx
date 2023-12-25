"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

  const defaultContent = (
    <div className="bg-white text-[#838383] pt-4 pl-[76px]">
      "Nivogo olarak biz, üretilen her ürünün değerli olduğuna ve herhangi bir
      sebepten dolayı kullanılmadığı zaman değerinin yok olmadığına inanıyoruz.
      Bu amaçla, partner markalarımızdan ve bireysel kullanıcılardan, hayata
      tekrar döndürebileceğimiz ve döngüsel ekonomiye dahil edilerek yeni
      kullanıcılarıyla buluşturabileceğimiz ürünleri alıyoruz. Türkiye’nin ilk
      ve en büyük Yenileme Merkezinde 6 aşamalık bir süreçten geçirerek
      yeniliyor, ömürlerini uzatıyor ve böylece binlerce moda ürününü ve
      milyarlarca litre suyu kurtarmış oluyoruz. Sen de dolabındaki ihtiyacın
      olmadığı ürünlerini Nivogo’yla hayata döndürmek ve döngüsel deneyimine
      başlamak için buraya tıklayabilir, döngüsel dönüşüm marka ortaklarımız
      arasında yerini almak için ise iletişim sayfamızdan talebini bize
      gönderebilirsin 😊"
    </div>
  );

  return (
    <div className="mt-[96px] flex flex-col items-center">
      <p className="text-center text-[56px] font-bold leading-[64px] text-[#01675A]">
        Sıkça Sorulan Sorular
      </p>
      <p className="mt-5 text-center text-[29px] leading-8 text-[#333]">
        Nivogo hakkında sıkça sorulan soruları bu sayfada bulabilirsiniz.
      </p>
      <Accordion
        variant="splitted"
        itemClasses="border border-[#01675A] rounded-lg"
        fullWidth
        className="flex flex-col gap-y-4 my-[96px] px-[240px] max-w-[1440px]"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem
          key="1"
          title="ÜRÜNLER"
          hideIndicator
          startContent={
            selectedKeys.has("1") ? (
              <span>-</span>
            ) : (
              <span className="text-[#01675A]">+</span>
            )
          }
          className={`rounded-lg [&>h2>button]:gap-x-[70px] [&>h2>button]:pl-[76px] [&>section>div]:py-0 [&>h2>button]:h-[80px] ${
            selectedKeys.has("1")
              ? "bg-[#01675A] text-white"
              : "border border-[#01675A]"
          }`}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          title="TEKLİF"
          hideIndicator
          startContent={
            selectedKeys.has("2") ? (
              <span>-</span>
            ) : (
              <span className="text-[#01675A]">+</span>
            )
          }
          className={`rounded-lg [&>h2>button]:gap-x-[70px] [&>h2>button]:pl-[76px] [&>section>div]:py-0 [&>h2>button]:h-[80px] ${
            selectedKeys.has("2")
              ? "bg-[#01675A] text-white"
              : "border border-[#01675A]"
          }`}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          title="TESLİMAT"
          hideIndicator
          startContent={
            selectedKeys.has("3") ? (
              <span>-</span>
            ) : (
              <span className="text-[#01675A]">+</span>
            )
          }
          className={`rounded-lg [&>h2>button]:gap-x-[70px] [&>h2>button]:pl-[76px] [&>section>div]:py-0 [&>h2>button]:h-[80px] ${
            selectedKeys.has("3")
              ? "bg-[#01675A] text-white"
              : "border border-[#01675A]"
          }`}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="4"
          title="HEDİYE ÇEKİ"
          hideIndicator
          startContent={
            selectedKeys.has("4") ? (
              <span>-</span>
            ) : (
              <span className="text-[#01675A]">+</span>
            )
          }
          className={`rounded-lg [&>h2>button]:gap-x-[70px] [&>h2>button]:pl-[76px] [&>section>div]:py-0 [&>h2>button]:h-[80px] ${
            selectedKeys.has("4")
              ? "bg-[#01675A] text-white"
              : "border border-[#01675A]"
          }`}
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
