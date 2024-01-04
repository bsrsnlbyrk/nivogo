"use client";

import React, { useState, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";

import SigninForm from "../form/signin-form";
import SignupForm from "../form/signup-form";

const Signin = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("");
  const paths = {
    signin: "/giris",
    signup: "/hesap-olustur",
  };

  useEffect(() => {
    if (pathname === "/hesap-olustur") setSelectedTab("signup");
    else setSelectedTab("signin");
  }, [pathname]);

  const handleSelectionChange = (value) => {
    router.push(paths[value]);
  };

  return (
    <div className="px-2 flex flex-col justify-center relative md:pb-[232px] md:items-center md:px-0">
      <Tabs
        variant="light"
        selectedKey={selectedTab}
        onSelectionChange={handleSelectionChange}
        classNames={{
          tabList:
            "mt-[74px] gap-x-2 w-full relative rounded-none p-0 font-normal overflow-hidden md:w-fit md:mx-auto",
          cursor: "w-full bg-[#22d3ee]",
          tab: "md:w-[205px] px-[14px] h-12 bg-[#F2F2F2] [&>span]:bg-[#01675A] text-white rounded-b-none [&>span]:rounded-b-none",
          tabContent:
            "text-[23px] outline-none leading-6 text-[#333333] group-data-[selected=true]:font-bold group-data-[selected=true]:text-white",
          panel: "p-0",
        }}
      >
        <Tab key="signin" title="Giriş Yap">
          <SigninForm />
        </Tab>
        <Tab key="signup" title="Üye Ol">
          <SignupForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Signin;
