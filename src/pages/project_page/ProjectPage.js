import React, { useState } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode, FaGlobe } from "react-icons/fa";
import CategoryBar from "../../components/CategoryBar";
import delivery from "../../images/projects/delivery.png";
import stopwatch from "../../images/projects/cronometro.png";
import drawer from "../../images/projects/sorteio.png";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

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
      desc: "Um relógio digital moderno e funcional, que exibe hora, minutos e segundos em tempo real. Desenvolvido com foco em precisão, design minimalista e interface intuitiva",
      repoLink: "https://github.com/Hugobertoncelo/Relogio-Digital",
      siteLink: "https://hugobertoncelo.github.io/Relogio-Digital/",
    },
    {
      id: 3,
      title: "Sorteador",
      img: drawer,
      lang: "HTML e CSS",
      desc: "Um aplicativo simples e interativo que gera números aleatórios de forma rápida e prática. Desenvolvido com foco em usabilidade, lógica de programação e interface intuitiva, ideal para demonstrar habilidades em JavaScript/HTML e CSS.",
      repoLink: "https://github.com/Hugobertoncelo/Dev-Sorteio",
      siteLink: "https://hugobertoncelo.github.io/Dev-Sorteio/",
    },
  ];

  const categories = ["Todos", "JavaScript", "React", "Typescript", "Jogos", "Pyton", "Ângular", "HTML e CSS"];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.lang === selectedCategory);

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div className="d-flex justify-content-center" style={{ backgroundColor: "#fbd9ad" }}>
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>PROJETOS</h1>
            </Zoom>
          </div>

          <CategoryBar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            categories={categories}
          />

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                {filteredProjects.map((project) => (
                  <Col key={project.id} md={4} sm={12} className="mt-5">
                    <Fade bottom>
                      <div
                        className="singleProject"
                        style={{
                          backgroundColor: "rgb(142 70 186 / 31%)",
                          border: "1px solid",
                        }}
                      >
                        <div className="projectContent">
                          <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                          <img src={project.img} alt={project.title} />
                          <div className="project--showcaseBtn">
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
                          }}
                        >
                          {project.lang}
                        </div>
                      </div>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
