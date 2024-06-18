"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/lib/projects";

function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find(
    (project) => project.title === selectedId
  );

  return (
    <div id="projects" className="container">
      <h1 className="text-5xl font-bold mb-24 text-center after:content-[''] after:block after:w-8 after:h-1 after:mx-auto after:bg-teal-400 after:translate-y-8">
        Projects
      </h1>

      <ul className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <ProjectCard
            id={project.title}
            key={project.title}
            title={project.title}
            description={project.shortDesc}
            tags={project.tags}
            image={project.images[0]}
            onClick={() => setSelectedId(project.title)}
          />
        ))}
      </ul>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectModal
            id={selectedId}
            title={selectedProject.title}
            description={selectedProject.longDesc}
            tags={selectedProject.tags}
            images={selectedProject.images}
            url={selectedProject.url}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
