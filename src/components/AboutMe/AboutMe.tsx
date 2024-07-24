import React from "react";
import imageAboutMe from "./../../assets/img/imageAboutMe.jpg";
import Image from "next/image";
type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section>
      <div className="container">
        <h2 className="title-section flex items-end text-3xl max-w-max mb-5">
          About me
        </h2>
        <div className="flex items-center">
          <div className="w-1/2 space-y-3">
            <p className="text-xl leading-normal">
              Hello! I&rsquo;m{" "}
              <span className="text-light-accent dark:text-dark-accent">
                Đỗ Quang Khải
              </span>
              , a passionate{" "}
              <span className="text-light-accent dark:text-dark-accent">
                Fullstack Web Developer{" "}
              </span>
              and an experienced Web Programming Instructor. <br /> With a deep
              love for coding and a commitment to excellence, I specialize in
              creating modern, optimized websites that deliver exceptional user
              experiences. <br /> My journey in the world of web development has
              been driven by curiosity and a relentless pursuit of knowledge.{" "}
              <br /> As a developer, I thrive on transforming complex problems
              into elegant, efficient solutions. My expertise spans across both
              front-end and back-end development, ensuring a seamless
              integration of technology and design. <br /> In addition to my
              development work, I take great pride in my role as an educator.
              Teaching web programming allows me to share my knowledge and
              inspire the next generation of developers.
              <br />
              My approach focuses on practical, real-world applications that
              enhance analytical thinking and problem-solving skills. Whether
              it&rsquo;s building cutting-edge web applications or guiding
              students through their coding journey, I am dedicated to pushing
              the boundaries of what&rsquo;s possible in web development. <br />
              Let&rsquo;s connect and explore the exciting world of web
              technology together!
            </p>
          </div>
          <div className="w-1/2">
            <div className="w-3/4 ml-auto shape-image-about relative">
              <Image
                src={imageAboutMe}
                alt="image about me"
                className="relative rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
