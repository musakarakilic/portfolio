"use client";

import React from 'react';
import SectionTitle from './SectionTitle';

interface Project {
  title: string;
  description: string;
  year: string;
  status: string;
  category: string;
  tech: string[];
  bgColor: string;
  iconBgColor: string;
  hoverBgColor: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "TriageVoice",
    description: "Real-time voice & vision clinical triage platform combining Gemini 3.8 Live with a deterministic safety policy engine (0% emergency false negatives) and automated SBAR clinician handoffs.",
    year: "2026",
    status: "AI · Clinical Systems",
    category: "Multimodal AI - Full Stack",
    tech: ["Vue 3", "TypeScript", "FastAPI", "Gemini Live API", "SQLite"],
    bgColor: "bg-teal-400/10",
    iconBgColor: "bg-teal-100",
    hoverBgColor: "hover:bg-teal-400/20",
    githubUrl: "https://github.com/musakarakilic/triagevoice",
  },
  {
    title: "Optic HUD (AI Glasses MVP)",
    description: "Hands-free smart-glasses repair & spatial assistance HUD fusing sub-40ms YOLOE-11m-seg + SAM 2.1 Tiny edge segmentation with non-blocking Gemini 3.8 Live voice guidance.",
    year: "2026",
    status: "Edge Vision · Wearable HUD",
    category: "Computer Vision - Multimodal AI",
    tech: ["TypeScript", "Vite", "PyTorch", "YOLOE / SAM 2.1", "Gemini Live API"],
    bgColor: "bg-indigo-400/10",
    iconBgColor: "bg-indigo-100",
    hoverBgColor: "hover:bg-indigo-400/20",
    githubUrl: "https://github.com/musakarakilic/optic-hud",
  },
  {
    title: "Aegion Yachts Charter",
    description: "Production-grade yacht charter platform indexing 780+ luxury yachts with PostGIS geospatial filtering, Redis caching, headless Directus CMS, and containerized Ubuntu/Nginx deployment.",
    year: "2025",
    status: "Production Architecture",
    category: "Charter Platform - Full Stack",
    tech: ["Vue 3", "Tailwind", "Directus", "PostGIS", "Docker"],
    bgColor: "bg-emerald-400/10",
    iconBgColor: "bg-emerald-100",
    hoverBgColor: "hover:bg-emerald-400/20",
    githubUrl: "https://github.com/musakarakilic/aegion-yachts-platform",
  },
  {
    title: "Carrier E-Commerce",
    description: "Full-stack e-commerce platform built with Vue.js, Node.js, and MongoDB featuring role-based inventory management, cart workflows, and Stripe payment integration.",
    year: "2024",
    status: "Full Stack",
    category: "E-Commerce - Full Stack",
    tech: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    bgColor: "bg-blue-400/10",
    iconBgColor: "bg-blue-100",
    hoverBgColor: "hover:bg-blue-400/20",
    githubUrl: "https://github.com/musakarakilic/carrier-ecommerce",
  }
];

const Works = () => {
  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Works" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const cardHref = project.liveUrl || project.githubUrl;
              return (
              <div 
                key={project.title}
                className={`relative group rounded-3xl overflow-hidden ${project.bgColor} ${project.hoverBgColor} transition-all duration-300 min-h-[290px] p-6 flex flex-col`}
              >
                {/* Project link wrapper - makes the entire card clickable */}
                {cardHref && (
                  <a 
                    href={cardHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-0"
                    aria-label={`View ${project.title}`}
                  ></a>
                )}

                {/* Category and Icon */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className="text-sm text-gray-600">
                    {project.category}
                  </span>
                  <div className="flex gap-2 relative z-20">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-xl ${project.iconBgColor} flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer`}
                        aria-label="View live site"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </a>
                    )}
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl ${project.iconBgColor} flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer`}
                      aria-label="View GitHub repository"
                    >
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow relative z-10 pointer-events-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-md text-xs font-medium ${project.iconBgColor} text-gray-700`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year and Status */}
                <div className="flex items-center gap-4 mt-5 relative z-10 pointer-events-none">
                  <span className="font-semibold text-sm text-gray-900">{project.year}</span>
                  <span className="text-sm text-gray-600">{project.status}</span>
                </div>

                {/* Hover Effect Wave Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_70%)]" />
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works; 