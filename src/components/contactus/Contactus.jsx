import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "emailjs-com";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    emailjs
      .send(
        "service_gwf0wx2",
        "template_zk3s58m",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "l3jEh3ISDsGlWTP12"
      )
      .then(
        (response) => {
          console.log(
            "E-mail enviado com sucesso!",
            response.status,
            response.text
          );
          alert(
            `Obrigado, ${formData.name}! Sua mensagem foi enviada com sucesso.`
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar e-mail:", error);
          alert(
            "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde."
          );
        }
      );
  };

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
                <h1
                  style={{
                    borderRadius: "15px",
                    padding: "5px 25px",
                    color: "#fbd9ad",
                    marginTop: "50px",
                    marginBottom: "80px",
                    fontSize: "66px",
                    textAlign: "center",
                    height: "54px",
                    width: "100%",
                    fontWeight: "600",
                  }}
                >
                  Entre em Contato
                </h1>
              </Zoom>
            </Col>

            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Digite seu nome"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          id="email"
                          name="email"
                          placeholder="Digite seu email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Mensagem
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Digite a mensagem"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Enviar
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>

                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href="mailto:hugobertoncelo@gmail.com"
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        hugobertoncelo@gmail.com
                      </p>
                    </a>

                    <a href="tel:+5528999453033" className="personal-details">
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>(28) 99945-3033</p>
                    </a>

                    <a
                      href="https://maps.app.goo.gl/iPawqj6yXnrgHu2o9"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Jardim da Penha - Vitória, ES, Brasil
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4434.7047954775635!2d-40.29713807000397!3d-20.275231000198207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81804ad481d6f%3A0x71875203a67637ac!2sParque%20Pedra%20da%20Cebola!5e1!3m2!1spt-BR!2sbr!4v1756829037606!5m2!1spt-BR!2sbr"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps - Parque Pedra da Cebola"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
