"use client";

import React from "react";

import { useUserAgent } from "next-useragent";

import Navbar from "./navbar";
import MobileHeader from "./mobile-header";

const Header = () => {
  const { isMobile } = useUserAgent();

  return isMobile ? <MobileHeader /> : <Navbar />;
};

export default Header;
