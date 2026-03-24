"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  tags?: string[];
}

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
  coverImage,
  tags,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl overflow-hidden border border-theme bg-surface-secondary hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-secondary)]">
        <Image
          src={coverImage}
          loading="eager"
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-muted text-xs mb-3">
          <Calendar size={13} />
          <time dateTime={date}>{formattedDate}</time>
        </div>

        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors leading-snug">
          {title}
        </h3>

        <p className="text-muted text-sm line-clamp-3 flex-1">{excerpt}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-bg)] border border-theme text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/blog/${slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-200"
        >
          Read Post <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}