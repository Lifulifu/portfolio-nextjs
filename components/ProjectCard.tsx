import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  image,
  title,
  description,
  url,
  onClick,
}: {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      layoutId={id}
      onClick={onClick}
      className="bg-slate-800 rounded-md p-8 cursor-pointer w-[40ch]"
    >
      <motion.h2 layoutId={`${id}-title`} className="text-3xl font-bold">
        {title}
      </motion.h2>
    </motion.div>
  );
};

export default ProjectCard;
