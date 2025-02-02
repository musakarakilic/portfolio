import React from 'react';
import SectionTitle from './SectionTitle';

const services = [
  {
    title: "Web Development",
    description: "Modern ve responsive web uygulamaları geliştirme, performans optimizasyonu ve SEO uyumlu kodlama.",
    category: "Development",
    rating: "4.9",
    progress: "100%",
    tech: ["Frontend", "Backend", "Database", "API"],
    bgColor: "bg-blue-400/10",
    iconBgColor: "bg-blue-100",
    hoverBgColor: "hover:bg-blue-400/20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobil uygulamalar geliştirme, native performans ve kullanıcı deneyimi odaklı tasarım.",
    category: "Development",
    rating: "4.7",
    progress: "95%",
    tech: ["iOS", "Android", "React Native", "Flutter"],
    bgColor: "bg-emerald-400/10",
    iconBgColor: "bg-emerald-100",
    hoverBgColor: "hover:bg-emerald-400/20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description: "Kullanıcı odaklı arayüz tasarımı, wireframe ve prototip oluşturma, kullanılabilirlik testleri.",
    category: "Design",
    rating: "4.8",
    progress: "100%",
    tech: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    bgColor: "bg-purple-400/10",
    iconBgColor: "bg-purple-100",
    hoverBgColor: "hover:bg-purple-400/20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-[20px]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Services" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className={`relative group rounded-3xl overflow-hidden ${service.bgColor} ${service.hoverBgColor} transition-all duration-300 aspect-[4/3] p-6 flex flex-col`}
              >
                {/* Category and Icon */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-gray-600">
                    {service.category}
                  </span>
                  <div className={`w-10 h-10 rounded-xl ${service.iconBgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-md text-xs font-medium ${service.iconBgColor} text-gray-700`}
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
                    <span className="font-medium text-gray-900">{service.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{service.progress}</span>
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

export default Services; 