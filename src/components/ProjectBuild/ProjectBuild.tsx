"use client";

import React, { useEffect, useRef, useState } from "react";
import StickyData from "../StickyData/StickyData";
import Image from "next/image";

type Props = {};

const dataSticky = [
  <div className="flex space-x-4">
    <div className="pr-14">
      <p className="line_sticky_data">CyberSoft</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">CyberSoft Landing Page</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Build landing pages to promote your company's customers. Use
        technologies like WordPress, HTML, CSS,...
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <Image
            src="/icon/java-script.svg"
            alt="javascript"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Javascript</span>
        </li>
        <li className="flex items-center">
          <Image
            src="/icon/wordpress.svg"
            alt="WordPress"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>WordPress</span>
        </li>
        <li className="flex items-center">
          <Image
            src="/icon/html.svg"
            alt="HTML"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>HTML</span>
        </li>
        <li className="flex items-center">
          <Image
            src="/icon/css-3.svg"
            alt="CSS"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>CSS</span>
        </li>
      </ul>
    </div>
  </div>,
  <div className="flex space-x-4">
    <div className="pr-14">
      <p className="line_sticky_data">CyberSoft</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">CyberSoft Learning</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Learning system interface, access documents and watch teaching videos,
        manage learning progress
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <img
            src="	https://skillicons.dev/icons?i=react"
            alt="React"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Reactjs</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=tailwind"
            alt="WordPress"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>TailwindCSS</span>
        </li>
        <li className="flex items-center">
          <Image
            src="/icon/antd.png"
            alt="HTML"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Antd</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=redux"
            alt="CSS"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Redux Toolkit</span>
        </li>
      </ul>
    </div>
  </div>,
  <div className="flex space-x-4">
    <div className="pr-14">
      <p className="line_sticky_data">TechX</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">TechX Landing Page</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Build a landing page from scratch for a website promoting your company's
        new course
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=nextjs"
            alt="Nestjs"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Nextjs</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=tailwind"
            alt="WordPress"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>TailwindCSS</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=redux"
            alt="CSS"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Redux Toolkit</span>
        </li>
      </ul>
    </div>
  </div>,
  <div className="flex space-x-4">
    <div className="pr-14">
      <p className="line_sticky_data">CyberSoft</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">CRM CyberSoft</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Maintain and upgrade some features for CyberSoft company's web
        administration interface
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <img
            src="	https://skillicons.dev/icons?i=react"
            alt="React"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Reactjs</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=tailwind"
            alt="WordPress"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>TailwindCSS</span>
        </li>
        <li className="flex items-center">
          <Image
            src="/icon/antd.png"
            alt="HTML"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Antd</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=redux"
            alt="CSS"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Redux Toolkit</span>
        </li>
      </ul>
    </div>
  </div>,
  <div className="flex space-x-4">
    <div className="pr-14">
      <p className="line_sticky_data">TechX</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">CRM TechX</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Maintain and upgrade some features for TechX company's web
        administration interface
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <img
            src="	https://skillicons.dev/icons?i=react"
            alt="React"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Reactjs</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=tailwind"
            alt="WordPress"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>TailwindCSS</span>
        </li>
        <li className="flex items-center">
          <Image
            src="/icon/antd.png"
            alt="HTML"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Antd</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=redux"
            alt="CSS"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Redux Toolkit</span>
        </li>
      </ul>
    </div>
  </div>,
  <div className="flex space-x-4">
    <div className="pr-14">
      <p className="line_sticky_data">Freelancer</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">Project Xiên Khè</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Freelance full stack project to build a skewer restaurant management
        system, a graduation project
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=nextjs"
            alt="Nestjs"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Nextjs</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=nestjs"
            alt="Nestjs"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Nestjs</span>
        </li>
        <li className="flex items-center">
          <Image
            src="/icon/antd.png"
            alt="HTML"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Antd</span>
        </li>
        <li className="flex items-center">
          <img
            src="https://skillicons.dev/icons?i=redux"
            alt="CSS"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Redux Toolkit</span>
        </li>
      </ul>
    </div>
  </div>,
];

const ProjectBuild = (props: Props) => {
  const stickyDivRef = useRef(null);
  const itemRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [content, setContent] = useState(dataSticky[0]);
  const [flags, setFlags] = useState(Array(itemRefs.length).fill(false));
  useEffect(() => {
    const handleScroll = () => {
      itemRefs.forEach((ref, index) => {
        const item = ref.current;
        let pAnimation = document.querySelector(".line_sticky_data");

        if (item) {
          const rect = item.getBoundingClientRect();

          // Nếu item thỏa mãn điều kiện ở vị trí 160px từ top
          if (rect.top <= 180 && rect.bottom >= 180) {
            setFlags((prevFlags) => {
              if (prevFlags[index]) return prevFlags;

              // Thêm class animation khi điều kiện thỏa mãn
              setContent(dataSticky[index]);
              pAnimation?.classList.add("upToDownAnimation");

              // Sau 500ms, xóa class animation
              setTimeout(() => {
                pAnimation?.classList.remove("upToDownAnimation");
              }, 500);

              // Đặt cờ của item này thành true
              const newFlags = [...prevFlags];
              newFlags[index] = true;
              return newFlags;
            });
          }

          // Đặt lại cờ khi item ra khỏi vùng viewport
          if (rect.top > 180 || rect.bottom < 180) {
            setFlags((prevFlags) => {
              if (!prevFlags[index]) return prevFlags; // Nếu cờ đã là false thì không cần xử lý

              const newFlags = [...prevFlags];
              newFlags[index] = false; // Đặt lại cờ để animation có thể chạy lại khi cuộn lên
              return newFlags;
            });
          }
        }
      });
    };

    // Lắng nghe sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [flags, dataSticky]); // Thêm dependencies cho flags và dataSticky
  console.log(flags);
  return (
    <section className="bg-dark-background">
      <img src="/shape_about_me_2.svg" alt="" className="relative" />
      <div className="container">
        <div className="project_build_title text-center pt-40 mb-10">
          <p className="sub_title text-sm mb-3">FEATURED PROJECT</p>
          <h2 className="text-6xl uppercase">My Project</h2>
        </div>
        <div className="project_build_slide relative flex justify-center pb-40">
          <div className="project_build_content w-1/2">
            {/* cybersoft landing page  */}
            <div className="project_item project_1" ref={itemRefs[0]}>
              <div className="project_item_bg overflow-hidden">
                <div className="project_item_title mb-5 relative">
                  <h3 className="text-2xl font-bold mb-2">
                    CyberSoft Landing Page
                  </h3>
                  <p className="text-sm text-gray-400">
                    WordPress - HTML - CSS - JS
                  </p>
                  <img
                    src="/icon/right-arrow.svg"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3"
                    alt=""
                  />
                </div>
                <div className="project_item_content">
                  <img
                    className=""
                    src="/project/cyberSoftLanding1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* cybersoft learning  */}
            <div className="project_item project_2" ref={itemRefs[1]}>
              <div className="project_item_bg overflow-hidden">
                <div className="project_item_title mb-5 relative">
                  <h3 className="text-2xl font-bold mb-2">
                    CyberSoft Learning
                  </h3>
                  <p className="text-sm text-gray-400">
                    React - Antd - Tailwind - Redux - Formik - HTML - CSS - JS
                  </p>
                  <img
                    src="/icon/right-arrow.svg"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3"
                    alt=""
                  />
                </div>
                <div className="project_item_content">
                  <img
                    className=""
                    src="/project/cyberSoftLearning2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* techx Landing  */}
            <div className="project_item project_3" ref={itemRefs[2]}>
              <div className="project_item_bg overflow-hidden">
                <div className="project_item_title mb-5 relative">
                  <h3 className="text-2xl font-bold mb-2">
                    TechX Landing Page
                  </h3>
                  <p className="text-sm text-gray-400">
                    NextJS - Tailwind - Redux - Formik - HTML - CSS - JS
                  </p>
                  <img
                    src="/icon/right-arrow.svg"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3"
                    alt=""
                  />
                </div>
                <div className="project_item_content">
                  <img
                    className=""
                    src="/project/cyberSoftTechXLanding1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* CRM Cyber  */}
            <div className="project_item project_4" ref={itemRefs[3]}>
              <div className="project_item_bg overflow-hidden">
                <div className="project_item_title mb-5 relative">
                  <h3 className="text-2xl font-bold mb-2">CRM CyberSoft</h3>
                  <p className="text-sm text-gray-400">
                    NextJS - Tailwind - Redux - Formik - HTML - CSS - JS
                  </p>
                  <img
                    src="/icon/right-arrow.svg"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3"
                    alt=""
                  />
                </div>
                <div className="project_item_content">
                  <img className="" src="/project/crmCyberSoft1.png" alt="" />
                </div>
              </div>
            </div>
            {/* CRM Techx  */}
            <div className="project_item project_5" ref={itemRefs[4]}>
              <div className="project_item_bg overflow-hidden">
                <div className="project_item_title mb-5 relative">
                  <h3 className="text-2xl font-bold mb-2">CRM TechX</h3>
                  <p className="text-sm text-gray-400">
                    NextJS - Tailwind - Redux - Formik - HTML - CSS - JS
                  </p>
                  <img
                    src="/icon/right-arrow.svg"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3"
                    alt=""
                  />
                </div>
                <div className="project_item_content">
                  <img className="" src="/project/crmTechX1.png" alt="" />
                </div>
              </div>
            </div>
            {/* Project Xiên Khè  */}
            <div className="project_item project_6" ref={itemRefs[5]}>
              <div className="project_item_bg overflow-hidden">
                <div className="project_item_title mb-5 relative">
                  <h3 className="text-2xl font-bold mb-2">Project Xiên Khè</h3>
                  <p className="text-sm text-gray-400">
                    NextJS - Tailwind - Redux - Formik - HTML - CSS - JS
                  </p>
                  <img
                    src="/icon/right-arrow.svg"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3"
                    alt=""
                  />
                </div>
                <div className="project_item_content">
                  <img className="" src="/project/xienKheLanding.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="project_sticky sticky top-40 h-10 w-1/2 pl-10"
            ref={stickyDivRef}
          >
            <StickyData data={content} />
          </div>
        </div>
      </div>
      <div className="arrow_go_down h-80 flex justify-center relative">
        <img src="/arrow_go_down.svg" alt="" className="h-full" />
        <span className="absolute top-1/2 -translate-y-1/2 p-2 bg-[#0b0e17] text-[#4df8ce] text-xl italic">
          Contact Me
        </span>
      </div>
    </section>
  );
};

export default ProjectBuild;
