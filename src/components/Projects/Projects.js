import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import mini from "../../Assets/Projects/MiniProj.png";
import snake from "../../Assets/Projects/Snake.png";
import calcu from "../../Assets/Projects/calc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mini}
              isBlog={false}
              title="StudyMaterialRetrieval System"
              description="This is the Mini project in Sixth Semester which is doing my team currently.A web-based study material retrieval system that
              will help students quickly and easily find relevant study
              materials for their chosen subject of different universities.
            
              Provides selection for different universities and their respective
              subjects.Provides the option to upload subject syllabus if it is not available in database.
              
              "
              ghLink="https://github.com/farizz7676/MiniStudyMate"
              demoLink="https://ministudymate.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Esurio Serpens"
              description="
              I have created this game inspired by the classic game Snake Xenzia. It was developed during the Foss Hack 3.0 hackathon held in Thiruvananthapuram."
              ghLink="https://github.com/farizz7676/SnakeGame"
              demoLink="https://amalut.github.io/SnakeGame/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calcu}
              isBlog={false}
              title="Calculator-React"
              description="This  Calculator is a web application that provides a user-friendly interface for performing basic mathematical calculations."
              ghLink="https://github.com/farizz7676/calculator"
              demoLink="https://farizz7676.github.io/calculator/"              
            />
          </Col>

                 </Row>
      </Container>
    </Container>
  );
}

export default Projects;
