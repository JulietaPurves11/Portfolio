import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <SiReact fontSize="24px" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiNextdotjs fontSize="24px" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiTypescript fontSize="24px" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript (ES6+)</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiHtml5 fontSize="24px" />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiCss3 fontSize="24px" />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiExpress fontSize="24px" />
        <div className="tech-icons-text">Express.js</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiPostgresql fontSize="24px" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
