import Image from "next/image";
import React from "react";

type Props = {};

const MySkill = (props: Props) => {
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
      src: "https://skillicons.dev/icons?i=bootstrap",
      name: "Bootstrap",
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
    {
      src: "/icon/typeorm.png",
      name: "TypeORM",
    },
    {
      src: "https://skillicons.dev/icons?i=express",
      name: "Express",
    },
    {
      src: "/icon/postman.svg",
      name: "Postman",
    },
    {
      src: "https://skillicons.dev/icons?i=vite",
      name: "Vite",
    },
    {
      src: "/icon/CICD.png",
      name: "CI/CD",
    },
  ];
  return (
    <section className="my_skill relative bg-dark-background overflow-hidden">
      <img src="/bg_my_skill_1.svg" alt="" />
      <div className="container">
        <div className="my_skill_content space-y-10 pt-10 sm:pt-20 sm:pb-40">
          <div className="first_row gap-10">
            {arrIconSkill.slice(0, 6).map((item, index) => (
              <div key={index} className="my_skill_item">
                <img
                  src={item.src}
                  alt="html"
                  className="icon_logo_programming h-full w-40"
                />
              </div>
            ))}
          </div>
          <div className="second_row gap-10">
            {arrIconSkill.slice(6, 11).map((item, index) => (
              <div key={index} className="my_skill_item">
                <img
                  src={item.src}
                  alt="html"
                  className="icon_logo_programming h-full w-40"
                />
              </div>
            ))}
          </div>
          <div className="thrid_row gap-10">
            {arrIconSkill.slice(11, 15).map((item, index) => (
              <div key={index} className="my_skill_item">
                <img
                  src={item.src}
                  alt="html"
                  className="icon_logo_programming h-full w-40"
                />
              </div>
            ))}
          </div>
          <div className="four_row gap-10">
            {arrIconSkill.slice(15, 18).map((item, index) => (
              <div key={index} className="my_skill_item">
                <img
                  src={item.src}
                  alt="html"
                  className="icon_logo_programming h-full w-40"
                />
              </div>
            ))}
          </div>
          <div className="five_row gap-10">
            {arrIconSkill.slice(18, 20).map((item, index) => (
              <div key={index} className="my_skill_item">
                <img
                  src={item.src}
                  alt={item.name}
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
                  className="icon_logo_programming h-full w-40"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list_skill_animation relative pt-40 sm:pt-0 mb-20 sm:mb-32">
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

export default MySkill;
