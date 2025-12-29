import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ThemeProvider/Theme-provider";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import FixedSocial from "@/components/FixedSocial/FixedSocial";

export const metadata: Metadata = {
  title: {
    default: "Đỗ Quang Khải | Fullstack Engineer",
    template: "%s | Đỗ Quang Khải",
  },
  description:
    "Đỗ Quang Khải – Fullstack Engineer chuyên React, Next.js, TypeScript, NestJS. Xây dựng website hiệu năng cao, kiến trúc scalable và chuẩn SEO.",
  keywords: [
    "Đỗ Quang Khải",
    "Fullstack Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Vietnam",
    "Portfolio Next.js",
  ],
  authors: [
    { name: "Đỗ Quang Khải", url: "https://www.facebook.com/quangkhai0901" },
  ],
  creator: "Đỗ Quang Khải",
  publisher: "Đỗ Quang Khải",

  alternates: {
    canonical: "https://quangkhai.dev",
    // languages: {
    //   "vi-VN": "/",
    //   "en-US": "/",
    // },
  },

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://quangkhai.dev",
    title: "Đỗ Quang Khải | Fullstack Engineer",
    description:
      "Portfolio cá nhân của Đỗ Quang Khải – Fullstack Engineer với kinh nghiệm xây dựng web app hiện đại bằng Next.js & React.",
    siteName: "Khai Portfolio",
    images: [
      {
        url: "https://quangkhai.dev/og_image.png",
        width: 1200,
        height: 630,
        alt: "Đỗ Quang Khải - Fullstack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đỗ Quang Khải | Fullstack Engineer",
    description: "Portfolio cá nhân – Next.js, React, TypeScript, NestJS",
    images: ["https://quangkhai.dev/og_image.png"],
    creator: "@quangkhaidev", // nếu có
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://quangkhai.dev/favicon.ico",
    shortcut: "https://quangkhai.dev/favicon.ico",
    apple: "https://quangkhai.dev/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

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
        {/* <meta name="description" content="Đây là portfolio của Quang Khải" /> */}
        {/* <title>Quang Khải Portfolio</title> */}
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
