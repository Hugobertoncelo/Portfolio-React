import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import delivery from "../../images/projects/delivery.png";
import stopwatch from "../../images/projects/cronometro.png";
import drawer from "../../images/projects/sorteio.png";
import { FaCode, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Delivery Ki Delícia",
      img: delivery,
      lang: "JavaScript",
      desc: "Um aplicativo de delivery moderno e responsivo, que permite navegar por categorias, visualizar produtos e fazer pedidos de forma rápida e prática. Desenvolvido com foco em usabilidade, design limpo e experiência do usuário.",
      repoLink: "https://github.com/Hugobertoncelo/Delivery",
      siteLink: "https://hugobertoncelo.github.io/Delivery/",
    },
    {
      id: 2,
      title: "Relógio Digital",
      img: stopwatch,
      lang: "HTML e CSS",
      desc: "Um relógio digital moderno e funcional, que exibe hora, minutos e segundos em tempo real. Desenvolvido com foco em precisão, design minimalista e interface intuitiva.",
      repoLink: "https://github.com/Hugobertoncelo/Relogio-Digital",
      siteLink: "https://hugobertoncelo.github.io/Relogio-Digital/",
    },
    {
      id: 3,
      title: "Sorteador",
      img: drawer,
      lang: "HTML e CSS",
      desc: "Um aplicativo simples e interativo que gera números aleatórios de forma rápida e prática. Desenvolvido com foco em usabilidade, lógica de programação e interface intuitiva.",
      repoLink: "https://github.com/Hugobertoncelo/Dev-Sorteio",
      siteLink: "https://hugobertoncelo.github.io/Dev-Sorteio/",
    },
  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-center">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projetos</h1>
              </Zoom>
            </Col>
          </Row>

          <Row>
            {projects.map((project) => (
              <Col key={project.id} xs={12} sm={6} md={4} className="mt-5">
                <Fade bottom>
                  <div
                    className="singleProject"
                    style={{
                      backgroundColor: "rgba(142, 70, 186, 0.31)",
                      border: "1px solid",
                    }}
                  >
                    <div className="projectContent">
                      <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                      <img src={project.img} alt={project.title} />
                      <div
                        className="project--showcaseBtn"
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="iconBtn"
                        >
                          <FaCode className="icon" />
                        </a>
                        <a
                          href={project.siteLink}
                          target="_blank"
                          rel="noreferrer"
                          className="iconBtn"
                        >
                          <FaGlobe className="icon" />
                        </a>
                      </div>
                    </div>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                        marginTop: "10px",
                        padding: "10px",
                      }}
                    >
                      {project.desc}
                    </p>
                    <div
                      className="project--lang"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                        padding: "5px",
                        textAlign: "center",
                      }}
                    >
                      {project.lang}
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>

          <div className="blog--viewAll d-flex justify-content-center mt-4">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                Ver tudo
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
