import Image from "next/image";
import React from "react";

type Props = {};

const MySkill = (props: Props) => {
  return (
    <section>
      <div className="container">
        <h2 className="title-section flex items-end text-3xl max-w-max mb-5">
          My Skill
        </h2>
        <div className="space-y-3">
          <a
            target="_blank"
            className="block"
            rel="noopener noreferrer nofollow"
            href="https://camo.githubusercontent.com/5be17ed4ad297405620683b156ebe09aa1921085c7e91661ce67d8376a9eca50/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a732c72656163742c7673636f64652c74732c7461696c77696e642c72656475782c707269736d61"
          >
            <img
              width="100%"
              src="https://camo.githubusercontent.com/5be17ed4ad297405620683b156ebe09aa1921085c7e91661ce67d8376a9eca50/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a732c72656163742c7673636f64652c74732c7461696c77696e642c72656475782c707269736d61"
              alt="my skill"
              data-canonical-src="https://skillicons.dev/icons?i=html,css,js,react,vscode,ts,tailwind,redux,prisma"
              style={{ maxWidth: "100%" }}
            />
          </a>
          <a
            target="_blank"
            className="block"
            rel="noopener noreferrer nofollow"
            href="https://camo.githubusercontent.com/25e239db64d013e0463e5f5cfe28ded5875314a8f73461b5588d228f8af1cf58/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d706f73746d616e2c70732c6e6f64656a732c6e6578746a732c6e6573746a732c6d7973716c2c6769742c657870726573732c646f636b6572"
          >
            <img
              width="100%"
              src="https://camo.githubusercontent.com/25e239db64d013e0463e5f5cfe28ded5875314a8f73461b5588d228f8af1cf58/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d706f73746d616e2c70732c6e6f64656a732c6e6578746a732c6e6573746a732c6d7973716c2c6769742c657870726573732c646f636b6572"
              alt="my skill"
              data-canonical-src="https://skillicons.dev/icons?i=postman,ps,nodejs,nextjs,nestjs,mysql,git,express,docker"
              style={{ maxWidth: "100%" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MySkill;
