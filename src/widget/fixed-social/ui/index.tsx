import React from "react";
import GithubIcon from "@/shared/icons/GithubIcon";
import FacebookIcon from "@/shared/icons/FacebookIcon";
import LinkedinIcon from "@/shared/icons/LinkedinIcon";
import InstagramIcon from "@/shared/icons/InstagramIcon";

const FixedSocial = () => {
  return (
    <div className="fixed bottom-0 left-2 xl:left-10 flex flex-col justify-center items-center space-y-3">
      <a href="https://www.instagram.com/khaiu0901" target="_blank" rel="noreferrer">
        <InstagramIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/quangkhaidev" target="_blank" rel="noreferrer">
        <LinkedinIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="https://www.facebook.com/quangkhai0901" target="_blank" rel="noreferrer">
        <FacebookIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="https://github.com/QuangKhai-dev" target="_blank" rel="noreferrer">
        <GithubIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <div className="fixed-line" />
    </div>
  );
};

export default FixedSocial;
