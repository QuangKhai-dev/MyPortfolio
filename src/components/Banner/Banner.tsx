import React from "react";
import personalImage from "./../../assets/img/imageBanner.jpg";
import Image from "next/image";
type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="container">
      <div className="banner-content flex items-center gap-10">
        <div>
          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "100ms" }}
          >
            <h1 className="text-light-secondary dark:text-dark-secondary font-medium mb-5 text-xl">
              Hi, my name is
            </h1>
          </div>
          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="big-heading">Đỗ Quang Khải.</h2>
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
            <p style={{ maxWidth: "540px" }}>
              I am a web developer and an instructor for programming courses.
              Currently I focus on building websites with modern human-centered
              technologies in Vietnam.
            </p>
          </div>
          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "500ms" }}
          >
            <button className="btn-start">See my Portfolio!</button>
            <a className="dowload-cv" href="#" target="_blank">
              Dowload My CV
            </a>
          </div>
        </div>
        <div>
          <Image
            src={personalImage}
            width={500}
            style={{ backgroundPosition: "bottom", backgroundSize: "200%" }}
            alt="personal Image"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
