import { getPostBySlug, getAllPosts, getPostContentAsHtml } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (process.env.NODE_ENV === 'development') {
    return [];
  }
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | John Durso`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await getPostContentAsHtml(post.content);
  const [year, month, day] = post.date.split("-").map(Number);
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 text-muted text-sm mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime={post.date}>{formattedDate}</time>
            </span>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag size={14} />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border border-theme bg-surface-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-muted text-lg leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden border border-theme mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1280}
            height={720}
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <article
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}