import React, { useEffect } from "react";
import "./Roadmap.css";
const experiences = [
  {
    year: "2021",
    role: "Embedded Systems Engineer",
    company: "OneNet Pakistan",
    description:
      "Developed and maintained embedded systems software for various IoT devices. Collaborated with cross-functional teams to design and implement system-level features.",
  },
  {
    year: "2021",
    role: "WordPress Developer",
    company: "ActiveBiz",
    description:
      "Designed and customized WordPress themes and plugins to meet client requirements. Ensured website performance, security, and SEO optimization.",
  },
  {
    year: "2022",
    role: "Junior Software Engineer",
    company: "TPS Worldwide",
    description:
      "Participated in the development of web applications using HTML, CSS, and JavaScript. Assisted in the integration of third-party APIs and improved code quality through code reviews.",
  },
  {
    year: "2022",
    role: "Software Engineer Level 2",
    company: "Xpert Digital",
    description:
      "Specialized in React development, building interactive user interfaces. Implemented performance enhancements and worked on optimizing application load times.",
  },
  {
    year: "2024",
    role: "Software Engineer Level 4",
    company: "Xpert Digital",
    description:
      "Helped in integration of frontend and backend services using Node.js and Express. Developed scalable solutions and ensured seamless interaction between the frontend and backend systems.",
  },
];

const Roadmap = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      items.forEach((item) => {
        if (scrollPos > item.offsetTop + item.offsetHeight / 2) {
          item.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="roadmap-container">
      <h2 className="roadmap-title">My Experience Roadmap</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-content">
              <h3 style={{color: "black"}}>{exp.year}</h3>
              <h4 style={{color: "black"}}> {exp.company}</h4>
              <h5 style={{color: "black"}}>{exp.role}</h5>
              <p style={{ fontSize: "1.1rem", color: "black"}}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
