"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects: {
  title: string;
  tags: string[];
  shortDesc: string;
  longDesc: string;
  images: string[];
  url: string;
}[] = [
  {
    title: "AI Vtuber",
    tags: ["Openai", "MMVC", "Web", "Canva", "Stable Diffusion"],
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sadf fk alkdjfldsa asdfa jaf d.",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore, sequi quis optio fugit animi sunt est laborum libero reprehenderit iusto ea modi earum et at. Obcaecati illo, voluptatibus sapiente minus, eaque unde, possimus tempora eveniet fugiat et officiis adipisci ullam mollitia sint suscipit pariatur libero ratione maxime laudantium facilis!",
    images: [
      "aivtb/Frame 1.png",
      "aivtb/Frame 2.png",
      "aivtb/Frame 3.png",
      "aivtb/Frame 4.png",
    ],
    url: "/",
  },
  {
    title: "AIGO Competition Official Site",
    tags: ["Svelte"],
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore, sequi quis optio fugit animi sunt est laborum libero reprehenderit iusto ea modi earum et at. Obcaecati illo, voluptatibus sapiente minus, eaque unde, possimus tempora eveniet fugiat et officiis adipisci ullam mollitia sint suscipit pariatur libero ratione maxime laudantium facilis!",
    images: ["aigo/Frame 6.png", "aigo/Frame 5.png"],
    url: "/",
  },
  {
    title: "Discord LLM Agent",
    tags: ["Python", "Openai", "Vector DB"],
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore, sequi quis optio fugit animi sunt est laborum libero reprehenderit iusto ea modi earum et at. Obcaecati illo, voluptatibus sapiente minus, eaque unde, possimus tempora eveniet fugiat et officiis adipisci ullam mollitia sint suscipit pariatur libero ratione maxime laudantium facilis!",
    images: ["building.png", "huapu.png"],
    url: "/",
  },
  {
    title: "Mahjong Minigame",
    tags: ["Javascript"],
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore, sequi quis optio fugit animi sunt est laborum libero reprehenderit iusto ea modi earum et at. Obcaecati illo, voluptatibus sapiente minus, eaque unde, possimus tempora eveniet fugiat et officiis adipisci ullam mollitia sint suscipit pariatur libero ratione maxime laudantium facilis!",
    images: ["mj/Frame 4.png"],
    url: "/",
  },
];

function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find(
    (project) => project.title === selectedId
  );

  return (
    <div className="container">
      <ul id="projects" className="flex flex-wrap justify-center gap-4">
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
