import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Services from '@/components/Services';
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      {/* Animated gradient backgrounds */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-200/40 via-pink-200/40 to-cyan-200/40 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/30 via-green-100/30 to-blue-100/30 animate-gradient-y" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-40 right-1/4 w-[30rem] h-[30rem] bg-rose-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-[28rem] h-[28rem] bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float-slow" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="works">
          <Works />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <AboutMe />
        </section>
      </div>
    </main>
  );
}
