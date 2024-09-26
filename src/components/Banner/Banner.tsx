import React from "react";
import personalImage from "./../../assets/img/imageBanner.jpg";
import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="banner relative py-10  sm:py-20">
      <div className="container">
        <div className="banner-content block sm:flex items-center gap-10">
          <div className="w-full mb-10 sm:mb-0 sm:w-7/12 lg:w-1/2">
            <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "100ms" }}
            >
              <h1 className="text-light-secondary dark:text-white font-medium mb-5 text-2xl animate__animated animate__backInLeft animate__fast">
                Hi, my name is
              </h1>
            </div>
            <div
              className="fadeup-enter-done title_name relative "
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="big-heading relative animate__animated animate__backInLeft animate__slow">
                Đỗ Quang Khải.
              </h2>
            </div>
            <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="big-heading animate__animated animate__backInLeft animate__slow">
                I build things for the web.
              </h3>
            </div>
            <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "400ms" }}
            >
              <p
                className="text-xl animate__slower animate__animated animate__backInLeft"
                style={{ maxWidth: "540px" }}
              >
                I am a web developer and an instructor for programming courses.
                Currently I focus on building websites with modern
                human-centered technologies in Vietnam.
              </p>
            </div>
            {/* <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "500ms" }}
            >
              <button className="btn-start">See my Portfolio!</button>
              <a className="dowload-cv" href="#" target="_blank">
                Dowload My CV
              </a>
            </div> */}
          </div>
          <div className="img_banner relative w-full sm:w-5/12 lg:w-1/2">
            {/* <Image
              src={personalImage}
              width={500}
              style={{ backgroundPosition: "bottom", backgroundSize: "200%" }}
              alt="personal Image"
              className="rounded-md relative"
            /> */}
            <div className="w-full h-[400px] lg:h-[550px]">
              <Image
                alt="wrapper_img"
                src="/img_banner_new.svg"
                // width={800}
                // height={500}
                fill
                style={{
                  objectFit: "contain",
                }}
                className="animate__slower animate__animated animate__backInRight"
              />
            </div>
            <div className="h-20 w-20 sm:w-28 sm:h-28 lg:h-36 lg:w-36 absolute bottom-5 lg:bottom-0 sm:bottom-8 -left-5 sm:-left-10 -rotate-12">
              <Image
                className=""
                alt="icon react"
                src="/java-script.svg"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="h-20 w-20 sm:w-28 sm:h-28 lg:h-36 lg:w-36 absolute bottom-5 lg:bottom-0 sm:bottom-8 -right-5 sm:-right-12 rotate-12">
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
      </div>
      <div className="arrow_go_down h-40 sm:h-56 lg:h-96 flex justify-center relative">
        <img src="/arrow_go_down.svg" alt="" className="h-full" />
        <span className="absolute top-1/2 -translate-y-1/2 p-2 bg-[#0b0e17] text-[#4df8ce] text-xl italic">
          See my TechSkill
        </span>
      </div>
    </section>
  );
};

export default Banner;
