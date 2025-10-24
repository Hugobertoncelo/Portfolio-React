import React from "react";
import { FaCode, FaGlobe } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div
      className="singleProject"
      style={{
        backgroundColor: "rgb(142 70 186 / 31%)",
        border: "1px solid #fbd9ad",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div className="projectContent">
        <h5
          style={{
            color: "#fbd9ad",
            textAlign: "center",
            padding: "10px 0",
            fontWeight: "600",
          }}
        >
          {project.title}
        </h5>

        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%",
            borderBottom: "2px solid #fbd9ad",
          }}
        />

        <div
          className="project--showcaseBtn"
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "15px",
          }}
        >
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
            style={{
              backgroundColor: "#fbd9ad",
              color: "#b061df",
              borderRadius: "50%",
              padding: "12px",
              fontSize: "1.5rem",
              boxShadow: "0 0 10px rgba(176, 97, 223, 0.5)",
              transition: "transform 0.2s ease, background-color 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#b061df";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#fbd9ad";
              e.currentTarget.style.color = "#b061df";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaCode />
          </a>
          <a
            href={project.siteLink}
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
            style={{
              backgroundColor: "#fbd9ad",
              color: "#b061df",
              borderRadius: "50%",
              padding: "12px",
              fontSize: "1.5rem",
              boxShadow: "0 0 10px rgba(176, 97, 223, 0.5)",
              transition: "transform 0.2s ease, background-color 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#b061df";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#fbd9ad";
              e.currentTarget.style.color = "#b061df";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaGlobe />
          </a>
        </div>
      </div>

      <p
        className="project--desc"
        style={{
          background: "#fbd9ad",
          color: "#b061df",
          fontWeight: 600,
          padding: "10px",
          textAlign: "center",
        }}
      >
        {project.desc}
      </p>

      <div
        className="project--lang"
        style={{
          background: "#fbd9ad",
          color: "#b061df",
          fontWeight: 600,
          textAlign: "center",
          padding: "8px 0",
        }}
      >
        {project.lang}
      </div>
    </div>
  );
}
