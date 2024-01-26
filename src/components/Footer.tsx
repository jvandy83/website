import React from "react";

import linkedinIcon from "../assets/icons/linkedin-icon.png";
import githubIcon from "../assets/icons/github-icon.png";
import twitterIcon from "../assets/icons/twitter-icon.png";

export const Footer = () => {
  return (
    <footer>
      <ul className="bg-black flex justify-around w-screen items-center h-24">
        <li className="w-16">
          <a href="https://linkedin.com/in/vanthedev">
            <img src={linkedinIcon} alt="icon8.com" />
          </a>
        </li>
        <li className="w-20">
          <a href="https://github.com/jvandy83">
            <img src={githubIcon} alt="icon8.com" />
          </a>
        </li>
        <li className="w-12">
          <a href="https://twitter.com/vanthedev">
            <img src={twitterIcon} alt="icon8.com" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
