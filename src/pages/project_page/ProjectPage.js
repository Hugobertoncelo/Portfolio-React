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
import NoDeployProjects from "./NoDeployProjects";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const projects = [
    {
      id: 1,
      title: "Delivery Ki Delícia",
      img: delivery,
      lang: "JavaScript",
      desc: "Um aplicativo de delivery moderno e responsivo, que permite navegar por categorias, visualizar produtos e fazer pedidos de forma prática.",
      repoLink: "https://github.com/Hugobertoncelo/Delivery",
      siteLink: "https://hugobertoncelo.github.io/Delivery/",
    },
    {
      id: 2,
      title: "Relógio Digital",
      img: stopwatch,
      lang: "HTML e CSS",
      desc: "Um relógio digital funcional e preciso, com design minimalista e interface intuitiva.",
      repoLink: "https://github.com/Hugobertoncelo/Relogio-Digital",
      siteLink: "https://hugobertoncelo.github.io/Relogio-Digital/",
    },
    {
      id: 3,
      title: "Sorteador",
      img: drawer,
      lang: "HTML e CSS",
      desc: "Um aplicativo simples que gera números aleatórios com um design leve e intuitivo.",
      repoLink: "https://github.com/Hugobertoncelo/Dev-Sorteio",
      siteLink: "https://hugobertoncelo.github.io/Dev-Sorteio/",
    },
  ];

  const categories = [
    "Todos",
    "JavaScript",
    "React",
    "Typescript",
    "Jogos",
    "Python",
    "Angular",
    "HTML e CSS",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.lang === selectedCategory);

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />

        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad", borderRadius: "15px" }}
          >
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
                          borderColor: "#fbd9ad",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <div className="projectContent">
                          <h5
                            style={{
                              color: "#fbd9ad",
                              textAlign: "center",
                              padding: "10px 0",
                              fontWeight: "600",
                            }}
                          >
                            {project.title}
                          </h5>

                          <img
                            src={project.img}
                            alt={project.title}
                            style={{
                              width: "100%",
                              borderBottom: "2px solid #fbd9ad",
                            }}
                          />
                          <div
                            className="project--showcaseBtn"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              gap: "20px",
                              marginTop: "15px",
                            }}
                          >

                            <a
                              href={project.repoLink}
                              target="_blank"
                              rel="noreferrer"
                              className="iconBtn"
                              style={{
                                backgroundColor: "#fbd9ad",
                                color: "#b061df",
                                borderRadius: "50%",
                                padding: "12px",
                                fontSize: "1.5rem",
                                boxShadow: "0 0 10px rgba(176, 97, 223, 0.5)",
                                transition:
                                  "transform 0.2s ease, background-color 0.3s",
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#b061df";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.transform = "scale(1.1)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#fbd9ad";
                                e.currentTarget.style.color = "#b061df";
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            >
                              <FaCode />
                            </a>
                            <a
                              href={project.siteLink}
                              target="_blank"
                              rel="noreferrer"
                              className="iconBtn"
                              style={{
                                backgroundColor: "#fbd9ad",
                                color: "#b061df",
                                borderRadius: "50%",
                                padding: "12px",
                                fontSize: "1.5rem",
                                boxShadow: "0 0 10px rgba(176, 97, 223, 0.5)",
                                transition:
                                  "transform 0.2s ease, background-color 0.3s",
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#b061df";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.transform = "scale(1.1)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#fbd9ad";
                                e.currentTarget.style.color = "#b061df";
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            >
                              <FaGlobe />
                            </a>
                          </div>
                        </div>
                        <p
                          className="project--desc"
                          style={{
                            background: "#fbd9ad",
                            color: "#b061df",
                            fontWeight: 600,
                            padding: "10px",
                            textAlign: "center",
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
                            textAlign: "center",
                            padding: "8px 0",
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

          <NoDeployProjects />
        </Container>
      </Container>
    </section>
  );
}
