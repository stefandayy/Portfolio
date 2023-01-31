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
        Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
        perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
        modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
        minima consectetur.
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
