import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Soy <span className="purple">Julieta Purves</span>, estudiante de la
            Licenciatura en Informática (UNO) y Full Stack Developer graduada de
            Henry.
            <br />
            <br />
            Mi parte favorita de programar es ver cómo cobra vida un diseño desde
            cero y lograr que el resultado final supere lo que imaginé en mi
            cabeza. Me motiva cuidar cada detalle visual, escribir código limpio
            y aprender constantemente nuevas tecnologías.
            <br />
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight /> experiencia de usuario y estética visual
            </li>
            <li className="about-activity">
              <ImPointRight /> código limpio y componentes reutilizables
            </li>
            <li className="about-activity">
              <ImPointRight /> aprendizaje constante y curiosidad técnica
            </li>
          </ul>
            <br />
            <br />
            Fuera de la pantalla:
            <br />
            Cuando no estoy escribiendo código o estudiando, me vas a encontrar
            mateando al sol, viendo series o películas, jugando en la compu,
            cocinando algún postre, leyendo o saliendo a pasear y conocer
            lugares nuevos. Creo en el equilibrio entre enfocarme al 100% en mis
            proyectos y disfrutar de las pequeñas cosas.
          </p>

          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Diseño con ojo crítico, programo con curiosidad y disfruto el
            proceso."
          </p>
          <footer className="blockquote-footer">Julieta Purves</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
