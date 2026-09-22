import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Soy <span className="purple">Julieta Purves</span>, estudiante de
            la Licenciatura en Informática en la{" "}
            <span className="purple">Universidad Nacional del Oeste</span> y
            egresada del bootcamp{" "}
            <span className="purple">Full Stack Web Developer de Henry</span>.
            <br />
            <br />
            Me apasiona el ecosistema{" "}
            <span className="purple">JavaScript/TypeScript</span>, con foco en
            React, Next.js y Node.js, además de crear soluciones con código
            limpio, buena usabilidad y una experiencia de usuario cuidada.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Frontend con React.js, Next.js y TypeScript
            </li>
            <li className="about-activity">
              <ImPointRight /> Backend con Node.js, Express.js y PostgreSQL
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseño responsive y enfoque Mobile-First
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construyo interfaces web modernas y eficientes."{" "}
          </p>
          <footer className="blockquote-footer">Julieta Purves</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
