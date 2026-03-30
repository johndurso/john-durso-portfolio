"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import InfiniteScroll from "@/components/InfiniteScroll";
import WorkCard from "@/components/WorkCard";

const pastWork = [
  {
    title: "Johanna Medranda",
    url: "https://johannamedranda.com",
    image: "/images/work/johanna-medranda.png",
    technologies: ["Next.js", "React", "Sass/SCSS", "Framer", "Adobe Photoshop"],
    description: "Website for Detroit stand-up comedian Johanna Medranda with show dates that update dynamically.",
  },
  {
    title: "Connor Meade",
    url: "https://connormeade.com",
    image: "/images/work/connor-meade.png",
    technologies: ["Next.js", "React", "Sass/SCSS", "Framer"],
    description: "Website for Brooklyn stand-up comedian Connor Meade with show dates that update dynamically.",
  },
  {
    title: "Motor City Comedy Festival",
    url: "https://motorcitycomedyfestival.com",
    image: "/images/work/motor-city-comedy-festival.jpg",
    technologies: ["Squarespace", "HTML5", "CSS3", "JavaScript", "Adobe Photoshop"],
    description: "Event website for Detroit's premier comedy festival.",
  },
  {
    title: "Nic Gumina",
    url: "https://nicgumina.com",
    image: "/images/work/nic-gumina.jpg",
    technologies: ["Next.js", "React", "Sass/SCSS", "Adobe Photoshop"],
    description: "Professional website highlighting Nic Gumina's cybersecurity career.",
  },
  {
    title: "Alice Duhon",
    url: "https://aliceduhon.com",
    image: "/images/work/alice-duhon.png",
    technologies: ["HTML5", "CSS3", "Adobe Photoshop"],
    description: "Website for Chicago stand-up comedian Alice Duhon with show dates that update dynamically..",
  },
  {
    title: "Priscilla Hankins",
    url: "https://priscillahankins.com",
    image: "/images/work/priscilla-hankins.png",
    technologies: ["Squarespace", "HTML5", "CSS3"],
    description: "Full website redesign for End-of-Life Duola, Priscilla Hankins.",
  },
];

const funProjects = [
  {
    title: "ROI Calculator",
    url: "https://roi-calculator-john-durso.vercel.app/",
    image: "/images/work/roi-calculator.png",
    technologies: ["React", "Next.js", "Vercel", "Tailwind CSS"],
    description: "An interactive ROI calculator tool built with React and deployed on Vercel.",
  },
  {
    title: "Responsive Myspace Profile",
    url: "https://johndurso.github.io/myspace/",
    image: "/images/work/myspace.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Nostalgia"],
    description: "A fully responsive, modern recreation of the classic Myspace profile page.",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            My Work
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            A collection of client projects, freelance work, and personal experiments
            spanning web design, UX, front-end development, and creative exploration.
          </p>
        </AnimatedSection>
      </div>

      {/* Past Work */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <AnimatedSection>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
              Client & Freelance Work
            </h2>
            <p className="text-muted text-sm">
              Hover over the scroll to pause. Click any card to visit the live site.
            </p>
          </AnimatedSection>
        </div>
        <div className="px-6">
          <InfiniteScroll items={pastWork} direction="left" />
        </div>
      </section>

      {/* Fun Projects */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-10">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
            Fun Projects
          </h2>
          <p className="text-muted text-sm">
            Side projects built for fun, learning, and nostalgia.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {funProjects.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <WorkCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}