import React from 'react'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Class Instructor/Supervisor',
      company: 'Kumon Learning Centre',
      location: 'Oakville, ON',
      period: 'Sep 2020 - Aug 2024',
      description: [
        'Mentored students from grades 1-12 in math and reading, breaking down complex concepts into simple, understandable steps',
        'Marked and assessed student work efficiently to support personalized learning plans and academic progress',
        'Maintained a focused, fast-paced environment while assisting multiple students simultaneously'
      ]
    },
    {
      type: 'work',
      title: 'Community Leader',
      company: 'Illuminate Universe',
      location: 'Toronto, ON',
      period: 'May 2024 - Aug 2024',
      description: [
        'Facilitated online and in-person engagement to foster a vibrant, inclusive student community',
        'Mentored participants by offering support, guidance, and feedback throughout workshops and competitions',
        'Collaborated with the leadership team to coordinate events and promote participation'
      ]
    }
  ]

  return (
    <section id="experience" className="section-container bg-white">
      <h2 className="section-title">Experience</h2>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-primary-500">
              <div className="absolute -left-3 top-0">
                <div className="bg-primary-500 rounded-full p-2">
                  <FaBriefcase className="text-white" size={16} />
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-primary-600 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  {exp.location} • {exp.period}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-50 to-purple-50 p-8 rounded-lg">
          <div className="flex items-start">
            <FaGraduationCap className="text-primary-600 mr-4 mt-1" size={24} />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                McMaster University
              </h3>
              <p className="text-lg text-primary-600 font-medium mb-2">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-gray-600 mb-2">
                Sep 2024 - May 2028 • Hamilton, ON
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">GPA:</span> 10.2/12 • Dean's Honor List and Award of Excellence
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Relevant Courses:</span> Discrete Mathematics, 
                Computational Thinking, Software Design, Linear Algebra, Web Programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
