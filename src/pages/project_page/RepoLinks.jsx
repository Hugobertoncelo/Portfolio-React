import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import ShowMoreButtons from "../../components/Button/ShowMoreButtons";

export default function RepoLinks() {
  const repoLinks = [
    {
      id: 1,
      title: "Estudos JavaScript",
      repoLink: "https://github.com/Hugobertoncelo/estudos-js",
    },
    {
      id: 2,
      title: "Portfólio Antigo",
      repoLink: "https://github.com/Hugobertoncelo/portfolio-antigo",
    },
    {
      id: 3,
      title: "Testes React Hooks",
      repoLink: "https://github.com/Hugobertoncelo/react-hooks-tests",
    },
    {
      id: 4,
      title: "Exercícios Lógica",
      repoLink: "https://github.com/Hugobertoncelo/logica-js",
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
              }}
            >
              Ver Repositório no GitHub
            </a>
          </div>
        )}
      />
    </Container>
  );
}
