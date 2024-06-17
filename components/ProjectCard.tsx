import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

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
      className="bg-slate-800 rounded-md overflow-hidden cursor-pointer w-[45ch]"
    >
      {/* thumbnail */}
      <motion.div
        className="aspect-[16/9] bg-cover bg-center"
        style={{ backgroundImage: `url('/${image}')` }}
      />

      {/* content */}
      <div className="p-4">
        <motion.h2 layoutId={`${id}-title`} className="text-3xl font-bold">
          {title}
        </motion.h2>

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
