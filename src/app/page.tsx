import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import Banner from "@/widget/banner/ui";
import AboutMe from "@/widget/about-me/ui";
import Working from "@/widget/working/ui";
import ProjectBuild from "@/widget/project-build/ui";
import Contact from "@/widget/contact/ui";
import { Person, WithContext } from "schema-dts";

config.autoAddCss = false;

export default function Home() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Đỗ Quang Khải",
    jobTitle: "Fullstack Engineer",
    url: "https://quangkhai.dev",
    sameAs: [
      "https://github.com/QuangKhai-dev",
      "https://www.linkedin.com/in/quangkhaidev/",
      "https://www.facebook.com/quangkhai0901",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "SEO",
      "NestJS",
      "Docker",
      "MySQL",
    ],
    description:
      "Đỗ Quang Khải – Fullstack Engineer chuyên React, Next.js, TypeScript, NestJS. Xây dựng website hiệu năng cao, kiến trúc scalable và chuẩn SEO.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg_page">
        <div className="bg_page_dot"></div>
        <img
          className="bg_page_shape"
          src="/img_banner.svg"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>
      <main>
        <Banner />
        <AboutMe />
        <Working />
        <ProjectBuild />
        <Contact />
      </main>
    </>
  );
}
