"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";

interface WorkItem {
  title: string;
  url: string;
  image: string;
  technologies: string[];
  description?: string;
}

interface InfiniteScrollProps {
  items: WorkItem[];
  direction?: "left" | "right";
}

export default function InfiniteScroll({
  items,
  direction = "left",
}: InfiniteScrollProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className={`flex gap-6 w-max ${
          direction === "left"
            ? "animate-scroll-left"
            : "animate-scroll-right"
        } hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, i) => (
          <div key={i} className="w-[340px] flex-shrink-0">
            <WorkCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}