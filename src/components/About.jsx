import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            I'm a Software Developer currently pursuing my Bachelor of Science in Computer Science 
            at <span className="font-semibold text-primary-600">McMaster University</span>, 
            where I've earned Dean's Honor List and Award of Excellence with a GPA of 10.2/12.
          </p>
          <p>
            I'm passionate about building modern web applications, designing efficient algorithms, 
            and creating scalable systems. My experience ranges from full-stack web development 
            to low-level systems programming in C.
          </p>
          <p>
            When I'm not coding, I enjoy mentoring students (4 years at Kumon Learning Centre) 
            and leading community initiatives. I believe in continuous learning and sharing 
            knowledge with others.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-primary-600">Education</h3>
            <p className="font-medium">McMaster University</p>
            <p className="text-gray-600">B.Sc. Computer Science</p>
            <p className="text-sm text-gray-500 mt-2">Sep 2024 - May 2028</p>
            <p className="text-sm text-gray-500">Hamilton, ON</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-primary-600">Current Focus</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Full-stack development with React & Node.js</li>
              <li>Building performant systems in C and Java</li>
              <li>Improving testing and developer experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
