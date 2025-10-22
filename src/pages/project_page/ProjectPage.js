import React, { useState } from "react";
import Particle from "../../Particle";
import { Container, Row, Col, Button } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode, FaGlobe, FaGithub } from "react-icons/fa";
import CategoryBar from "../../components/CategoryBar";
import delivery from "../../images/projects/delivery.png";
import stopwatch from "../../images/projects/cronometro.png";
import drawer from "../../images/projects/sorteio.png";
// import pacman from "../../images/projects/pacman.png";
// import mine from "../../images/projects/minesweeper.png";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // 🚀 Projetos COM deploy
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

  // 🎯 Projetos SEM deploy
  const noDeployProjects = [
    {
      id: 4,
      title: "Campo Minado",
      // img: mine,
      lang: "React",
      desc: "Versão digital do clássico Campo Minado, com lógica interativa e pontuação dinâmica.",
      repoLink: "https://github.com/Hugobertoncelo/Campo-Minato",
    },
    {
      id: 5,
      title: "Pac-Man",
      // img: pacman,
      lang: "React",
      desc: "Recriação do jogo Pac-Man em React, com movimentação fluida e design retrô.",
      repoLink: "https://github.com/Hugobertoncelo/Pacman-React",
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

  // 🧭 Função para rolar até a seção “Projetos sem Deploy”
  const scrollToNoDeploy = () => {
    const section = document.getElementById("no-deploy-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />

        <Container className="home-content">
          {/* Título */}
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>PROJETOS</h1>
            </Zoom>
          </div>

          {/* Barra de Categorias */}
          <CategoryBar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            categories={categories}
          />

          {/* 🔘 Botão para ver projetos sem deploy */}
          <div className="text-center mt-4">
            <Button
              onClick={scrollToNoDeploy}
              style={{
                backgroundColor: "#b061df",
                border: "none",
                borderRadius: "30px",
                padding: "12px 25px",
                fontWeight: "600",
                color: "white",
                boxShadow: "0 0 10px rgba(176, 97, 223, 0.7)",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#8a3ab9")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#b061df")
              }
            >
              Ver Projetos sem Deploy
            </Button>
          </div>

          {/* Projetos COM deploy */}
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

          {/* 🚫 Projetos sem Deploy */}
          <Container fluid id="no-deploy-section" className="mt-5">
            <div
              className="d-flex justify-content-center mb-4"
              style={{ backgroundColor: "#eb90ff" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "white" }}>PROJETOS SEM DEPLOY</h1>
              </Zoom>
            </div>

            <Container>
              <Row>
                {noDeployProjects.map((project) => (
                  <Col key={project.id} md={4} sm={12} className="mb-4">
                    <Fade bottom>
                      <div
                        className="singleProject"
                        style={{
                          backgroundColor: "rgb(142 70 186 / 31%)",
                          border: "1px solid #fbd9ad",
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
                              <FaGithub className="icon" />
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
