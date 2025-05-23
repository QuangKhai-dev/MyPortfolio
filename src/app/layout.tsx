import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ThemeProvider/Theme-provider";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import FixedSocial from "@/components/FixedSocial/FixedSocial";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Quang Khải Portfolio",
//   description: "Đây là portfolio của Quang Khải",
// };

const calibreFont = localFont({
  src: [
    {
      path: "./../assets/font/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../assets/font/Calibre-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../assets/font/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-calibre",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark mdl-js">
      <head>
        <meta name="description" content="Đây là portfolio của Quang Khải" />
        <title>Quang Khải Portfolio</title>
        <link rel="stylesheet" href="/animate.css" />
      </head>
      <body className={`${calibreFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <FixedSocial />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-QKWWH911GM" />
    </html>
  );
}
