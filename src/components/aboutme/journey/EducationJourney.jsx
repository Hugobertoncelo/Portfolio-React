import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Jornada Educacional
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experiências
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Jornada Técnica
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Projetos
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Jornada de Qualificação</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">FAESA</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Faculdades Integradas Espírito Santenses
          </h4>
          <p>
            Graduado em Análise e Desenvolvimento de Sistemas, com formação
            voltada para o desenvolvimento de softwares, administração de bancos
            de dados e soluções tecnológicas aplicadas ao mercado. Durante o
            curso, adquiri experiência prática em programação, análise de
            requisitos e desenvolvimento de projetos, buscando sempre alinhar
            teoria e prática para atender às demandas da área de TI.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
