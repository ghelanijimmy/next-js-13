import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import Providers from "@/app/Providers";
import NavBar from "@/components/NavBar/NavBar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB Clone",
  viewport: "width=device-width, initial-scale=1.0",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/*HEADER*/}
          <Header />
          {/*NAVBAR*/}
          <NavBar />
          {/*SEARCH*/}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
