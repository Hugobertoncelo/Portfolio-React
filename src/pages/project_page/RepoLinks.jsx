import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { FaCode } from "react-icons/fa";
import ShowMoreButtons from "../../components/Button/ShowMoreButtons";

export default function RepoLinks() {
  const repoLinks = [
    {
      id: 1,
      title: "Fundamentos de ReactJS",
      repoLink: "https://github.com/Hugobertoncelo/01-fundamentos-reactjs-ts",
    },
    {
      id: 2,
      title: "DevBills API",
      repoLink: "https://github.com/Hugobertoncelo/DevBills-API",
    },
    {
      id: 3,
      title: "Ignite Timer",
      repoLink: "https://github.com/Hugobertoncelo/02-ignite-timer",
    },
    {
      id: 4,
      title: "DT Money",
      repoLink: "https://github.com/Hugobertoncelo/03-dt-money",
    },
    {
      id: 5,
      title: "Ignite Shop",
      repoLink: "https://github.com/Hugobertoncelo/04-ignite-shop",
    },
    {
      id: 6,
      title: "EliteTracker API",
      repoLink: "https://github.com/Hugobertoncelo/elitetracker-api",
    },
    {
      id: 7,
      title: "Projeto Django Python",
      repoLink: "https://github.com/Hugobertoncelo/cursos",
    },
    {
      id: 8,
      title: "Projeto Nearby - React Native",
      repoLink: "https://github.com/Hugobertoncelo/nearby",
    },
    {
      id: 9,
      title: "Projeto Loja em Python",
      repoLink: "https://github.com/Hugobertoncelo/loja",
    },
  ];

  return (
    <Container fluid id="repo-links-section" className="mt-5">
      <div
        className="d-flex justify-content-center mb-4"
        style={{
          backgroundColor: "#fbd9ad",
          borderRadius: "15px",
        }}
      >
        <Zoom left cascade>
          <h1 style={{ color: "rgb(134 61 176)", padding: "1px 0" }}>
            REPOSITÓRIOS
          </h1>
        </Zoom>
      </div>

      <ShowMoreButtons
        items={repoLinks}
        itemsPerPage={3}
        renderItem={(repo) => (
          <div
            key={repo.id}
            className="singleProject"
            style={{
              backgroundColor: "rgb(142 70 186 / 31%)",
              border: "1px solid #fbd9ad",
              borderRadius: "10px",
              padding: "20px",
              width: "80%",
              height: "50%",
              margin: "0 auto 20px",
              textAlign: "center",
            }}
          >
            <h4 style={{ color: "#fff" }}>{repo.title}</h4>
            <a
              href={repo.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fbd9ad",
                textDecoration: "none",
                fontWeight: "bold",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <FaCode size={28} />
              Ver Repositório no GitHub
            </a>
          </div>
        )}
      />
    </Container>
  );
}
