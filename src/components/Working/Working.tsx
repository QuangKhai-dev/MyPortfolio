import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import CarouselExperience from "../Carousel/CarouselExperience";
import Image from "next/image";
import { Timeline } from "../ui/timeline";
import {
  ExternalLink,
  FileDown,
  Link,
  SquareArrowOutUpRight,
} from "lucide-react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { Highlight } from "../ui/hero-highlight";

const Working = () => {
  const listTechstack = [
    "React",
    "TypeScript",
    "MUI",
    "FullCalendar",
    "Tailwind CSS",
    "Sass",
  ];
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const data = [
    {
      time: "Apr 2025 - Dec 2025",
      title: "EDS Company",
      content: (
        <div className="w-full">
          <b className="text-3xl font-bold">Booking & CRM Platform</b>
          <p>
            <span className="text-white/80">Jobtitle:</span>
            <b className="text-[#fbbf24]"> Frontend Lead</b>
          </p>
          <div>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          <ul className="space-y-2 list-disc list-inside">
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
            <b>Tech stack:</b>{" "}
            {listTechstack.map((item, index) => {
              return (
                <span
                  key={index}
                  className="py-1 px-2 bg-gray-600 mr-2 rounded-md text-white text-sm"
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
          <b className="text-3xl font-bold">Booking & CRM Platform</b>
          <p>
            <span className="text-white/80">Jobtitle:</span>
            <b className="text-[#fbbf24]"> Frontend Lead</b>
          </p>
          <div>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          <ul className="space-y-2 list-disc list-inside">
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
            <b>Tech stack:</b>{" "}
            {listTechstack.map((item, index) => {
              return (
                <span
                  key={index}
                  className="py-1 px-2 bg-gray-600 mr-2 rounded-md text-white text-sm"
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
      title: "CyberSoft Academy",
      content: (
        <div className="w-full">
          <b className="text-3xl font-bold">Booking & CRM Platform</b>
          <p>
            <span className="text-white/80">Jobtitle:</span>
            <b className="text-[#fbbf24]"> Frontend Lead</b>
          </p>
          <div>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          <ul className="space-y-2 list-disc list-inside">
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
            <b>Tech stack:</b>{" "}
            {listTechstack.map((item, index) => {
              return (
                <span
                  key={index}
                  className="py-1 px-2 bg-gray-600 mr-2 rounded-md text-white text-sm"
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
    <section className="pt-10 sm:pt-20 pb-40">
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
