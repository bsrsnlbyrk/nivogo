"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";

import Header from "../components/header";
import Footer from "../components/footer";

const LayoutClient = ({ children }) => {
  return (
    <NextUIProvider className="max-w-screen overflow-hidden">
      <Header />
      {children}
      <Footer />
    </NextUIProvider>
  );
};

export default LayoutClient;
