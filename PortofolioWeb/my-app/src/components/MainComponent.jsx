import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function MainComponent() {
  return (
    <div id="home">
      <h2>
        Hi, I am <span>Stefan Domingo.</span>
      </h2>

      <h3>A Junior Front End Developer</h3>

      <p>
        A Junior Front End Developer eager to start my career and
        contribute to building amazing user experiences. While I may not have
        any professional experience yet, I have been working on personal
        projects and honing my skills in HTML, CSS, JavaScript and modern
        frontend frameworks such as React. I have a passion for designing
        intuitive, visually appealing, and responsive websites and have a strong
        understanding of the principles of user-centered design.
      </p>

      <div className="icons">
        <a
          href="https://github.com/stefandayy"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/stefan-domingo-4718ab259/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}
