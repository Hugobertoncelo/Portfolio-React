import React, { useState, useEffect } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import CategoryBar from "../../components/CategoryBar";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import NoDeployProjects from "./NoDeployProjects";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton";
import ShowMoreButtons from "../../components/Button/ShowMoreButtons";

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = [
    "Todos",
    "JavaScript",
    "React",
    "Typescript",
    "Jogos",
    "Python",
    "Angular",
    "HTML e CSS",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.lang === selectedCategory);

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
              <h1 style={{ color: "rgb(134 61 176)" }}>PROJETOS</h1>
            </Zoom>
          </div>

          <CategoryBar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            categories={categories}
          />

          <Container fluid className="certificate-section" id="about">
            <Row>
              <ShowMoreButtons
                items={filteredProjects}
                itemsPerPage={3}
                renderItem={(project) => (
                  <Col key={project.id} md={10} sm={12} className="mt-5">
                    <Fade bottom>
                      <ProjectCard project={project} />
                    </Fade>
                  </Col>
                )}
              />
            </Row>
          </Container>

          <NoDeployProjects />
        </Container>
      </Container>

      <ScrollToTopButton />
    </section>
  );
}
