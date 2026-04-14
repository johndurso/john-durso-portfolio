"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";

const roles = ["Front-End Developer", "Web Guru", "Perpetual Learner"];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background accent blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[120px] opacity-20"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-secondary)] blur-[120px] opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Hey, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
          >
            John{" "}
            <span className="text-accent">Durso</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-theme text-muted bg-surface-secondary"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-8"
          >
            Mission-driven Senior Web and Digital Experience Designer with over{" "}
            <strong className="text-[var(--color-text)] font-semibold">10 years of experience</strong>{" "}
            owning end-to-end web design across high-traffic digital ecosystems. I
            build scalable design systems, drive conversion through experimentation, and
            ship high-impact launches alongside marketing and engineering teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View My Work
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-theme text-[var(--color-text)] font-semibold text-sm hover:border-[var(--color-accent)] hover:text-accent transition-all"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-[var(--color-accent)]/30"
            />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--color-accent)]/40 shadow-2xl">
              <Image
                src="/images/john-durso-hero.jpg"
                alt="John Durso"
                fill
                sizes="(max-width: 1200px) 300px, 450px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 bg-surface border border-theme rounded-2xl px-4 py-3 shadow-lg"
            >
              <p className="font-display font-bold text-2xl text-accent">10+</p>
              <p className="text-xs text-muted font-medium">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-surface border border-theme rounded-2xl px-4 py-3 shadow-lg"
            >
              <p className="font-display font-bold text-2xl text-accent">1,000,000+</p>
              <p className="text-xs text-muted font-medium">Lines of code written</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 lg:flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}