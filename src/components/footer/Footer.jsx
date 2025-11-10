import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp, FaGoogle, FaGlobe } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Projetado e desenvolvido por Hugo Bertoncelo</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Hugo Bertoncelo</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/hugobertoncelo"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hugobertoncelo"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/bertoncelo.hugo"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://wa.me/5528999453033"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:hugobertoncelo@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="E-mail"
              >
                <FaGoogle />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://hugobertoncelo.github.io/Portfolio/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Portfólio antigo"
              >
                <FaGlobe />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
