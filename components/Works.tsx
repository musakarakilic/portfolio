import React from 'react';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with advanced features including real-time inventory, payment processing, and admin dashboard.",
    rating: "4.8",
    progress: "100%",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB"],
    bgColor: "bg-blue-400/10",
    iconBgColor: "bg-blue-100",
    hoverBgColor: "hover:bg-blue-400/20",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    title: "AI Task Manager",
    description: "Task management app powered by AI for smart categorization and priority management using OpenAI API.",
    rating: "4.5",
    progress: "90%",
    category: "AI/ML",
    tech: ["React", "Python", "OpenAI"],
    bgColor: "bg-emerald-400/10",
    iconBgColor: "bg-emerald-100",
    hoverBgColor: "hover:bg-emerald-400/20",
    githubUrl: "https://github.com/username/ai-tasks",
  },
  {
    title: "Real-time Chat App",
    description: "Feature-rich messaging platform with end-to-end encryption, file sharing, and group chat functionality.",
    rating: "4.6",
    progress: "100%",
    category: "Web App",
    tech: ["React", "Socket.io", "Redis"],
    bgColor: "bg-purple-400/10",
    iconBgColor: "bg-purple-100",
    hoverBgColor: "hover:bg-purple-400/20",
    githubUrl: "https://github.com/username/chat-app",
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator with customizable themes and content management system.",
    rating: "4.7",
    progress: "95%",
    category: "Web Tool",
    tech: ["Vue.js", "GraphQL", "AWS"],
    bgColor: "bg-pink-400/10",
    iconBgColor: "bg-pink-100",
    hoverBgColor: "hover:bg-pink-400/20",
    githubUrl: "https://github.com/username/portfolio-gen",
  },
  {
    title: "DevOps Dashboard",
    description: "Comprehensive DevOps monitoring dashboard with real-time metrics and alert system.",
    rating: "4.4",
    progress: "85%",
    category: "DevOps",
    tech: ["React", "Docker", "Kubernetes"],
    bgColor: "bg-orange-400/10",
    iconBgColor: "bg-orange-100",
    hoverBgColor: "hover:bg-orange-400/20",
    githubUrl: "https://github.com/username/devops-dash",
  },
  {
    title: "Blockchain Explorer",
    description: "Cryptocurrency blockchain explorer with transaction tracking and wallet management features.",
    rating: "4.3",
    progress: "80%",
    category: "Blockchain",
    tech: ["TypeScript", "Web3.js", "Node.js"],
    bgColor: "bg-teal-400/10",
    iconBgColor: "bg-teal-100",
    hoverBgColor: "hover:bg-teal-400/20",
    githubUrl: "https://github.com/username/block-explorer",
  }
];

const Works = () => {
  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Works" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.title}
                className={`relative group rounded-3xl overflow-hidden ${project.bgColor} ${project.hoverBgColor} transition-all duration-300 aspect-[4/3] p-6 flex flex-col`}
              >
                {/* Category and Icon */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-gray-600">
                    {project.category}
                  </span>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl ${project.iconBgColor} flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                  >
                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
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

                {/* Rating and Progress */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-gray-900">{project.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{project.progress}</span>
                  </div>
                </div>

                {/* Hover Effect Wave Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_70%)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works; 