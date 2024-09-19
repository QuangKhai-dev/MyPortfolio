import React from "react";

type Props = {};

const ProjectBuild = (props: Props) => {
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
            <div className="project_item project_1">
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
            <div className="project_item project_2">
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
            <div className="project_item project_3">
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
            <div className="project_item project_4">
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
            <div className="project_item project_5">
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
            <div className="project_item project_6">
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
          <div className="project_sticky sticky top-40 h-10 w-1/2 pl-10">
            <div className="w-full bg-red-500 h-5"></div>
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
