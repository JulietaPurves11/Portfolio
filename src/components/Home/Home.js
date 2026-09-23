import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/hero-img-jp.png";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("purvesjulieta11@gmail.com");
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1500);
    } catch (error) {
      console.error("No se pudo copiar el email al portapapeles.", error);
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                ¡Hola a todos!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                SOY
                <strong className="main-name"> JULIETA PURVES</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <p className="home-tagline">
                Construyo interfaces web modernas, eficientes y concebidas
                desde una perspectiva Mobile-First con el ecosistema de
                JavaScript y TypeScript.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Encontrame en</h1>
            <p>
              Conectemos para hablar sobre desarrollo web y nuevas oportunidades
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JulietaPurves11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/julieta-purves/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:purvesjulieta11@gmail.com"
                  onClick={handleEmailClick}
                  aria-label="Copiar email y enviar un correo a Julieta Purves"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
            {emailCopied && (
              <div className="email-copy-notification" role="status">
                ¡Email copiado! 💖
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
