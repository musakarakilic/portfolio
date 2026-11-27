import React from 'react';
import Image from 'next/image';
import profileImg from '@/public/images/profile.jpg';
import SectionTitle from './SectionTitle';

const AboutMe = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        <div className="max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400/10 to-purple-400/10">
              <Image
                src={profileImg}
                alt="Musa Karakılıç"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_70%)]" />
            </div>

            {/* Bio */}
            <div className="relative rounded-3xl overflow-hidden bg-orange-400/10 p-8 hover:bg-orange-400/20 transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Full-Stack Software Engineer &amp; AI Builder
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Hello! I&apos;m Musa Karakılıç, a full-stack software engineer focused on real-time multimodal AI systems, low-latency computer vision interfaces, and production web platforms.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From clinical voice-and-vision triage engines to smart-glasses HUDs and geospatial charter platforms, I enjoy taking complex systems from architecture to reliable production deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Vue 3', 'Next.js', 'Python', 'FastAPI', 'PyTorch', 'PostgreSQL', 'Docker'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-orange-100/80 text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent_70%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
