import React from "react";
import { Badge, Container } from "react-bootstrap";

import { SiRedux,SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs, SiGithub } from "react-icons/si";

export default function SkillsComponent() {
  return (
    <div id="skills">
      <h4>SKILLS</h4>
      <Container className="text-center my-4">
        <Badge className="p-2 m-2" bg="secondary">
          HTML <SiHtml5/>
        </Badge>
        <Badge className="p-2 m-2" bg="secondary">
          CSS <SiCss3/>
        </Badge>
        <Badge className="p-2 m-2" bg="secondary">
          JavaScript <SiJavascript/>
        </Badge>
        <Badge className="p-2 m-2" bg="secondary">
          React.js <SiReact />
        </Badge>
        <Badge className="p-2 m-2" bg="secondary">
          Redux <SiRedux/>
        </Badge>
        <Badge className="p-2 m-2" bg="secondary">
          Bootstrap <SiBootstrap/>
        </Badge>
        <Badge className="p-2 m-2" bg="secondary">
          Node.js <SiNodedotjs/>
        </Badge>
        <Badge className="p-2 m-2" bg="secondary">
          GitHub <SiGithub/>
        </Badge>
      </Container>
    </div>
  );
}
