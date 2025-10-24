import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                Meu nome é <b className="purple">Hugo da Silva Bertoncelo </b>e
                sou graduado em
                <b className="purple">
                  {" "}
                  Análise e Desenvolvimento de Sistemas{" "}
                </b>
                pela universidade <b className="purple">FAESA </b>
                em Vitória, ES.
                <br />
                <br />
                Sou proficiente em linguagens como &nbsp;
                <b className="purple"> HTML, CSS e JavaScript. </b>
                <br />
                <br />
                Tenho experiência no desenvolvimento de aplicações web
                utilizando &nbsp;
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript e React no front-end, além de Node.js
                  no back-end.{" "}
                </b>
                <br />
                <br />
                Minha trajetória profissional inclui uma transição da área de
                mecânica automotiva para a tecnologia, o que fortaleceu minha
                capacidade de adaptação, resolução de problemas e busca
                constante por aprendizado. &nbsp;
                <br />
                <br />
                Busco estar sempre atualizado com as tendências do setor e
                contribuir em projetos que gerem impacto real, valorizando a
                performance, usabilidade e experiência do usuário. &nbsp;
                <b className="purple">
                  Construindo novas tecnologias e produtos web.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
