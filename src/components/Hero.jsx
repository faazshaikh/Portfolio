import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Software Developer'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    let cursorInterval
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        // Blink cursor effect
        cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev)
        }, 530)
      }
    }, 100)

    return () => {
      clearInterval(typingInterval)
      if (cursorInterval) clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main heading with fade-in and slide-up */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in-up">
          Hi, I'm <span className="text-primary-600 inline-block animate-gradient">Faaz Shaikh</span>
        </h1>

        {/* Typing effect for subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-6 min-h-[2rem]">
          {displayText}
          <span className={`inline-block w-1 h-6 bg-primary-600 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            |
          </span>
        </p>

        {/* Description with fade-in delay */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 animate-fade-in-up-delay">
          Passionate about full-stack development, data structures, and system design.
          Always learning, building, and optimizing.
        </p>
        
        {/* Social icons with staggered animation */}
        <div className="flex justify-center space-x-6 animate-fade-in-up-delay-2">
          <a
            href="https://github.com/faazshaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/faaz-shaikh-4bb566313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:Faazshaikh@hotmail.com"
            className="text-gray-700 hover:text-primary-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        {/* Button with floating animation */}
        <a
          href="#projects"
          className="inline-block mt-12 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-up-delay-3 animate-float"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero
