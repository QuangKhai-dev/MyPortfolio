import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import GithubIcon from "../Icon/GithubIcon";
import FacebookIcon from "../Icon/FacebookIcon";
import LinkedinIcon from "../Icon/LinkedinIcon";
import InstagramIcon from "../Icon/InstagramIcon";
type Props = {};

const FixedSocial = (props: Props) => {
  return (
    <div className="fixed bottom-0 left-10 flex flex-col justify-center items-center space-y-3">
      <a href="#">
        <InstagramIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="#">
        <LinkedinIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="#">
        <FacebookIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <a href="#">
        <GithubIcon className="hover:-translate-y-1 hover:fill-light-accent p-1 duration-300" />
      </a>
      <div className="fixed-line"></div>
    </div>
  );
};

export default FixedSocial;
