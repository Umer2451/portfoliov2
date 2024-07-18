import React from "react";
import "./Portfolio.css"; // Import the CSS file

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    link: "https://example.com/project-three",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
