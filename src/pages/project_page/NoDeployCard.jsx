import React from "react";
import { FaCode, FaDatabase } from "react-icons/fa";

export default function NoDeployCard({ project }) {
  return (
    <div
      className="singleProject"
      style={{
        backgroundColor: "rgb(142 70 186 / 31%)",
        border: "1px solid #fbd9ad",
        borderRadius: "10px",
        padding: "20px",
        width: "80%",
        height: "180px",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(134, 61, 176, 0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h5
        style={{
          color: "#fbd9ad",
          fontWeight: "600",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {project.title}
      </h5>

      <div style={{ display: "flex", gap: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a
            href={project.frontEndLink || project.repoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "2.5rem",
              color: "#fbd9ad",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b061df")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fbd9ad")}
          >
            <FaCode />
          </a>
          <span
            style={{
              color: "#fbd9ad",
              marginTop: "5px",
              fontWeight: "600",
            }}
          >
            Front-End
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a
            href={project.backEndLink || project.repoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "2.5rem",
              color: "#fbd9ad",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b061df")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#fbd9ad")}
          >
            <FaDatabase />
          </a>
          <span
            style={{
              color: "#fbd9ad",
              marginTop: "5px",
              fontWeight: "600",
            }}
          >
            Back-End
          </span>
        </div>
      </div>
    </div>
  );
}
