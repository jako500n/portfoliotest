import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jakob-semajer-garic-964161239/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/jako17b/" target="_blank">
        <GrInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCZGHT2KUTfJEC0Qf61SM19A/videos"
        target="_blank"
      >
        <FiYoutube />
      </a>
      <a href="https://github.com/jako500n" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
