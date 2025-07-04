import React from 'react';
import Image from 'next/image';
import profileImg from '@/public/images/profile.jpg';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    title: "Frontend Development",
    description: "User experience focused interface development with modern web technologies.",
    category: "Development",
    rating: "4.9",
    progress: "100%",
    tech: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
    bgColor: "bg-blue-400/10",
    iconBgColor: "bg-blue-100",
    hoverBgColor: "hover:bg-blue-400/20",
  },
  {
    title: "Backend Development",
    description: "Scalable and secure backend systems development.",
    category: "Development",
    rating: "4.8",
    progress: "95%",
    tech: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    bgColor: "bg-emerald-400/10",
    iconBgColor: "bg-emerald-100",
    hoverBgColor: "hover:bg-emerald-400/20",
  },
  {
    title: "DevOps & Tools",
    description: "Modern development tools and DevOps practices.",
    category: "Development",
    rating: "4.7",
    progress: "90%",
    tech: ["Git", "Docker", "AWS", "CI/CD"],
    bgColor: "bg-purple-400/10",
    iconBgColor: "bg-purple-100",
    hoverBgColor: "hover:bg-purple-400/20",
  }
];

const AboutMe = () => {
  return (
    <section id="about" className='py-8'>
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        <div className="max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400/10 to-purple-400/10">
                <Image
                  src={profileImg}
                  alt="Profile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_70%)]" />
              </div>

              {/* Bio */}
              <div className="relative rounded-3xl overflow-hidden bg-orange-400/10 p-6 hover:bg-orange-400/20 transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Full Stack Developer & UI/UX Designer
                </h2>
                <p className="text-gray-600 mb-6">
                  Hello! I&apos;m a Full Stack Developer and UI/UX designer. I work passionately with modern web technologies and user experience. I focus on producing innovative solutions using best practices and the latest technologies in every project.
                </p>
                <p className="text-gray-600">
                  My goal is to make a difference in the digital world by developing user-friendly and high-performance web applications. With my continuous learning and development-focused approach, I strive to add unique value to each project.
                </p>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_70%)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((skill) => (
              <div 
                key={skill.title}
                className={`relative group rounded-3xl overflow-hidden ${skill.bgColor} ${skill.hoverBgColor} transition-all duration-300 aspect-[4/3] p-6 flex flex-col`}
              >
                {/* Category and Icon */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-gray-600">
                    {skill.category}
                  </span>
                  <div className={`w-10 h-10 rounded-xl ${skill.iconBgColor} flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-md text-xs font-medium ${skill.iconBgColor} text-gray-700`}
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
                    <span className="font-medium text-gray-900">{skill.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{skill.progress}</span>
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

export default AboutMe; 