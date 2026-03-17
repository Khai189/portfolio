import React from 'react'
import { useState } from 'react'
import { projects, skills, experiences, type Project, type Skill, type Experience } from './data'
import profilePic from './assets/profilePic.jpeg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    toast.success("Form submitted! (We'll need to connect this to an email service next)")
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-gray-50/90 backdrop-blur-md border-b border-gray-200/50">
        <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="text-xl font-bold tracking-tighter">
              <a href="#" className="inline-block pr-1 pb-1 hover:text-blue-600 transition-colors">Khai</a>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <a href="https://github.com/Khai189" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="GitHub">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/khaihmohammad/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="space-x-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-32 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 mb-12">
          <div className="flex-1 text-center md:text-left md:pl-8 lg:pl-12">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Making products <span className="text-purple-600">people </span>
              actually <br />
              <span className="text-purple-600">use.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
              I'm Khai, a product engineer who makes and designs accessible and easy-to-use full-stack web/mobile applications.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img src={profilePic} alt="Khai's Profile Picture" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-900 shadow-[8px_8px_0_0_#111827]" />
          </div>
        </div>
        
        <a href="#projects" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-900 shadow-[6px_6px_0_0_#111827] hover:shadow-[3px_3px_0_0_#111827] hover:translate-y-[3px] hover:translate-x-[3px] active:shadow-none active:translate-y-[6px] active:translate-x-[6px] transition-all">
          View My Work
        </a>
      </header>

      <section id="about" className="py-24 bg-gray-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">About Me</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column: Text Content */}
            <div className="flex-1 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Hi! I'm Khai, a Pomona College student and full-stack product engineer who develops and designs web and mobile applications.
              </p>
              <p>
                I specialize in building and designing multi-user social applications, ensuring everything I build is visually appealing and easy-to-use. I specifically focus on <b>accessibility</b> where I make disability-centered technology that puts disability first.
              </p>
              <p>

              </p>
            </div>

            {/* Right Column: Animated Coding SVG */}
            <div className="flex-1 w-full max-w-md flex justify-center">
              <svg viewBox="0 0 500 400" className="w-full h-auto drop-shadow-[8px_8px_0_rgba(17,24,39,1)] rounded-2xl" xmlns="http://www.w3.org/2000/svg">
                {/* Terminal Window Background */}
                <rect x="0" y="0" width="500" height="400" rx="20" fill="#1e1e2e" />
                {/* Mac-style Window Controls */}
                <circle cx="30" cy="30" r="10" fill="#ff5f56" />
                <circle cx="65" cy="30" r="10" fill="#ffbd2e" />
                <circle cx="100" cy="30" r="10" fill="#27c93f" />
                
                {/* Simulated Code Lines with Pulse Animation */}
                <rect x="30" y="80" width="200" height="15" rx="5" fill="#a6accd" className="animate-pulse" />
                <rect x="30" y="115" width="300" height="15" rx="5" fill="#89ddff" className="animate-pulse" style={{ animationDelay: '200ms' }} />
                <rect x="30" y="150" width="150" height="15" rx="5" fill="#c792ea" className="animate-pulse" style={{ animationDelay: '400ms' }} />
                <rect x="60" y="185" width="250" height="15" rx="5" fill="#c3e88d" className="animate-pulse" style={{ animationDelay: '600ms' }} />
                <rect x="60" y="220" width="180" height="15" rx="5" fill="#f07178" className="animate-pulse" style={{ animationDelay: '800ms' }} />
                <rect x="30" y="255" width="120" height="15" rx="5" fill="#82aaff" className="animate-pulse" style={{ animationDelay: '1000ms' }} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill: Skill) => (
              <button 
                key={skill.name} 
                onClick={() => {
                  setSearchQuery(skill.searchTerm || skill.name);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              >
                <div className="h-16 w-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="max-h-full max-w-full" />
                </div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-gray-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((job: Experience, index: number) => (
              <div key={index} className="relative pl-8 sm:pl-12 pb-12 last:pb-0">
                {/* Dot and Line */}
                <div className={`absolute left-[7px] w-px h-full bg-gray-300 ${index === 0 ? 'top-1' : 'top-0'}`}></div>
                <div className="absolute left-0 top-1 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-100"></div>

                <p className="text-sm text-gray-500 mb-1">{job.date}</p>
                <h3 className="font-bold text-xl">{job.title}</h3>
                <p className="font-semibold text-gray-700 mb-2">{job.company} <span className="font-normal text-gray-500">· {job.location}</span></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main id="projects" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="mb-12">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, description, or tech..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter((project) => {
                const query = searchQuery.toLowerCase();
                return (
                  project.title.toLowerCase().includes(query) ||
                  project.description.toLowerCase().includes(query) ||
                  project.techStack.some((tech) => tech.toLowerCase().includes(query))
                );
              })
              .map((item: Project) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.title} className="group block bg-white rounded-2xl overflow-hidden border-2 border-gray-900 shadow-[8px_8px_0_0_#111827] hover:shadow-[12px_12px_0_0_#111827] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2">
                <div className="h-64 w-full overflow-hidden border-b-2 border-gray-900 bg-gray-900 relative">
                  <img src={item.image || "https://placehold.co/800x400?text=Project+Screenshot"} alt={`${item.title} screenshot`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 transform-gpu" />
                  {item.inProgress && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      In Progress
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech: string) => (
                      <span key={tech} className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Contact Section Placeholder */}
      <footer id="contact" className="py-24 bg-gray-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <p className="text-gray-600 mb-6">If you have any project proposals you'd like to reach out about, or just want to connect further, feel free to send a message!</p>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-6 mt-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" placeholder="How can we work together?"></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </footer>

      <ToastContainer position="bottom-right" theme="light" />
    </div>
  )
}

export default App
