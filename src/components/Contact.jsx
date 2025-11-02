import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`)
    
    // Open email client
    window.location.href = `mailto:faazshaikh@hotmail.com?subject=${subject}&body=${body}`
    
    // Show success message
    setShowSuccess(true)
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setShowSuccess(false)
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-container bg-white">
      <h2 className="section-title">Get In Touch</h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Let's Connect!
            </h3>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:faazshaikh@hotmail.com"
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                <FaEnvelope className="mr-4" size={20} />
                <span>faazshaikh@hotmail.com</span>
              </a>
              <a
                href="tel:647-540-3229"
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                <FaPhone className="mr-4" size={20} />
                <span>647-540-3229</span>
              </a>
              <a
                href="https://www.linkedin.com/in/faaz-shaikh-4bb566313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                <FaLinkedin className="mr-4" size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/faazshaikh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                <FaGithub className="mr-4" size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
              
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <p className="font-medium">✓ Message prepared!</p>
                  <p className="text-sm mt-1">Your email client should open. If it doesn't, you can email me directly at faazshaikh@hotmail.com</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
