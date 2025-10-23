import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import python from "../../images/python.png";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={python}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
