import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Soy estudiante de la Licenciatura en Informática en la
              Universidad Nacional del Oeste y egresada del bootcamp Full Stack
              Web Developer de Henry.
              <br />
              <br />
              Me apasiona el ecosistema
              <i>
                <b className="purple">
                  {" "}
                  JavaScript y TypeScript
                </b>
              </i>{" "}
              — especialmente React, Next.js y Node.js.
              <br />
              <br />
              Disfruto crear productos con
              <i>
                <b className="purple">
                  {" "}
                  código limpio, buena usabilidad y una experiencia de usuario
                  cuidada.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
