import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'Haskell', 'C/C++', 'SQL (PostgreSQL)', 'HTML/CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Spring Boot', 'FastAPI', 'Tailwind CSS', 'Bootstrap', 'Material-UI']
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'VS Code', 'Postman', 'MySQL', 'Vite']
    }
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-600 mb-4 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
