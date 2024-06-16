import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProjectModal = ({
  id,
  title,
  description,
  url,
  onClose,
}: {
  id: string;
  title: string;
  description: string;
  url?: string;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 container flex items-center justify-center">
        {/* modal */}
        <motion.div
          layoutId={id}
          className="relative bg-slate-900 p-8 w-[75ch]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="h-8 w-8" />
          </button>

          <motion.h2 className="text-3xl font-bold" layoutId={`${id}-title`}>
            {title}
          </motion.h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
