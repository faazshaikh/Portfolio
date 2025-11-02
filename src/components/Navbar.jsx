import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Faaz Shaikh
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  activeSection === link.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-primary-100 rounded-full animate-pulse opacity-50"></span>
                )}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-50 p-2 rounded-lg transition-all duration-300 ${
              isOpen 
                ? 'text-primary-600 bg-primary-50' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes size={24} className="animate-spin-in" />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu - Slide Down Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 space-y-1 bg-white/95 backdrop-blur-lg rounded-b-2xl mt-2 shadow-lg border-t border-gray-200">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 mx-2 rounded-lg transition-all duration-300 transform ${
                  activeSection === link.id
                    ? 'bg-primary-600 text-white shadow-md scale-105'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600 hover:translate-x-2'
                }`}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
