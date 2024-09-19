import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import CarouselExperience from "../Carousel/CarouselExperience";

type Props = {};

const Working = (props: Props) => {
  const arrWorkingAndLearned = [
    {
      value: "a",
      title: "CyberSoft Academy",
    },
    {
      value: "b",
      title: "Freelancer",
    },
  ];
  return (
    <section className=" pt-20 pb-40">
      <div className="arrow_go_down h-96 flex justify-center relative">
        <img src="/arrow_go_down.svg" alt="" className="h-full" />
        <span className="absolute top-1/2 -translate-y-1/2 p-2 bg-[#0b0e17] text-[#4df8ce] text-xl italic">
          Experiences
        </span>
      </div>
      <div className="container">
        <div className="working_content flex items-center justify-center">
          <div className="working_text w-1/2 pr-10">
            <h2 className="big-heading text-4xl">
              Where I've Worked and Learn
            </h2>
            <p className="text-lg">
              I started my web development journey in 2021 with 6 months of
              studying Frontend programming at CyberSoft Academy. After
              completing the course, I began an internship and secured my first
              job at CyberSoft. During my time working there, my tasks primarily
              involved developing web projects related to learning for students
              using ReactJS, maintaining and adding features to CyberSoft's
              landing page on the WordPress platform with HTML, CSS, and
              JavaScript. During this period, I also had the opportunity to try
              teaching and sharing my web development experience with students
              within CyberSoft's system.
            </p>
          </div>
          <div className="working_carousel w-1/2 flex items-center justify-center">
            <CarouselExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
