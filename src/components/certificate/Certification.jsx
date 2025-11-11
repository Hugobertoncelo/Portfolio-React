import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import logoSenai from "../../images/certificates/logoSenai.jpg";
import logoFaesa from "../../images/certificates/logoFaesa.jpg";
import logoDevClub from "../../images/certificates/logoDevclub.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import certificadoSenai from "../../images/certificates/certificates/Senai/senai1.pdf";
import certificadoDevClub from "../../images/certificates/certificates/DevClub/devclub1.pdf";

export default function Certification() {
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
                <h1 className="aboutme-heading">Certificados</h1>
              </Zoom>
            </Col>

            <Col ms={12} className="mt-3">
              <Row className="g-5">
                <Col md={14}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href={certificadoSenai}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {
                              <img
                                className="logo_img"
                                src={logoFaesa}
                                alt={logoFaesa}
                              />
                            }
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificado
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Análise e Desenvolvimento de Sistemas
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{
                            color: "#eb90ff",
                            marginBottom: "0px",
                            textDecoration: "underline",
                          }}
                        >
                          Faesa
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>

            <Col ms={12} className="mt-3">
              <Row className="g-5">
                <Col md={14}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href={certificadoSenai}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {
                              <img
                                className="logo_img"
                                src={logoSenai}
                                alt={logoSenai}
                              />
                            }
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificado
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Programador Web JavaScript
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{
                            color: "#eb90ff",
                            marginBottom: "0px",
                            textDecoration: "underline",
                          }}
                        >
                          Senai
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>

            <Col ms={12} className="mt-3">
              <Row className="g-5">
                <Col md={14}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href={certificadoDevClub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {
                              <img
                                className="logo_img"
                                src={logoDevClub}
                                alt={logoDevClub}
                              />
                            }
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3
                              className="content-title"
                              style={{ color: "black" }}
                            >
                              Certificado
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Certificado MEC - Full Stack
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{
                            color: "#eb90ff",
                            marginBottom: "0px",
                            textDecoration: "underline",
                          }}
                        >
                          DevClub
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
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
