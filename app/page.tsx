import { getAllPosts } from "@/lib/posts";
import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";
import WorkCard from "@/components/WorkCard";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";

const featuredWork = [
  {
    title: "Nic Gumina",
    url: "https://nicgumina.com",
    image: "/images/work/nic-gumina.jpg",
    technologies: ["Next.js", "React", "Sass/SCSS", "Adobe Photoshop"],
    description: "Professional website highlighting Nic Gumina's cybersecurity career.",
  },
  {
    title: "Motor City Comedy Festival",
    url: "https://motorcitycomedyfestival.com",
    image: "/images/work/motor-city-comedy-festival.jpg",
    technologies: ["Squarespace", "HTML/CSS", "JavaScript", "Adobe Photoshop"],
    description: "Event website for Detroit's premier comedy festival.",
  },
  {
    title: "Johanna Medranda",
    url: "https://johannamedranda.com",
    image: "/images/work/johanna-medranda.png",
    technologies: ["Next.js", "React", "Framer", "Adobe Photoshop"],
    description: "Single-page website for Detroit stand-up comedian Johanna Medranda.",
  },
];

export default async function HomePage() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <>
      <HeroSection />

      {recentPosts.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                    Latest Thoughts
                  </p>
                  <h2 className="font-display font-bold text-3xl md:text-4xl">
                    From the Blog
                  </h2>
                </div>
                <a
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
                >
                  All Posts <ArrowRight size={15}/>
                </a>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.1}>
                  <BlogCard {...post} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Selected Work
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl">
                Featured Projects
              </h2>
            </div>
            <a
              href="/work"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              View All Work <ArrowRight size={15} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWork.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <WorkCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Get In Touch
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted text-base">
                Have a project in mind, want to collaborate, or just want to
                say hi? My inbox is always open.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="border border-theme rounded-2xl p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}