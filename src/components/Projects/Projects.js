import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos</strong>
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Una selección de proyectos enfocados en construir experiencias web
          útiles, rápidas y responsive.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GastroFlow - Sistema de Gestión para Restaurantes"
              description="Plataforma web para digitalizar la gestión interna de restaurantes, automatizando reservas, flujos de cocina y métricas en tiempo real. Incluye manejo de estados para paneles de control, integración con Stripe API para suscripciones y diseño responsive. Tech stack: Next.js (App Router), TypeScript, Tailwind CSS, Context API y Stripe API."
              ghLink="https://github.com/JulietaPurves11"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TechStore - Plataforma E-Commerce"
              description="Tienda en línea enfocada en velocidad de respuesta, catálogo dinámico con filtros avanzados y persistencia de datos en el cliente mediante LocalStorage. Tech stack: React, Node.js, Express.js, PostgreSQL y Tailwind CSS."
              ghLink="https://github.com/JulietaPurves11"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
