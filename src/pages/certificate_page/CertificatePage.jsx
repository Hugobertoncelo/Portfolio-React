import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import logosenai from "../../images/certificates/logosenai.jpg";
import Particle from "../../Particle";
import CategoryBar from "../../components/CategoryBar";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton";
import ShowMoreButtons from "../../components/Button/ShowMoreButtons";
import senai from "../../images/certificates/senai.png";

export default function CertificatePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const certificates = [
    {
      id: 1,
      title: "Programador Web",
      org: "Senai",
      img: logosenai,
      category: "Senai",
      link: senai,
    },
    {
      id: 2,
      title: "Front-End Web Development",
      org: "Senai",
      img: logosenai,
      category: "Senai",
      link: "https://github.com/Hugobertoncelo/Certificados/blob/main/certificado.senai2.pdf",
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      org: "Alura",
      img: logosenai,
      category: "Alura",
      link: "https://github.com/Hugobertoncelo/Certificados/blob/main/certificado.coursera.pdf",
    },
  ];

  const categories = [
    "Todos",
    "Faesa",
    "DevClub",
    "Rocketseat",
    "Senai",
    "Ifes",
    "Alura",
    "Udemy",
    "Full Stack Club",
    "Hashtag Treinamentos",
  ];

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
                <ShowMoreButtons
                  items={filteredCertificates}
                  itemsPerPage={3}
                  renderItem={(cert) => (
                    <Col key={cert.id} md={14} sm={12} className="mt-5">
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
                  )}
                />
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>

      <ScrollToTopButton />
    </section>
  );
}
