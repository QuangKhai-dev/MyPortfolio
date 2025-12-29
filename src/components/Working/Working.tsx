import React from "react";
import Image from "next/image";
import { Timeline } from "../ui/timeline";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Working = () => {
  const listTechstackEds = [
    "React",
    "TypeScript",
    "MUI",
    "FullCalendar",
    "Tailwind CSS",
    "Sass",
  ];

  const listTechstackChatcut = [
    "React",
    "TypeScript",
    "Redux Toolkit",
    "WebSocket",
    "IndexedDB",
    "AWS (S3, Transcription)",
    "Tailwind CSS",
    "MUI",
  ];

  const listTechstackCybersoft = [
    "Next.js",
    "React",
    "Ant Design",
    "Tailwind CSS",
    "Sass",
  ];

  const listImageEds = [
    {
      name: "Login and register page",
      src: "/working/eds/pic1.png",
    },
    {
      name: "Login and register page",
      src: "/working/eds/pic2.png",
    },
    {
      name: "Login and register page",
      src: "/working/eds/pic3.png",
    },
    {
      name: "Login and register page",
      src: "/working/eds/pic4.png",
    },
    {
      name: "Login and register page",
      src: "/working/eds/pic5.png",
    },
    {
      name: "Login and register page",
      src: "/working/eds/pic6.png",
    },
  ];

  const listImageChatCut = [
    {
      name: "Login and register page",
      src: "/working/chatcut/pic1.png",
    },
    {
      name: "Login and register page",
      src: "/working/chatcut/pic2.png",
    },
    {
      name: "Login and register page",
      src: "/working/chatcut/pic3.png",
    },
  ];

  const listImageCyberSoft = [
    {
      name: "Login and register page",
      src: "/working/cybersoft/pic1.png",
    },
    {
      name: "Login and register page",
      src: "/working/cybersoft/pic2.jpg",
    },
    {
      name: "Login and register page",
      src: "/working/cybersoft/pic3.png",
    },
    {
      name: "Login and register page",
      src: "/working/cybersoft/pic4.png",
    },
    {
      name: "Login and register page",
      src: "/working/cybersoft/pic5.png",
    },
    {
      name: "Login and register page",
      src: "/working/cybersoft/pic6.png",
    },
  ];

  const data = [
    {
      time: "Apr 2025 - Dec 2025",
      title: "EDS Company",

      content: (
        <div className="w-full">
          <b className="text-xl sm:text-3xl font-bold">
            Booking & CRM Platform
          </b>
          <p>
            <span className="text-white/80">Jobtitle:</span>
            <b className="text-[#fbbf24]"> Frontend Lead</b>
          </p>
          <div>
            <AnimatedTestimonials testimonials={listImageEds} />
          </div>
          <ul className="space-y-2 list-disc list-inside text-xs sm:text-base">
            <li>
              Led the frontend team in building a scheduling and CRM platform
              supporting appointment management and customer workflows for an
              Australian spa system.
            </li>
            <li>
              Owned frontend component architecture and UI standards, improving
              maintainability and consistency across the application.
            </li>
            <li>
              Collaborated closely with designers and QA to analyze requirements
              and deliver responsive, user-friendly interfaces aligned with
              business needs.
            </li>
            <li>
              Made technical decisions on frontend libraries and tooling,
              balancing development speed, scalability, and long-term
              maintainability.
            </li>
            <li>
              Conducted code reviews and mentored team members, fostering a
              collaborative engineering culture and improving overall code
              quality.
            </li>
          </ul>
          <p className="mt-5">
            <b className="text-xs md:text-base">Tech stack:</b>{" "}
            {listTechstackEds.map((item, index) => {
              return (
                <span
                  key={index}
                  className="md:py-1 md:px-2 py-0.5 px-1 mt-2 bg-gray-600 mr-2 rounded-md text-white text-sm inline-block whitespace-nowrap"
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      ),
    },
    {
      time: "Sept 2024 - Mar 2025",
      title: "ChatCut.inc",
      content: (
        <div className="w-full">
          <b className="text-xl sm:text-3xl font-bold">AI Video Editor</b>
          <p>
            <span className="text-white/80">Jobtitle:</span>
            <b className="text-[#fbbf24]">
              {" "}
              Fullstack Developer - Focus Frontend
            </b>
          </p>
          <div>
            <AnimatedTestimonials testimonials={listImageChatCut} />
          </div>
          <ul className="space-y-2 list-disc list-inside text-xs sm:text-base">
            <li>
              Built a real-time video editing platform enabling users to cut and
              edit videos directly from text transcripts.
            </li>
            <li>
              Owned frontend architecture for transcript-based editing,
              combining drag-and-drop timelines, keyboard shortcuts, and live
              preview synchronization.
            </li>
            <li>
              Implemented reliable media handling with AWS S3 uploads,
              WebSocket-based status updates, and offline-safe state persistence
              using Redux and IndexedDB.
            </li>
            <li>
              Collaborated closely with founders and backend engineers to shape
              product direction and deliver a smooth, high-performance editing
              experience.
            </li>
          </ul>
          <p className="mt-2">
            <b className="text-xs md:text-base">Tech stack:</b>{" "}
            {listTechstackChatcut.map((item, index) => {
              return (
                <span
                  key={index}
                  className="md:py-1 md:px-2 py-0.5 px-1 mt-2 bg-gray-600 mr-2 rounded-md text-white text-sm inline-block whitespace-nowrap"
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      ),
    },
    {
      time: "Aug 2022 - Aug 2024",
      title: "CyberSoft",
      content: (
        <div className="w-full">
          <b className="text-xl sm:text-3xl font-bold">
            CyberSoft – Learning Platform & CRM
          </b>
          <p>
            <span className="text-white/80">Jobtitle:</span>
            <b className="text-[#fbbf24]"> Frontend Lead</b>
          </p>
          <div>
            <AnimatedTestimonials testimonials={listImageCyberSoft} />
          </div>
          <ul className="space-y-2 list-disc list-inside text-xs sm:text-base">
            <li>
              Contributed to maintaining and enhancing a web-based learning
              platform and internal CRM used to manage students, courses, and
              personnel.
            </li>
            <li>
              Built and refined frontend features supporting student progress
              tracking and internal data management workflows.
            </li>
            <li>
              Improved UX/UI consistency across key learning and management
              screens to streamline user interactions.
            </li>
            <li>
              Collaborated with designers to deliver responsive marketing
              landing pages supporting new course and product launches.
            </li>
          </ul>
          <p className="mt-5">
            <b className="text-xs md:text-base">Tech stack:</b>{" "}
            {listTechstackCybersoft.map((item, index) => {
              return (
                <span
                  key={index}
                  className="md:py-1 md:px-2 py-0.5 px-1 mt-2 bg-gray-600 mr-2 rounded-md text-white text-sm inline-block whitespace-nowrap"
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="pt-10 sm:pt-20 xl:pb-40 pb-12">
      <div className="arrow_go_down h-40 sm:h-56 lg:h-96 flex justify-center relative">
        <Image
          src="/arrow_go_down.svg"
          width={30}
          height={300}
          alt=""
          className="h-full"
        />
        <span className="absolute top-1/2 -translate-y-1/2 p-2 bg-[#0b0e17] text-[#4df8ce] text-xl italic">
          Experiences
        </span>
      </div>
      <div className="container">
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
};

export default Working;
