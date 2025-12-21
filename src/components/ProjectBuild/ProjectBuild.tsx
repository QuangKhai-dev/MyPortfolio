"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import StickyData from "../StickyData/StickyData";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type Props = {};

const dataSticky = [
  <div className="flex space-x-4" key={1}>
    <div className="pr-14">
      <p className="line_sticky_data">CyberSoft</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">CyberSoft Landing Page</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Build landing pages to promote your company&lsquo;s customers. Use
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
  <div className="flex space-x-4" key={2}>
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
          <Image
            src="https://skillicons.dev/icons?i=react"
            alt="React"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Reactjs</span>
        </li>
        <li className="flex items-center">
          <Image
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
          <Image
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
  <div className="flex space-x-4" key={3}>
    <div className="pr-14">
      <p className="line_sticky_data">TechX</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">TechX Landing Page</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Build a landing page from scratch for a website promoting your
        company&lsquo;s new course
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <Image
            src="https://skillicons.dev/icons?i=nextjs"
            alt="Nestjs"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Nextjs</span>
        </li>
        <li className="flex items-center">
          <Image
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
  <div className="flex space-x-4" key={4}>
    <div className="pr-14">
      <p className="line_sticky_data">CyberSoft</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">CRM CyberSoft</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Maintain and upgrade some features for CyberSoft company&lsquo;s web
        administration interface
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <Image
            src="	https://skillicons.dev/icons?i=react"
            alt="React"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Reactjs</span>
        </li>
        <li className="flex items-center">
          <Image
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
          <Image
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
  <div className="flex space-x-4" key={5}>
    <div className="pr-14">
      <p className="line_sticky_data">TechX</p>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-3">CRM TechX</h3>
      <p className="text-gray-400 w-1/2 mb-3">
        Maintain and upgrade some features for TechX company&lsquo;s web
        administration interface
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <Image
            src="	https://skillicons.dev/icons?i=react"
            alt="React"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Reactjs</span>
        </li>
        <li className="flex items-center">
          <Image
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
          <Image
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
  <div className="flex space-x-4" key={6}>
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
          <Image
            src="https://skillicons.dev/icons?i=nextjs"
            alt="Nestjs"
            className="mr-2"
            width={20}
            height={20}
          />
          <span>Nextjs</span>
        </li>
        <li className="flex items-center">
          <Image
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
          <Image
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

type ProjectItem = {
  title: string;
  image: string;
  className: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const items: ProjectItem[] = [
  {
    title: "CyberSoft Landing Page",
    image: "/project/cyberSoftLanding1.png",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
    description: "Landing page cho công ty CyberSoft",
    ctaText: "Xem thêm",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Build landing pages to promote your company&apos;s customers. Use
          technologies like WordPress, HTML, CSS, JavaScript. <br /> <br /> Dự
          án này được xây dựng với các công nghệ hiện đại để tạo ra trải nghiệm
          người dùng tốt nhất.
        </p>
      );
    },
  },
  {
    title: "CyberSoft Learning",
    image: "/project/cyberSoftLearning2.png",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
    description: "Hệ thống học tập trực tuyến",
    ctaText: "Xem thêm",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Learning system interface, access documents and watch teaching videos,
          manage learning progress. <br /> <br /> Sử dụng React, TailwindCSS,
          Antd và Redux Toolkit để xây dựng một hệ thống học tập hoàn chỉnh.
        </p>
      );
    },
  },
  {
    title: "TechX Landing Page",
    image: "/project/cyberSoftTechXLanding1.png",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
    description: "Landing page cho khóa học mới",
    ctaText: "Xem thêm",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Build a landing page from scratch for a website promoting your
          company&apos;s new course. <br /> <br /> Được xây dựng với Next.js,
          TailwindCSS và Redux Toolkit để tạo ra một trang landing page hiện đại
          và chuyên nghiệp.
        </p>
      );
    },
  },
  {
    title: "CRM CyberSoft",
    image: "/project/crmCyberSoft1.png",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
    description: "Hệ thống quản lý khách hàng",
    ctaText: "Xem thêm",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Maintain and upgrade some features for CyberSoft company&apos;s web
          administration interface. <br /> <br /> Sử dụng React, TailwindCSS,
          Antd và Redux Toolkit để quản lý và nâng cấp các tính năng cho hệ
          thống CRM.
        </p>
      );
    },
  },
  {
    title: "CRM TechX",
    image: "/project/crmTechX1.png",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
    description: "Hệ thống quản lý khách hàng TechX",
    ctaText: "Xem thêm",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Maintain and upgrade some features for TechX company&apos;s web
          administration interface. <br /> <br /> Tương tự như CRM CyberSoft, hệ
          thống này được xây dựng với các công nghệ hiện đại để quản lý khách
          hàng hiệu quả.
        </p>
      );
    },
  },
  {
    title: "Project Xiên Khè",
    image: "/project/xienKheLanding.png",
    className: "absolute top-24 left-[45%] rotate-[-7deg]",
    description: "Hệ thống quản lý nhà hàng",
    ctaText: "Xem thêm",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Freelance full stack project to build a skewer restaurant management
          system, a graduation project. <br /> <br /> Dự án tốt nghiệp được xây
          dựng với Next.js, NestJS, Antd và Redux Toolkit để quản lý nhà hàng
          xiên khè một cách hiệu quả.
        </p>
      );
    },
  },
  {
    title: "Canada",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "absolute top-8 left-[30%] rotate-[4deg]",
    description: "Dự án mẫu",
    ctaText: "Xem thêm",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>Dự án mẫu với các tính năng cơ bản.</p>;
    },
  },
];

const ProjectBuild = (props: Props) => {
  const stickyDivRef = useRef(null);
  const itemRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [content, setContent] = useState(dataSticky[0]);
  const [flags, setFlags] = useState(Array(itemRefs.length).fill(false));
  const [active, setActive] = useState<ProjectItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const id = useId();
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

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(modalRef, () => setActive(null));
  return (
    <section className="bg-dark-background">
      <img src="/shape_about_me_2.svg" alt="" className="relative" />
      <div className="container">
        <div className="project_build_title text-center pt-40 mb-10">
          <p className="sub_title text-sm mb-3">FEATURED PROJECT</p>
          <h2 className="text-6xl uppercase">My Project</h2>
        </div>
        <div className="project_build_slide relative flex justify-center pb-40">
          <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
              If its your first day at Fight Club, you have to fight.
            </p>
            {items.map((item) => (
              <motion.div
                key={`card-${item.title}-${id}`}
                layoutId={`card-${item.title}-${id}`}
                onClick={() => setActive(item)}
                className={`${item.className} cursor-pointer`}
              >
                <DraggableCardBody className="w-full h-full">
                  <motion.div layoutId={`image-${item.title}-${id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                    />
                  </motion.div>
                  <motion.h3
                    layoutId={`title-${item.title}-${id}`}
                    className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300"
                  >
                    {item.title}
                  </motion.h3>
                </DraggableCardBody>
              </motion.div>
            ))}
          </DraggableCardContainer>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-close-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-50"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={modalRef}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.image}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {active.content()}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
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

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default ProjectBuild;
