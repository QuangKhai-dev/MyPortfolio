import React from "react";

const Contact = () => {
  return (
    <section className="contact_me">
      <img src="/shape_about_me_2.svg" alt="" className="relative" />
      <div className="container">
        <div className="py-20">
          <ul className="text-white grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <li>
              <span>Email:</span>
              <a target="_blank" href="mailto:quangkhai0901@gmail.com">
                Quangkhai0901@gmail.com
              </a>
            </li>
            <li>
              <span>Phone:</span>
              <a target="_blank" href="tel:0823858955">
                0823858955
              </a>
            </li>
            <li>
              <span>Github:</span>
              <a target="_blank" href="https://github.com/QuangKhai-dev">
                QuangKhaiDev
              </a>
            </li>
            <li>
              <span>Linkedin:</span>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/quangkhaidev/"
              >
                Quang Khải Dev
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
