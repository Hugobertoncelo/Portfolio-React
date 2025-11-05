import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import "../../style.css";
import { CgFileDocument } from "react-icons/cg";

export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <style>
        {`
          .underline-name {
            position: relative;
            display: inline-block;
            color: #fbd9ad;
            font-weight: 600;
            letter-spacing: 1px;
          }

          .underline-name::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #fbd9ad, #ffe8b3, #fbd9ad);
            background-size: 200%;
            animation: underlineMove 3s ease-in-out infinite;
            border-radius: 2px;
          }

          @keyframes underlineMove {
            0% { background-position: 0%; }
            50% { background-position: 100%; }
            100% { background-position: 0%; }
          }
        `}
      </style>

      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="d-flex flex-row justify-content-between">
              <img src="./profile.png" className="img-fluid logo" alt="brand" />
              <h5
                id="navhead"
                className="underline-name"
                style={{
                  marginLeft: "21px",
                  paddingTop: "6px",
                }}
              >
                HUGO BERTONCELO
              </h5>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
            <Nav className="ml-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/projectspage"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projetos
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resumo
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/certificatepage"
                  onClick={() => updateExpanded(false)}
                >
                  <ImBlog style={{ marginBottom: "2px" }} /> Certificados
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineMail style={{ marginBottom: "2px" }} /> Contatos
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/Hugobertoncelo/Portfolio-React"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
