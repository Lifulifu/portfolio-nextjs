import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import config from "@/next.config.mjs";

const ProjectModal = ({
  id,
  title,
  description,
  tags,
  images,
  url,
  onClose,
}: {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  url?: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      {/* modal */}
      <motion.div
        layoutId={id}
        className="relative max-w-[70ch] max-h-full bg-slate-800 rounded-lg overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* gallery */}
        <Carousel
          className="relative"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem
                key={image}
                className="relative w-full aspect-[16/9]"
              >
                <img
                  className="w-full"
                  src={(config?.basePath ?? "") + image}
                  alt={title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 bg-slate-900 text-white border-white" />
          <CarouselNext className="absolute right-4 bg-slate-900 text-white border-white" />
        </Carousel>

        {/* content */}
        <div className="flex-shrink p-8">
          <h2 className="text-3xl font-bold">{title}</h2>

          {/* tags */}
          <div className="flex gap-1 mt-2 flex-wrap">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <p className="text-slate-400 mt-2 whitespace-pre-wrap">
            {description}
          </p>

          {url && (
            <div className="mt-8">
              <Link href={url} className="w-full">
                <Button className="w-full text-xl font-mono bg-teal-500 hover:bg-teal-600 gap-2">
                  <RiExternalLinkLine />
                  Go To Site
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* X button */}
        <button
          className="absolute top-4 right-4"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="h-8 w-8" />
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
