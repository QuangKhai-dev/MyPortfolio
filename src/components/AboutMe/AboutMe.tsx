import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="relative about_me text-black">
      <img src="/shape_about_me.svg" alt="" className="relative" />
      <div className="about_me_content py-20 relative">
        <div className="container">
          <h2 className="mb-10 xl:mb-0 title-section block sm:flex items-end text-4xl xl:text-6xl max-w-max">
            About me
          </h2>
          <div className="flex items-start flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-7/12 xl:w-1/2 pr-5 xl:pr-0 space-y-3">
              <div className="text-sm lg:text-base xl:text-lg leading-normal">
                <p>
                  Hello! I&rsquo;m{" "}
                  <span className="text-light-accent dark:text-dark-accent font-semibold">
                    Đỗ Quang Khải
                  </span>
                  , a passionate{" "}
                  <span className="text-light-accent dark:text-dark-accent font-semibold">
                    Fullstack Web Developer{" "}
                  </span>
                  and an experienced Web Programming Instructor.{" "}
                </p>
                <br />
                <p>
                  With a deep love for coding and a commitment to excellence, I
                  specialize in creating modern, optimized websites that deliver
                  exceptional user experiences.
                </p>
                <br />
                <p>
                  My journey in the world of web development has been driven by
                  curiosity and a relentless pursuit of knowledge.
                </p>
                <br />
                <p>
                  As a developer, I thrive on transforming complex problems into
                  elegant, efficient solutions. My expertise spans across both
                  front-end and back-end development, ensuring a seamless
                  integration of technology and design. <br /> In addition to my
                  development work, I take great pride in my role as an
                  educator. Teaching web programming allows me to share my
                  knowledge and inspire the next generation of developers.
                </p>
                <br />
                My approach focuses on practical, real-world applications that
                enhance analytical thinking and problem-solving skills. Whether
                it&rsquo;s building cutting-edge web applications or guiding
                students through their coding journey, I am dedicated to pushing
                the boundaries of what&rsquo;s possible in web development.{" "}
                <br />
                Let&rsquo;s connect and explore the exciting world of web
                technology together!
              </div>
            </div>
            <div className="w-full sm:w-5/12 xl:w-1/2">
              <div className="w-full mb-5 sm:mb-0 xl:w-3/4 ml-auto relative">
                <Image
                  src="/aboutme.png"
                  alt="image about me"
                  width={666}
                  height={921}
                  className="relative rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <img src="/cat_head.png" alt="cat head" className="w-full" />
            <img src="/cat_head.png" alt="cat head" className="w-full" />
            <img src="/cat_head.png" alt="cat head" className="w-full" />
          </div>
        </div>
      </div>
      <img src="/shape_about_me_2.svg" alt="" className="relative" />
    </section>
  );
};

export default AboutMe;
