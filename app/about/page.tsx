import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { Briefcase, GraduationCap, ScrollText, Camera, Music, Heart, Megaphone, Scroll } from "lucide-react";

const timeline = [
  {
    role: "Web Designer & Developer",
    company: "Sleeping On The Job Media",
    period: "Jan 2023 – Present",
    highlights: [
      "Design and develop production-ready Next.js and React applications for local businesses and creatives, applying component-driven architecture and reusable design patterns consistent with enterprise-level engineering standards.",
      "Build fully responsive, accessible interfaces with Tailwind CSS, enforcing consistent design tokens and mobile-first layouts across every project.",
      "Develop and maintain custom React functional components with Hooks for state management and side effects, mirroring patterns used in modern production application development.",
      "Integrate RESTful APIs and third-party services into Next.js applications, managing data fetching with server-side rendering and static generation to optimize performance.",
      "Manage all projects end-to-end using Git version control, maintaining clean commit history and branch strategies consistent with professional engineering team workflows.",
    ],
  },
  {
    role: "Web Platform Manager",
    company: "Thomson Reuters",
    period: "Jan 2022 – Present",
    highlights: [
      "Own end-to-end design & experience strategy for US, UK, and Canadian markets",
      "Drove 21% increase in conversion rates and 8% increase in sales via A/B & multivariate testing",
      "Reduced product launch cycles by 17% through scalable component-driven design systems in AEM",
      "Achieved 18% increase in digital conversions through component-driven UX patterns",
    ],
  },
  {
    role: "User Experience Specialist",
    company: "Thomson Reuters",
    period: "Mar 2021 – Jan 2022",
    highlights: [
      "Led interaction design for LegalTracker brand redesign — 28% increase in form conversions",
      "Achieved 50% increase in page scroll depth through improved layout and navigation",
      "Primary web accessibility auditor ensuring WCAG 2.1 AA compliance using WAVE scanner",
    ],
  },
  {
    role: "Senior Web Producer",
    company: "Thomson Reuters",
    period: "Jan 2019 – Mar 2021",
    highlights: [
      "AEM Superuser governing a global component library used by 15+ web publishers",
      "Reduced platform downtime by 15% through proactive component governance",
      "Achieved 40% increase in scroll depth and 10% increase in form conversions",
      "Led AEM authoring training for 15 global web publishers during WordPress migration",
    ],
  },
  {
    role: "Front-End Web Developer",
    company: "Thomson Reuters",
    period: "Nov 2016 – Jan 2019",
    highlights: [
      "Built HTML/CSS/JS templates for campaigns reaching 100,000+ recipients",
      "Saved the marketing team 70% in development time with reusable component documentation",
      "Improved multi-channel workflow efficiency by 12% through systems thinking",
    ],
  },
];

const skills = [
  { category: "Technical", items: ["HTML/CSS", "Sass/SCSS", "JavaScript", "Mobile-First CSS", "WordPress", "WebFlow", "Squarespace", "Shopify", "React"] },
  { category: "Core Design & UX", items: ["Interaction Design", "Visual Design", "Typography", "Component-Driven UX", "Design Systems", "Information Architecture", "Wireframing", "Usability Testing"] },
  { category: "Adobe Experience Cloud", items: ["Adobe Experience Manager", "Experience Fragments", "Content Fragments", "Adobe Analytics", "Adobe Target"] },
  { category: "Optimization", items: ["A/B Testing", "Multivariate Testing", "Click-Rate Optimization", "WCAG 2.2 AA", "SEO", "KPI Tracking"] },
  { category: "Collaboration", items: ["Agile/Scrum", "Jira", "Workfront", "Stakeholder Management", "Cross-Functional Teams"] },
];

const education = [
  { type: "Certification", name: "HTML/CSS, JavaScript with jQuery, and Bootstrap (Top 10% Ranking)", institution: "TestDome", extra: "" },
  { type: "Certification", name: "Claude 101", institution: "Anthropic", extra: "" },
  { type: "Certification", name: "Develop Global Websites with Adobe Experience Manager", institution: "Adobe", extra: "" },
  { type: "Certification", name: "Agile Marketing", institution: "Thomson Reuters", extra: "" },
  { type: "Education", name: "Associate's Degree in Web Design", institution: "Schoolcraft College", extra: "Intership: Schoolcraft Webmaster" }
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection direction="left">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              About Me
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Designer, Thinker,{" "}
              <span className="text-accent">Problem Solver</span>
            </h1>
            <div className="space-y-4 text-muted leading-relaxed text-base">
              <p>
                I'm John Durso.
              </p>
              <p>
                A Web and Digital Experience Designer based in Metro Detroit. 
                With over a decade in the corporate worlde, I've built my career 
                mostly at Thomson Reuters, where I've grown from Front-End Developer
                to Web Platform Product Manager, owning the full web experience strategy
                across US, UK, and Canadian markets.
              </p>
              <p>
                My work sits at the intersection of design, strategy, and technology. I
                specialize in component-driven UX, scalable design systems, conversion rate
                optimization, and high-fidelity developer collaboration. I care deeply about
                accessibility, performance, and the craft of making things that actually work
                for people.
              </p>
              <p>
                Outside of my 9 to 5, I run{" "}
                <a
                  href="https://sleepingonthejobmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  Sleeping on the Job Media
                </a>
                , where I help small businesses, creatives, and professionals
                build compelling web experiences, social media identities, and digital brands.
              </p>
              <p>
                Outside of the digital world, I enjoy playing the drums, 
                hanging out with my two dogs, and cheering on every Detroit 
                sports team.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-theme shadow-xl aspect-[4/5] relative">
                <Image
                  src="/images/john-durso-full.jpg"
                  alt="John Durso"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-surface border border-theme rounded-2xl p-5 shadow-lg">
                <p className="font-display font-bold text-3xl text-accent">10+</p>
                <p className="text-sm text-muted">Years in the craft</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Outside of Work */}
        <AnimatedSection className="mb-24">
          <div className="bg-surface-secondary border border-theme rounded-2xl p-8 md:p-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">
              Outside of Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Music,
                  title: "Music & Comedy",
                  desc: "I play the drums and love attending local music and stand-up comedy events around Detroit.",
                },
                {
                  icon: Megaphone,
                  title: "Detroit Sports",
                  desc: "Proud Detroit fan! Lions, Tigers, Red Wings, Pistons. All day, every day.",
                },
                {
                  icon: Camera,
                  title: "Photography",
                  desc: "Event, personal, and professional photography.",
                },
                {
                  icon: Heart,
                  title: "Dog Dad",
                  desc: "I love my dogs to death. A lot of my free time is spent hanging out with them.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={i * 0.1}>
                    <div className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <h3 className="font-semibold text-base">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection className="mb-24">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Skills & Tools
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
            What I Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <AnimatedSection key={group.category} delay={i * 0.08}>
                <div className="bg-surface-secondary border border-theme rounded-2xl p-6 h-full">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-accent mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full bg-surface border border-theme text-muted font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
            Career Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((job, i) => (
              <AnimatedSection key={job.role + job.period} delay={i * 0.1}>
                <div className="bg-surface-secondary border border-theme rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg">{job.role}</h3>
                      <p className="text-accent font-semibold text-sm">{job.company}</p>
                    </div>
                    <span className="text-xs font-medium text-muted bg-surface border border-theme px-3 py-1.5 rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-muted text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Education/Certifications */}
        <AnimatedSection className="mt-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
            Education & Certifications
          </h2>
          {education.map((item, index) => (
            <div
              key={index}
              className={`bg-surface-secondary border border-theme rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 ${index < education.length - 1 ? "mb-6" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                {item.type === "Education" ? (
                  <GraduationCap size={22} className="text-accent" />
                ) : (
                  <ScrollText size={22} className="text-accent" />
                )}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">{item.name}</h3>
                <p className="text-accent text-sm font-semibold">{item.institution}</p>
                {item.extra && (
                  <p className="text-muted text-sm mt-0.5">{item.extra}</p>
                )}
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
}