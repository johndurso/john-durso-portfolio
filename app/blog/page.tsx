import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Writing
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            The Blog
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Thoughts on web design, UX, digital strategy, the Detroit creative scene, and
            whatever else is on my mind.
          </p>
        </AnimatedSection>

        {posts.length === 0 ? (
          <AnimatedSection>
            <div className="text-center py-24 border border-theme rounded-2xl bg-surface-secondary">
              <p className="text-muted text-lg mb-2">No posts yet.</p>
              <p className="text-muted text-sm">
                Check back soon — content is coming.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={(i % 3) * 0.1}>
                <BlogCard {...post} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}