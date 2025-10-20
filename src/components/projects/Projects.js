import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import delivery from "../../images/projects/delivery.png";
import { FaCode, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-center"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projetos</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Delivery Ki Delícia
                    </h5>
                    <img src={delivery} alt={delivery} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/Hugobertoncelo/Delivery"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href="https://hugobertoncelo.github.io/Delivery/"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="site"
                      >
                        <FaGlobe id="site" className="icon" aria-label="Website" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Um aplicativo de delivery moderno e responsivo, que permite navegar por categorias, visualizar produtos e fazer pedidos de forma rápida e prática. Desenvolvido com foco em usabilidade, design limpo e experiência do usuário.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
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
