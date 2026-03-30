import Link from "next/link";
import { Globe } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import CodepenIcon from "@/components/icons/CodepenIcon";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-lg">
            <span className="text-accent">John Durso</span>
          </p>
          <p className="text-muted text-sm mt-1">
            Senior Web & Digital Experience Designer · Metro Detroit
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/johnkyrondurso/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="https://github.com/johndurso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://codepen.io/johndursodev/pens/popular"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen"
            className="text-muted hover:text-accent transition-colors"
          >
            <CodepenIcon size={20} />
          </a>
          <a
            href="https://sotjmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="text-muted hover:text-accent transition-colors"
          >
            <Globe size={20} />
          </a>
        </div>

        <p className="text-muted text-sm">
          © {new Date().getFullYear()} John Durso. All rights reserved.
        </p>
      </div>
    </footer>
  );
}