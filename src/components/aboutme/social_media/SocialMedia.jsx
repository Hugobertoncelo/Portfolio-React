import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Conecte-se comigo</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://www.instagram.com/bertoncelo.hugo"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              title="Instagram"
            >
              <Zoom cascade>
                <AiOutlineInstagram />
              </Zoom>
            </a>
          </Col>

          <Col md={3}>
            <a
              href="https://wa.me/5528999453033"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              title="WhatsApp"
            >
              <Zoom cascade>
                <AiOutlineWhatsApp />
              </Zoom>
            </a>
          </Col>

          <Col md={3}>
            <a
              href="https://github.com/Hugobertoncelo"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              title="GitHub"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>

          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/hugobertoncelo"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              title="LinkedIn"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>

          <Col md={3}>
            <a
              href="https://hugobertoncelo.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              title="Portfólio antigo"
            >
              <Zoom cascade>
                <FaGlobe />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
