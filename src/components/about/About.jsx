import React from "react";
import "./about.css";
import ME from "../../assets/aboutme.jpg";
import { BiFootball } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card flexing">
              <BiFootball className="about__icon" />
              <h5>Freestyler</h5>
              <small>7+ years</small>
            </article>

            <article className="about__card flexing">
              <BsCamera className="about__icon" />
              <h5>Videographer</h5>
              <small>7+ years</small>
            </article>

            <article className="about__card flexing">
              <BsCodeSlash className="about__icon" />
              <h5>Multimedia</h5>
              <small>1+ years</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sit
            totam sunt tempora molestias qui, nostrum impedit est laudantium
            fuga quod ullam itaque eveniet, sint mollitia at quia ipsam
            obcaecati?
          </p>

          <a href="#contact" class="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
