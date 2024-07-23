import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center items-center gap-5">
          <span className="title-line"></span>
          <h2 className="title-contact text-center flex items-end text-3xl justify-center">
            Contact Me
          </h2>
          <span className="title-line"></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
