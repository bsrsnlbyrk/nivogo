import localFont from "next/font/local";

import LayoutClient from "./layout.client";
import "./globals.css";

const celias = localFont({
  src: [
    {
      path: "./fonts/Celias.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CeliasMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CeliasBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CeliasBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Nivogo",
  description: "Hayata Döndür",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={celias.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
