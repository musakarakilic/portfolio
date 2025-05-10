'use client';

import Link from 'next/link';
import { useState } from 'react';
import ContactForm from './ContactForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -120; // Offset for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-8">
        <div className="mx-auto pl-[28px] pr-[3px] bg-black/85 backdrop-blur-md rounded-full max-w-[720px] border border-gray-800/50 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_8px_0_rgba(0,0,0,0.2),0_2px_4px_-2px_rgba(255,255,255,0.02)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.3),0_8px_16px_-2px_rgba(0,0,0,0.2),0_2px_6px_-1px_rgba(255,255,255,0.03)] transition-all duration-500">
          <div className="flex items-center h-[50px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-medium text-white flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 bg-blue-300 rounded-full"></span>
                Musa.
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-6">
                <a
                  href="#works"
                  onClick={(e) => scrollToSection(e, '#works')}
                  className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-blue-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-300 after:transition-all after:duration-300"
                >
                  Works
                </a>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-blue-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-300 after:transition-all after:duration-300"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="text-white text-[15px] tracking-wide transition-all duration-300 hover:text-blue-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-300 after:transition-all after:duration-300"
                >
                  About Me
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:flex justify-end">
              <button
                onClick={() => setShowContactForm(true)}
                className="group inline-flex items-center justify-center h-10 px-6 bg-white/90 hover:bg-white text-black rounded-full text-[13px] font-medium tracking-wider transition-all duration-300"
              >
                Contact Me
                <svg className="w-4 h-4 ml-2 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full px-3 mt-2">
            <div className="mx-auto max-w-[720px] rounded-2xl bg-black/85 backdrop-blur-md border border-gray-800/50 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_4px_8px_0_rgba(0,0,0,0.2)] overflow-hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#works"
                  onClick={(e) => scrollToSection(e, '#works')}
                  className="block px-3 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 text-[15px] font-medium tracking-wide transition-all relative"
                >
                  Works
                </a>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="block px-3 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 text-[15px] font-medium tracking-wide transition-all relative"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="block px-3 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 text-[15px] font-medium tracking-wide transition-all relative"
                >
                  About Me
                </a>
                <div className="px-3 pt-2">
                  <button
                    onClick={() => {
                      setShowContactForm(true);
                      setIsOpen(false);
                    }}
                    className="group block w-full text-center py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-[15px] font-medium tracking-wide transition-all inline-flex items-center justify-center"
                  >
                    Contact Me
                    <svg className="w-4 h-4 ml-2 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Form Modal */}
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </>
  );
};

export default Navbar; 