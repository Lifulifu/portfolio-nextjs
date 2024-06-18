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
import Image from "next/image";
import config from "../next.config.mjs";

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
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 container flex items-center justify-center">
        {/* modal */}
        <motion.div
          layoutId={id}
          className="relative bg-slate-900 w-[75ch] rounded-lg overflow-hidden"
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
                  <Image src={config.basePath + image} fill alt="" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 bg-slate-900 text-white border-white" />
            <CarouselNext className="absolute right-4 bg-slate-900 text-white border-white" />
          </Carousel>

          {/* content */}
          <div className="p-8 overflow-auto max-h-[60vh]">
            <h2 className="text-3xl font-bold">{title}</h2>

            {/* tags */}
            <div className="flex gap-1 mt-2 flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <p className="text-slate-400 mt-2">{description}</p>

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
    </motion.div>
  );
};

export default ProjectModal;
