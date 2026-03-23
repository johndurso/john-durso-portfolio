"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  url: string;
  image: string;
  technologies: string[];
  description?: string;
}

export default function WorkCard({
  title,
  url,
  image,
  technologies,
  description,
}: WorkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group block rounded-2xl min-h-[400px] overflow-hidden border border-theme bg-surface-secondary hover:border-[var(--color-accent)] transition-all duration-200 shadow-sm hover:shadow-xl"
    >
      <div className="relative aspect-video bg-top overflow-hidden bg-[var(--color-bg-secondary)]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <ExternalLink
            size={32}
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-muted text-sm mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-bg)] border border-theme text-muted font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}