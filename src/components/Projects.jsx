import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Quran Memorization App',
      description: 'A web-based Quran memorization platform built with React and modern technologies. Features intuitive UI, spaced-repetition review, progress tracking, and analytics to help students memorize and review effectively.',
      tech: ['React', 'JavaScript', 'HTML/CSS', 'Java', 'Spring Boot', 'SQL'],
      github: 'https://github.com/faazshaikh/Quran-Memorization-App',
      status: 'In Progress',
      image: '🕌'
    },
    {
      title: 'Hash Table Indexing - UK Property Sales',
      description: 'Implemented a hash-table index in C for fast lookup of large CSV datasets (UK Land Registry case). Compares linear vs. indexed search, analyzes load factor, and demonstrates memory efficiency with optimized performance.',
      tech: ['C', 'Hash Tables', 'CSV Parsing', 'Benchmarking'],
      github: 'https://github.com/faazshaikh/Indexing-UK-Residential-Property-Sales-With-Hash-Tables',
      status: 'Completed',
      image: '📊'
    },
    {
      title: 'BangYourHead - Booking App',
      description: 'Full-featured booking web app developed collaboratively, allowing clients to schedule and manage appointments. Features responsive design, real-time updates, and secure backend with user authentication.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'AJAX'],
      github: 'https://github.com/zshan-dev/bangyourhead',
      status: 'Completed',
      image: '📅'
    }
  ]

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                project.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
              <p className="text-gray-600 mb-4 line-clamp-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <FaGithub className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
