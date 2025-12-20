import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import workshop from "../../images/projects/oficina.png";
import babycontrol from "../../images/projects/babycontrol.png";
import pacman from "../../images/projects/pacman.png";
import { FaCode, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Oficina Mecânica",
      img: workshop,
      lang: "JavaScript",
      desc: "Página web para oficina mecânica com serviços, contatos e formulário de agendamento.",
      repoLink: "https://github.com/Hugobertoncelo/Oficina-Mecanica",
      siteLink: "https://hugobertoncelo.github.io/Oficina-Mecanica/",
    },
    {
      id: 2,
      title: "Baby Control",
      img: babycontrol,
      lang: "TypeScript",
      desc: "Aplicação de controle de bebê construída com TypeScript, priorizando tipagem forte, organização de estados e escalabilidade. Inclui funcionalidades como registro de mamadas, trocas de fraldas, medicamentos e acompanhamento de rotinas.",
      repoLink: "https://github.com/Hugobertoncelo/Baby-control",
      siteLink: "https://baby-control.netlify.app/",
    },
    {
      id: 3,
      title: "Pacman",
      img: pacman,
      lang: "Jogos",
      desc: "Recriação do clássico Pac-Man em React, com pontuação e animações.",
      repoLink: "https://github.com/Hugobertoncelo/Pacman",
      siteLink: "https://pacman-one-pied.vercel.app/",
    },
  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-center mt-4">
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
