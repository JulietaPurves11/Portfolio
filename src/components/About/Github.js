import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      className="github-activity"
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "var(--text)",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Mi Actividad <strong className="purple">en GitHub</strong>
      </h1>
      <GitHubCalendar
        username="JulietaPurves11"
        blockSize={30}
        blockMargin={10}
        color={["#fce7f3", "#fbcfe8", "#f9a8d4", "#ec4899", "#be185d"]}
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
