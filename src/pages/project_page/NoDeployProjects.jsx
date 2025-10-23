import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import NoDeployCard from "./NoDeployCard";

export default function NoDeployProjects() {
  const noDeployProjects = [
    {
      id: 4,
      title: "Campo Minado",
      repoLink: "https://github.com/Hugobertoncelo/Campo-Minato",
      backLink: "",
    },
    {
      id: 5,
      title: "Pac-Man",
      repoLink: "https://github.com/Hugobertoncelo/Pacman-React",
      backLink: "",
    },
  ];

  return (
    <Container fluid id="no-deploy-section" className="mt-5">
      <div
        className="d-flex justify-content-center mb-4"
        style={{
          backgroundColor: "#fbd9ad",
          borderRadius: "15px",
        }}
      >
        <Zoom left cascade>
          <h1 style={{ color: "rgb(134 61 176)", padding: "10px 0" }}>
            PROJETOS SEM DEPLOY
          </h1>
        </Zoom>
      </div>

      <Container>
        <Row>
          {noDeployProjects.map((project) => (
            <Col key={project.id} md={4} sm={12} className="mb-4 mt-4">
              <Fade bottom>
                <NoDeployCard project={project} />
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
