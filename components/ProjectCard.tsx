import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import Image from "next/image";
import config from "../next.config.mjs";

const ProjectCard = ({
  id,
  image,
  title,
  tags,
  description,
  url,
  onClick,
}: {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      layoutId={id}
      onClick={onClick}
      className="bg-slate-800 rounded-md overflow-hidden cursor-pointer w-[45ch] hover:drop-shadow-glow transition-[filter_transform] duration-500 hover:scale-105"
    >
      {/* thumbnail */}
      <div className="relative aspect-[16/9]">
        {image && <Image src={config.basePath + image} alt={title} fill />}
      </div>

      {/* content */}
      <div className="p-4">
        <h2 className="text-3xl font-bold">{title}</h2>

        {/* tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <p className="text-slate-400 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
