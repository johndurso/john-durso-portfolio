import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
  tags?: string[];
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString().split("T")[0],
        excerpt: data.excerpt || content.slice(0, 150) + "...",
        coverImage: data.coverImage || "/images/blog-placeholder.jpg",
        content,
        tags: data.tags || [],
      } as Post;
    });

  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "/images/blog-placeholder.jpg",
      content,
      tags: data.tags || [],
    };
  } catch {
    return null;
  }
}

export async function getPostContentAsHtml(content: string): Promise<string> {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

export function createPost(post: Omit<Post, "slug" | "content"> & { slug: string; content: string }): void {
  const fullPath = path.join(postsDirectory, `${post.slug}.md`);
  const frontmatter = `---
title: "${post.title}"
date: "${post.date}"
excerpt: "${post.excerpt}"
coverImage: "${post.coverImage}"
tags: [${post.tags?.map((t) => `"${t}"`).join(", ") || ""}]
---

${post.content}`;

  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
  fs.writeFileSync(fullPath, frontmatter, "utf8");
}

export function updatePost(slug: string, updates: Partial<Post>): void {
  const existing = getPostBySlug(slug);
  if (!existing) throw new Error("Post not found");

  const merged = { ...existing, ...updates };
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const frontmatter = `---
title: "${merged.title}"
date: "${merged.date}"
excerpt: "${merged.excerpt}"
coverImage: "${merged.coverImage}"
tags: [${merged.tags?.map((t) => `"${t}"`).join(", ") || ""}]
---

${merged.content}`;

  fs.writeFileSync(fullPath, frontmatter, "utf8");
}

export function deletePost(slug: string): void {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
}