import React from "react";
import GithubIcon from "../Icon/GithubIcon";
import FacebookIcon from "../Icon/FacebookIcon";
import LinkedinIcon from "../Icon/LinkedinIcon";
import InstagramIcon from "../Icon/InstagramIcon";

const FixedSocial = () => {
  return (
    <div className="fixed bottom-0 left-2 xl:left-10 flex flex-col justify-center items-center space-y-3">
      <a href="https://www.instagram.com/khaiu0901" target="_blank">
        <InstagramIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/quangkhaidev" target="_blank">
        <LinkedinIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="https://www.facebook.com/quangkhai0901" target="_blank">
        <FacebookIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="https://github.com/QuangKhai-dev" target="_blank">
        <GithubIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <div className="fixed-line"></div>
    </div>
  );
};

export default FixedSocial;
