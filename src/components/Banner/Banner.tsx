import React from "react";
import personalImage from "./../../assets/img/imageBanner.jpg";
import Image from "next/image";
type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="banner relative py-20">
      <div className="container">
        <div className="banner-content flex items-center gap-10">
          <div>
            <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "100ms" }}
            >
              <h1 className="text-light-secondary dark:text-white font-medium mb-5 text-2xl">
                Hi, my name is
              </h1>
            </div>
            <div
              className="fadeup-enter-done title_name relative"
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="big-heading relative">Đỗ Quang Khải.</h2>
            </div>
            <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="big-heading">I build things for the web.</h3>
            </div>
            <div
              className="fadeup-enter-done"
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-xl" style={{ maxWidth: "540px" }}>
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
          <div className="img_banner relative w-1/2">
            {/* <Image
              src={personalImage}
              width={500}
              style={{ backgroundPosition: "bottom", backgroundSize: "200%" }}
              alt="personal Image"
              className="rounded-md relative"
            /> */}
            <Image
              alt="wrapper_img"
              src="/img_banner_new.svg"
              width={800}
              height={500}
            />
            <Image
              className="absolute bottom-0 -left-10 -rotate-12"
              alt="icon react"
              src="/java-script.svg"
              width={150}
              height={150}
            />
            <Image
              className="absolute bottom-0 -right-12 rotate-12"
              alt="icon react"
              src="/logo-react-icon.png"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="arrow_go_down h-96 flex justify-center relative">
        <img src="/arrow_go_down.svg" alt="" className="h-full" />
        <span className="absolute top-1/2 -translate-y-1/2 p-2 bg-[#0b0e17] text-[#4df8ce] text-xl italic">
          See my TechSkill
        </span>
      </div>
    </section>
  );
};

export default Banner;
