import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-jp.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  const [showAvatarEffect, setShowAvatarEffect] = useState(false);

  useEffect(() => {
    if (!showAvatarEffect) {
      return undefined;
    }

    const timer = window.setTimeout(() => setShowAvatarEffect(false), 1500);
    return () => window.clearTimeout(timer);
  }, [showAvatarEffect]);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UN POCO <span className="purple">SOBRE MÍ</span>
            </h1>
            <p className="home-about-body">
              Soy estudiante de la Licenciatura en Informática en la
              Universidad Nacional del Oeste y egresada del bootcamp Full Stack
              Web Developer de Henry.
              <br />
              <br />
              Me apasiona el ecosistema JavaScript y TypeScript — especialmente
              React, Next.js y Node.js.
              <br />
              <br />
              Disfruto transformar ideas abstractas en interfaces vivas,
              cuidadas al detalle y súper funcionales. Me considero una persona
              muy organizada, curiosa y perfeccionista con la estética y la
              experiencia del usuario.
            </p>
            <div className="developer-terminal" aria-label="Información de Julieta">
              <div className="developer-terminal-header">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <pre>
                <code>
{`const julieta = {
  role: "Full Stack Developer",
  specialty: "Frontend (React / JS / TS)",
  location: "Buenos Aires, Argentina",
  coffeeLevel: "100%"
};`}
                </code>
              </pre>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className={showAvatarEffect ? "avatar-celebrating" : ""}>
              <button
                type="button"
                className="avatar-trigger"
                onClick={() => setShowAvatarEffect(true)}
                aria-label="Activar efecto del avatar"
              >
                <img src={myImg} className="img-fluid" alt="avatar de Julieta Purves" />
                {showAvatarEffect && (
                  <span className="avatar-hearts" aria-hidden="true">
                    <span>♥</span>
                    <span>✦</span>
                    <span>♥</span>
                    <span>✧</span>
                  </span>
                )}
              </button>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
