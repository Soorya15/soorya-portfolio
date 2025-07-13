import React from "react";
import portfolio from "../assets/project-1.png";
import Quickchat from "../assets/project-2.png";
import Forever from "../assets/project-3.png";

const projects = [
  {
    image: portfolio,
    ProjectName: "Portfolio Website",
    github: "https://github.com/Soorya15/soorya-portfolio",
    live: "https://soorya-portfolio-two.vercel.app"
  },
  {
    image: Quickchat,
    ProjectName: "QuickChat",
    github: "https://github.com/Soorya15/mern-chat-app",
    live: "https://quickchat-azure.vercel.app"
  },
  {
    image: Forever,
    ProjectName: "Forever E-Commerce App",
    github: "https://github.com/Soorya15/fullstack-mern-e-commerce-app-main",
    live: "https://forever-frontend-neon-eta.vercel.app"
  }
];

const Projects = () => {
  return (
    <div className="bg-black py-20 px-4" id="projects">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={project.image}
              alt={project.ProjectName}
            />
            <p className="text-white text-xl font-semibold text-center mb-4">
              {project.ProjectName}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 font-medium"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
