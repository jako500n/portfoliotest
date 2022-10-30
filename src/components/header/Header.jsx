import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/mig.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="h-screen pt-16 overflow-hidden">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Jakob Semajer-Garic</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
