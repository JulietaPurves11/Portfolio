import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFigma, FaGithub } from "react-icons/fa";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaGithub fontSize="24px" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaFigma fontSize="24px" />
        <div className="tech-icons-text">Figma</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
