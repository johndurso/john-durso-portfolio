"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

const SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET || "change-this-secret";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm(`Are you sure you want to delete "${slug}"? This cannot be undone.`)) return;

    await fetch(`/api/posts/${slug}`, {
      method: "DELETE",
      headers: { "x-admin-secret": SECRET },
    });

    fetchPosts();
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display font-bold text-3xl">Blog Admin</h1>
            <p className="text-muted text-sm mt-1">Manage your blog posts</p>
          </div>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Plus size={16} />
            New Post
          </Link>
        </div>

        <div className="bg-surface-secondary border border-theme rounded-2xl p-2 mb-4">
          <div className="flex items-center gap-2 px-4 py-3 text-xs text-muted font-semibold uppercase tracking-wide">
            <AlertCircle size={14} className="text-[var(--color-accent-secondary)]" />
            This admin area has no authentication in dev. Add proper auth before deploying to production.
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[var(--color-accent)]/30 border-t-[var(--color-accent)] rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 border border-theme rounded-2xl">
            <p className="text-muted mb-4">No blog posts yet.</p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              <Plus size={15} /> Create your first post
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between gap-4 bg-surface-secondary border border-theme rounded-xl px-5 py-4 hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{post.title}</h3>
                  <p className="text-muted text-xs mt-0.5">
                    {post.date} · /{post.slug}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="p-2 rounded-lg hover:bg-surface transition-colors text-muted hover:text-accent"
                    title="View post"
                  >
                    <Eye size={16} />
                  </Link>
                  <Link
                    href={`/admin/blog/edit/${post.slug}`}
                    className="p-2 rounded-lg hover:bg-surface transition-colors text-muted hover:text-accent"
                    title="Edit post"
                  >
                    <Edit size={16} />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="p-2 rounded-lg hover:bg-surface transition-colors text-muted hover:text-red-500"
                    title="Delete post"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}