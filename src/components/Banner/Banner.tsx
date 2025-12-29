import React from "react";
import Image from "next/image";
import { TypingAnimation } from "../ui/typing-animation";
import { FileDown } from "lucide-react";

const arrIconSkill = [
  {
    src: "/icon/html.svg",
    name: "HTML",
  },
  {
    src: "/icon/css-3.svg",
    name: "CSS",
  },
  {
    src: "/icon/java-script.svg",
    name: "JavaScript",
  },
  {
    src: "/icon/typescript.svg",
    name: "TypeScript",
  },
  {
    src: "https://skillicons.dev/icons?i=react",
    name: "React",
  },
  {
    src: "https://skillicons.dev/icons?i=tailwind",
    name: "Tailwind CSS",
  },
  {
    src: "https://skillicons.dev/icons?i=redux",
    name: "Redux",
  },
  {
    src: "/icon/git.svg",
    name: "Git",
  },
  {
    src: "/icon/sass.svg",
    name: "SASS",
  },
  {
    src: "https://skillicons.dev/icons?i=nextjs",
    name: "Next.js",
  },
  {
    src: "/icon/antd.png",
    name: "Ant Design",
  },
  {
    src: "https://skillicons.dev/icons?i=nestjs",
    name: "NestJS",
  },
  {
    src: "https://skillicons.dev/icons?i=docker",
    name: "Docker",
  },
  {
    src: "https://skillicons.dev/icons?i=mysql",
    name: "MySQL",
  },
];

const Banner = () => {
  return (
    <section className="banner relative py-10 xl:py-20 overflow-hidden">
      <div className="container">
        <div className="banner-content block sm:flex items-stretch sm:items-start gap-10">
          <div className="flex-1 w-full mb-10 sm:mb-0 sm:w-7/12 lg:w-1/2 flex flex-col min-h-full justify-between">
            <div
              className="fadeup-enter-done mb-3"
              style={{ transitionDelay: "100ms" }}
            >
              <TypingAnimation className="text-xl">
                Hi, my name is
              </TypingAnimation>
            </div>
            <div
              className="fadeup-enter-done title_name relative "
              style={{ transitionDelay: "250ms" }}
            >
              <h1 className="big-heading relative animate__animated animate__backInLeft animate__slow mt-5">
                Đỗ Quang Khải
              </h1>
            </div>
            <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "400ms" }}
            >
              <p
                className="text-sm lg:text-lg xl:text-xl leading-normal animate__slower animate__animated animate__backInLeft mb-2"
                style={{ maxWidth: "540px" }}
              >
                I'm Software Engineer with 4+ years building production systems
                Worked on AI video editor, CRM platforms, and high-traffic
                landing pages
              </p>
              <p
                className="text-sm lg:text-lg xl:text-xl leading-normal animate__slower animate__animated animate__backInLeft"
                style={{ maxWidth: "540px" }}
              >
                In addition, I am also a programming teacher for students who
                are starting their information technology programs.
              </p>
              <br />
            </div>
            <div className="mt-2 flex-1 flex items-end">
              <div className="flex gap-5">
                <a
                  href="/cv/Do-Quang-Khai_Fullstack-Engineer.pdf"
                  download="Do-Quang-Khai_Fullstack-Engineer.pdf"
                  className="px-8 py-2 rounded-md bg-[#fbbf24] text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#fbbf24] text-upperca flex items-center gap-1 cursor-pointer"
                >
                  <FileDown fontSize={11} />
                  <span>Dowload CV</span>
                </a>
                {/* <button className="px-8 py-2 rounded-md bg-[#fbbf24] text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#fbbf24] text-upperca flex items-center gap-1">
                  <span>See something about me</span>
                </button> */}
              </div>
            </div>
          </div>
          <div className="img_banner relative w-full sm:w-5/12 lg:w-1/2">
            <div className="w-full h-[300px] md:h-[300px] lg:h-[400px] xl:h-[550px]">
              <Image
                alt="wrapper_img"
                src="/img_banner_new.png"
                // width={800}
                // height={500}
                fill
                style={{
                  objectFit: "contain",
                }}
                className="animate__slower animate__animated animate__backInRight"
              />
            </div>
            <div className="h-14 w-14 sm:w-14 sm:h-14 lg:h-24 lg:w-24 xl:h-36 xl:w-36 absolute bottom-0 lg:bottom-0 xl:bottom-8 -left-5 xl:-left-10 -rotate-12">
              <Image
                className=""
                alt="icon react"
                src="/java-script.png"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="h-14 w-14 sm:w-14 sm:h-14 lg:h-24 lg:w-24 xl:h-36 xl:w-36 absolute bottom-0 lg:bottom-0 xl:bottom-8 -right-5 xl:-right-12 rotate-12">
              <Image
                className="absolute w-36 h-36 "
                alt="icon react"
                src="/logo-react-icon.png"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
        <div className="my_skill_content space-y-10 pt-10 sm:pt-20 sm:pb-40">
          <div className="first_row gap-10 xl:gap-14 w-full">
            {arrIconSkill.slice(0, 20).map((item, index) => (
              <div key={index} className="my_skill_item">
                <img
                  src={item.src}
                  alt="html"
                  className="icon_logo_programming h-full w-40"
                />
              </div>
            ))}
          </div>

          <div className="row_mobile grid grid-cols-4 sm:hidden gap-5">
            {arrIconSkill.slice(0, 20).map((item, index) => (
              <div key={index} className="my_skill_item">
                <img
                  src={item.src}
                  alt={item.name}
                  className="icon_logo_programming h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list_skill_animation relative pt-40 sm:pt-0 mb-0 sm:mb-32">
        <div className="bg_under_list_skill"></div>
        <div className="list_skill bg_gradient p-3">
          <ul className="flex items-center relative z-10 space-x-20">
            {arrIconSkill.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <img src={item.src} alt={item.name} className="w-10 h-10" />
                <span className="text-[#333333]">{item.name}</span>
              </li>
            ))}
            {arrIconSkill.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <img src={item.src} alt={item.name} className="w-10 h-10" />
                <span className="text-[#333333]">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
