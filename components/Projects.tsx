"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects: {
  title: string;
  description: string;
  image: string;
  url: string;
}[] = [
  {
    title: "Project 1",
    description: "Project 1 description",
    image: "",
    url: "",
  },
  {
    title: "Project 2",
    description: "Project 2 description",
    image: "",
    url: "",
  },
];

function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find(
    (project) => project.title === selectedId
  );

  return (
    <div className="container">
      <ul id="projects" className="flex justify-center gap-4">
        {projects.map((project) => (
          <ProjectCard
            id={project.title}
            key={project.title}
            {...project}
            onClick={() => setSelectedId(project.title)}
          />
        ))}
      </ul>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectModal
            id={selectedId}
            title={selectedProject.title}
            description={selectedProject.description}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
