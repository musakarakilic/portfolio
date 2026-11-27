import React from 'react';
import SectionTitle from './SectionTitle';

const services = [
  {
    title: "Multimodal AI Systems",
    description: "Real-time voice and vision pipelines combining Gemini Live API with deterministic safety guardrails and structured agentic workflows.",
    category: "AI Engineering",
    tech: ["Gemini Live API", "Python", "FastAPI", "WebSockets"],
    bgColor: "bg-teal-400/10",
    iconBgColor: "bg-teal-100",
    hoverBgColor: "hover:bg-teal-400/20",
    icon: (
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Edge Computer Vision & HUDs",
    description: "Sub-40ms edge segmentation, spatial assistance overlays, and hands-free wearable interfaces built for live camera streams.",
    category: "Computer Vision",
    tech: ["PyTorch", "YOLOE", "SAM 2.1", "Vite"],
    bgColor: "bg-indigo-400/10",
    iconBgColor: "bg-indigo-100",
    hoverBgColor: "hover:bg-indigo-400/20",
    icon: (
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Web Platforms",
    description: "Modern, responsive web applications with clean frontend architectures, geospatial and relational databases, and SEO-friendly performance.",
    category: "Web Development",
    tech: ["TypeScript", "Vue.js", "Next.js", "PostgreSQL / PostGIS"],
    bgColor: "bg-blue-400/10",
    iconBgColor: "bg-blue-100",
    hoverBgColor: "hover:bg-blue-400/20",
    icon: (
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Backend, Cloud & DevOps",
    description: "Scalable API design, Redis caching, headless CMS integration, and containerized Linux/Nginx deployments with automated CI/CD.",
    category: "Infrastructure",
    tech: ["Node.js", "Docker", "Redis", "Nginx & CI/CD"],
    bgColor: "bg-purple-400/10",
    iconBgColor: "bg-purple-100",
    hoverBgColor: "hover:bg-purple-400/20",
    icon: (
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Services" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`relative group rounded-3xl overflow-hidden ${service.bgColor} ${service.hoverBgColor} transition-all duration-300 min-h-[250px] p-6 flex flex-col`}
              >
                {/* Category and Icon */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className="text-sm text-gray-600">
                    {service.category}
                  </span>
                  <div className={`w-10 h-10 rounded-xl ${service.iconBgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium ${service.iconBgColor} text-gray-700`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Wave Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_70%)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
