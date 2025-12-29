import React from "react";
import Banner from "@/components/Banner/Banner";
import { config } from "@fortawesome/fontawesome-svg-core";
import AboutMe from "@/components/AboutMe/AboutMe";
import Working from "@/components/Working/Working";
import ProjectBuild from "@/components/ProjectBuild/ProjectBuild";
import Contact from "@/components/Contact/Contact";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <div className="bg_page">
        <div className="bg_page_dot"></div>
        <img className="bg_page_shape" src="/img_banner.svg" alt="" />
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
