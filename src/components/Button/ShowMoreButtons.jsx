import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default function ShowMoreButtons({
  items = [],
  renderItem,
  itemsPerPage = 3,
}) {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsPerPage, items.length));
  };

  const handleShowLess = () => {
    setVisibleCount(itemsPerPage);
  };

  const canShowMore = visibleCount < items.length;
  const canShowLess = visibleCount > itemsPerPage;

  return (
    <Container style={{ position: "relative", zIndex: 1 }}>
      <Row>
        {items.slice(0, visibleCount).map((item, index) => (
          <Col key={index} md={4} sm={12} className="mb-4 mt-4">
            <Fade bottom>
              <div style={{ pointerEvents: "auto" }}>{renderItem(item)}</div>
            </Fade>
          </Col>
        ))}
      </Row>

      <div
        className="d-flex justify-content-center gap-3 mt-4"
        style={{
          marginBottom: "40px",
          position: "relative",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <Button
          variant="primary"
          onClick={handleShowMore}
          disabled={!canShowMore}
          style={{
            backgroundColor: canShowMore ? "#863db0" : "#bfa3d6",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "500",
            boxShadow: "0 0 8px rgba(134, 61, 176, 0.3)",
            cursor: canShowMore ? "pointer" : "not-allowed",
          }}
        >
          Mostrar Mais
        </Button>

        <Button
          variant="secondary"
          onClick={handleShowLess}
          disabled={!canShowLess}
          style={{
            backgroundColor: canShowLess ? "#fbd9ad" : "#f5deb8",
            color: "#863db0",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "500",
            boxShadow: "0 0 8px rgba(134, 61, 176, 0.3)",
            cursor: canShowLess ? "pointer" : "not-allowed",
          }}
        >
          Mostrar Menos
        </Button>
      </div>
    </Container>
  );
}
