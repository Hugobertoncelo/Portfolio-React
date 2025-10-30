import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import NoDeployCard from "./NoDeployCard";
import ShowMoreButtons from "../../components/Button/ShowMoreButtons";

export default function NoDeployProjects() {
  const noDeployProjects = [
    {
      id: 1,
      title: "DevBurguer",
      frontEndLink: "https://github.com/Hugobertoncelo/devburguer",
      backEndLink: "https://github.com/Hugobertoncelo/devburguer-api",
    },
    {
      id: 2,
      title: "PizzaShop",
      frontEndLink: "https://github.com/Hugobertoncelo/pizzashop-web",
      backEndLink: "https://github.com/Hugobertoncelo/pizzashop-api-main",
    },
    {
      id: 3,
      title: "Web Agents",
      frontEndLink: "https://github.com/Hugobertoncelo/Web-agents",
      backEndLink: "https://github.com/Hugobertoncelo/Server-agents",
    },
    {
      id: 4,
      title: "EasyCar",
      frontEndLink: "https://github.com/Hugobertoncelo/Easycar",
      backEndLink: "https://github.com/Hugobertoncelo/Servidor-easycar",
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
          <h1
            style={{
              color: "rgb(134 61 176)",
              padding: "1px 0",
            }}
          >
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
