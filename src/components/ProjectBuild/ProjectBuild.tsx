"use client";

import React from "react";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const words = [
  { text: "My" },
  { text: "awesome" },
  { text: "Projects", className: "text-[#fbbf24] dark:text-[#fbbf24]" },
];

const dataProjectBuild = [
  {
    title: "1. Project: Landing page & CRM Platform",
    company: "Unstudio Vietnam",
    jobtitle: " Frontend Lead",
    content: () => {
      return (
        <>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Collaborated with the team to build a business website and
              internal management system for a construction and interior design
              consultancy company.
            </li>
            <li>
              Developed a multilingual, client-facing website showcasing design
              projects, investment-ready properties, and available products.
            </li>
            <li>
              Built frontend features enabling customers to explore services,
              view project details, and contact the business for consultation
              and purchasing.
            </li>
            <li>
              Worked alongside backend engineers to support CRM functionalities
              for managing customer interactions and website content.
            </li>
          </ul>
          <p className="mt-3">
            <b className="text-xs sm:text-sm md:text-base">Tech stack:</b>{" "}
            {[
              "Next.js",
              "TypeScript",
              "React",
              "GSAP",
              "Sass",
              "Tailwind CSS",
            ].map((item: string, index: number) => {
              return (
                <span
                  key={index}
                  className="py-0.5 px-1 xl:py-1 xl:px-2 text-[10px] xl:text-base bg-gray-600 mr-2 rounded-md text-white inline-block whitespace-nowrap mt-1"
                >
                  {item}
                </span>
              );
            })}
          </p>
        </>
      );
    },
    listImage: [
      {
        id: 1,
        className: "col-span-2",
        thumbnail: "/project/unstudio/pic1.png",
        alt: "Unstudio Vietnam",
      },
      {
        id: 2,
        className: "col-span-1",
        thumbnail: "/project/unstudio/pic2.png",
        alt: "Unstudio Vietnam",
      },
      {
        id: 3,
        className: "col-span-1",
        thumbnail: "/project/unstudio/pic3.png",
        alt: "Unstudio Vietnam",
      },
      {
        id: 4,
        className: "col-span-2",
        thumbnail: "/project/unstudio/pic4.png",
        alt: "Unstudio Vietnam",
      },
    ],
    linkLiveCode: null,
    linkGithub: null,
  },
  {
    title: "2. HeyDay Landing Page",
    company: "EBIZWORLD",
    jobtitle: " Frontend Engineer",
    content: () => {
      return (
        <>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Built a high-performance, SEO-optimized landing page for an
              upcoming NFT game targeting the Korean market.
            </li>
            <li>
              Implemented responsive layouts, smooth scrolling effects, and
              carousel interactions inspired by the Baldur’s Gate 3 website.
            </li>
          </ul>
          <p className="mt-3">
            <b className="text-xs sm:text-sm md:text-base">Tech stack:</b>{" "}
            {["Next.js", "TypeScript", "AOS Animation", "Swiper", "Sass"].map(
              (item: string, index: number) => {
                return (
                  <span
                    key={index}
                    className="py-0.5 px-1 xl:py-1 xl:px-2 text-[10px] xl:text-base bg-gray-600 mr-2 rounded-md text-white inline-block whitespace-nowrap mt-1"
                  >
                    {item}
                  </span>
                );
              }
            )}
          </p>
        </>
      );
    },
    listImage: [
      {
        id: 1,
        className: "col-span-2",
        thumbnail: "/project/heyday/pic1.png",
        alt: "HeyDay Landing Page",
      },
      {
        id: 2,
        className: "col-span-1",
        thumbnail: "/project/heyday/pic2.png",
        alt: "HeyDay Landing Page",
      },
      {
        id: 3,
        className: "col-span-1",
        thumbnail: "/project/heyday/pic3.png",
        alt: "HeyDay Landing Page",
      },
      {
        id: 4,
        className: "col-span-2",
        thumbnail: "/project/heyday/pic4.png",
        alt: "HeyDay Landing Page",
      },
    ],
    linkLiveCode: null,
    linkGithub: null,
  },
];

const ProjectBuild = () => {
  return (
    <section className="bg-dark-background">
      <img src="/shape_about_me_2.svg" alt="" className="relative" />
      <div className="container">
        <div className="project_build_title text-center pt-20 xl:pt-40 mb-10">
          <p className="sub_title text-sm">FEATURED PROJECT</p>
          <TypewriterEffectSmooth
            words={words}
            className="justify-center"
            classNameText="text-2xl sm:text-3xl md:text-4xl"
          />
        </div>
        <div className="project_build_slide relative pb-20 xl:pb-40 space-y-20">
          {dataProjectBuild.map((item) => {
            return (
              <div className="project_build_item relative block xl:flex justify-between items-start gap-10 p-0 xl:p-5">
                <div className="flex flex-col h-full xl:min-h-[618px] justify-start">
                  <b className="text-2xl font-bold ">{item.title}</b>
                  <p className="mb-3 mt-2 text-xs sm:text-sm xl:text-base">
                    Company:{" "}
                    <span className="text-[#fbbf24]">{item.company}</span>
                  </p>
                  <p className="text-xs sm:text-sm xl:text-base">
                    <span className="text-white/80">Jobtitle:</span>
                    <b className="text-[#fbbf24]">{item.jobtitle}</b>
                  </p>
                  <div className="mt-5 text-xs sm:text-sm lg:text-base xl:text-base">
                    {item.content()}
                  </div>
                  {item.linkGithub && item.linkLiveCode && (
                    <div className="flex items-end justify-start gap-3 flex-1">
                      {item.linkLiveCode && (
                        <button className="px-8 py-2 rounded-md bg-[#fbbf24] text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#fbbf24] text-upperca flex items-center gap-1 cursor-pointer">
                          <span>Show link</span>
                        </button>
                      )}
                      {item.linkGithub && (
                        <button className="px-8 py-2 rounded-md bg-[#fbbf24] text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#fbbf24] text-upperca flex items-center gap-1 cursor-pointer">
                          <span>Github code</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4 xl:min-w-[650px] min-w-full mt-5 xl:mt-0">
                  {item.listImage.map((card) => (
                    <div key={card.id} className={card.className}>
                      <div className="w-full h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[300px] relative">
                        <Image
                          src={card.thumbnail}
                          alt={card.alt}
                          fill
                          className="w-full h-[300px] object-cover object-top rounded-xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="arrow_go_down h-80 flex justify-center relative">
        <Image
          src="/arrow_go_down.svg"
          width={30}
          height={300}
          alt=""
          className="h-full"
        />
        <span className="absolute top-1/2 -translate-y-1/2 p-2 bg-[#0b0e17] text-[#4df8ce] text-xl italic">
          Contact Me
        </span>
      </div>
    </section>
  );
};

export default ProjectBuild;
