import Banner from "@/components/Banner/Banner";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MySkill from "@/components/MySkill/MySkill";
import AboutMe from "@/components/AboutMe/AboutMe";
import Working from "@/components/Working/Working";
import ProjectBuild from "@/components/ProjectBuild/ProjectBuild";
import Contact from "@/components/Contact/Contact";
config.autoAddCss = false;

export default function Home() {
  return (
    <main>
      <Banner />
      <MySkill />
      <AboutMe />
      <Working />
      <ProjectBuild />
      <Contact />
    </main>
  );
}
