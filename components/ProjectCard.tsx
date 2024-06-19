import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import config from "@/next.config.mjs";
import { Button } from "./ui/button";
import { FaAngleRight } from "react-icons/fa6";

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
      className="bg-slate-800 rounded-md overflow-hidden cursor-pointer w-[45ch] hover:drop-shadow-glow transition-[filter] duration-500"
    >
      {/* thumbnail */}
      <div className="relative aspect-[16/9]">
        {image && <img src={(config?.basePath ?? "") + image} alt={title} />}
      </div>

      {/* content */}
      <div className="pt-4 px-4 pb-2">
        <h2 className="text-3xl font-bold">{title}</h2>

        {/* tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <p className="text-slate-400 mt-2">{description}</p>

        <div className="text-end">
          <Button className="mt-2 font-bold bg-transparent py-0">
            Read More
            <FaAngleRight className="ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
