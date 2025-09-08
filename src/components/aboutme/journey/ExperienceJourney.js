import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
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
          <h1>Experiências</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2025 - 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Interplus Tecnologia
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Suporte Técnico Júnior
          </h6>
          <p>• Atendimento a usuários remotos, solucionando problemas técnicos de hardware, software e rede.</p>
          <p>• Instalação, configuração e manutenção de sistemas operacionais e aplicativos.</p>
          <p>• Apoio na administração de contas de e-mail, acessos e permissões em sistemas internos.</p>
          <p>• Registro e acompanhamento de chamados técnicos, garantindo agilidade na resolução.</p>
          <p>• Suporte na manutenção preventiva e corretiva de equipamentos de informática.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
