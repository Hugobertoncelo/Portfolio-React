import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import NoDeployCard from "./NoDeployCard";
import ShowMoreButtons from "../../components/Button/ShowMoreButtons";

export default function NoDeployProjects() {
  const noDeployProjects = [
    {
      id: 1,
      title: "Campo Minado",
      repoLink: "https://github.com/Hugobertoncelo/Campo-Minato",
    },
    {
      id: 2,
      title: "Pac-Man",
      repoLink: "https://github.com/Hugobertoncelo/Pacman-React",
    },
    {
      id: 3,
      title: "Relógio Digital",
      repoLink: "https://github.com/Hugobertoncelo/Relogio-Digital",
    },
    {
      id: 4,
      title: "Sorteador de Números",
      repoLink: "https://github.com/Hugobertoncelo/Sorteador",
    },
    {
      id: 5,
      title: "Jogo da Velha",
      repoLink: "https://github.com/Hugobertoncelo/Jogo-da-Velha",
    },
    {
      id: 6,
      title: "Calculadora",
      repoLink: "https://github.com/Hugobertoncelo/Calculadora",
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

      <ShowMoreButtons
        items={noDeployProjects}
        itemsPerPage={3}
        renderItem={(project) => <NoDeployCard project={project} />}
      />
    </Container>
  );
}
