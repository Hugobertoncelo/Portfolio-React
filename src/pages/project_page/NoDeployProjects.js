import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaLaptopCode, FaDatabase } from "react-icons/fa";

export default function NoDeployProjects() {
  const noDeployProjects = [
    {
      id: 4,
      title: "Campo Minado",
      frontLink: "https://github.com/Hugobertoncelo/Campo-Minato",
      backLink: "https://github.com/Hugobertoncelo/Campo-Minato-API",
    },
    {
      id: 5,
      title: "Pac-Man",
      frontLink: "https://github.com/Hugobertoncelo/Pacman-React",
      backLink: "https://github.com/Hugobertoncelo/Pacman-Backend",
    },
  ];

  return (
    <Container fluid id="no-deploy-section" className="mt-5">
      <div
        className="d-flex justify-content-center mb-4"
        style={{ backgroundColor: "#fbd9ad", borderRadius: "15px" }}
      >
        <Zoom left cascade>
          <h1 style={{ color: "rgb(134 61 176)" }}>PROJETOS SEM DEPLOY</h1>
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
                    borderRadius: "10px",
                    padding: "15px",
                    textAlign: "center",
                    width: "80%",
                    height: "100%",
                    margin: "0 auto",
                    boxShadow: "0 0 10px rgba(134, 61, 176, 0.3)",
                  }}
                >
                  <h5
                    style={{
                      color: "#fbd9ad",
                      fontWeight: "600",
                      marginBottom: "15px",
                    }}
                  >
                    {project.title}
                  </h5>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "25px",
                      marginTop: "10px",
                    }}
                  >
                    <a
                      href={project.frontLink}
                      target="_blank"
                      rel="noreferrer"
                      title="Front-End"
                      style={{
                        backgroundColor: "#fbd9ad",
                        color: "#b061df",
                        padding: "10px",
                        borderRadius: "50%",
                        fontSize: "1.8rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 8px rgba(176, 97, 223, 0.3)",
                        transition: "0.3s",
                        width: "55px",
                        height: "55px",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#b061df";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#fbd9ad";
                        e.currentTarget.style.color = "#b061df";
                      }}
                    >
                      <FaLaptopCode />
                    </a>
                    <a
                      href={project.backLink}
                      target="_blank"
                      rel="noreferrer"
                      title="Back-End"
                      style={{
                        backgroundColor: "#fbd9ad",
                        color: "#b061df",
                        padding: "10px",
                        borderRadius: "50%",
                        fontSize: "1.8rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 8px rgba(176, 97, 223, 0.3)",
                        transition: "0.3s",
                        width: "55px",
                        height: "55px",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#b061df";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#fbd9ad";
                        e.currentTarget.style.color = "#b061df";
                      }}
                    >
                      <FaDatabase />
                    </a>
                  </div>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
