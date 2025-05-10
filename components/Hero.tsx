'use client';

const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
            {/* Main Content */}
            <div className="text-center max-w-5xl mx-auto mb-24">
              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                Hi, I&apos;m <span className="bg-gradient-to-r from-violet-600 to-cyan-600 text-transparent bg-clip-text">Musa Karakılıç</span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl block mt-4">I build things for the web</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                A passionate web developer focused on creating intuitive and performant user experiences with modern technologies
              </p>

              {/* Tech stack pills */}
              <div className="inline-flex flex-wrap justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-800 border border-white/20 hover:bg-white/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center gap-4 mb-16">
                {[
                  { href: 'https://github.com/musakarakilic', icon: 'github' },
                  { href: 'https://linkedin.com/in/', icon: 'linkedin' },
                  { href: 'https://x.com/', icon: 'twitter' }
                ].map(({ href, icon }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-lg"></div>
                    <div className="relative">
                      <svg className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        {icon === 'github' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        )}
                        {icon === 'linkedin' && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        )}
                        {icon === 'twitter' && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        )}
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll Down Arrow */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-scroll mb-1"></div>
              </div>
              <span className="text-gray-600 text-sm mt-2 font-medium tracking-wider">Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 