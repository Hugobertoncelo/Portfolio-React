import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import senai from "../../images/certificates/senai.jpg";
import Particle from "../../Particle";
import CategoryBar from "../../components/CategoryBar";

export default function CertificatePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const certificates = [
    {
      id: 1,
      title: "Fundamentos de Programação",
      org: "Senai",
      img: senai,
      category: "Senai",
      link: "https://github.com/Hugobertoncelo/Certificados/blob/main/certificado.senai.pdf",
    },
    {
      id: 2,
      title: "Front-End Web Development",
      org: "Senai",
      img: senai,
      category: "Senai",
      link: "https://github.com/Hugobertoncelo/Certificados/blob/main/certificado.senai2.pdf",
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      org: "Coursera",
      img: senai,
      category: "Coursera",
      link: "https://github.com/Hugobertoncelo/Certificados/blob/main/certificado.coursera.pdf",
    },
    {
      id: 4,
      title: "React Avançado",
      org: "Udemy",
      img: senai,
      category: "Udemy",
      link: "https://github.com/Hugobertoncelo/Certificados/blob/main/certificado.udemy.pdf",
    },
  ];

  const categories = ["Todos", "HackerRank", "Senai", "Coursera", "Udemy"];

  const filteredCertificates =
    selectedCategory === "Todos"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad", borderRadius: "15px" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>CERTIFICADOS</h1>
            </Zoom>
          </div>

          <CategoryBar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            categories={categories}
          />

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                {filteredCertificates.map((cert) => (
                  <Col key={cert.id} md={4} sm={12} className="mt-5">
                    <Fade bottom duration={2000} distance="20px">
                      <div className="cert-card">
                        <div className="content">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="content-overlay"></div>
                            <div
                              className="cert-header"
                              style={{ backgroundColor: "white" }}
                            >
                              <img
                                className="logo_img"
                                src={cert.img}
                                alt={cert.title}
                              />
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
                            {cert.title}
                          </h2>
                          <h3
                            className="cert-body-subtitle"
                            style={{ color: "#eb90ff", marginBottom: "0px" }}
                          >
                            - {cert.org}
                          </h3>
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
