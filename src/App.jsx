import React from 'react';

function App() {
  const projects = [
    {
      title: "Distributed Real-Time Chat System",
      tech: "Java, TCP Sockets, Multithreading",
      desc: "A concurrent client-server chat platform managing bidirectional communication across isolated virtual rooms using LinkedBlockingQueue.",
      link: "https://github.com/erzaberisha"
    },
    {
      title: "Distributed Calculator via Java RMI",
      tech: "Java, RMI, Concurrent Invocations",
      desc: "A distributed system offloading intensive calculus and arithmetic tasks from thin clients to a centralized registry engine.",
      link: "https://github.com/erzaberisha"
    },
    {
      title: "AWS Secure Infrastructure Deployment",
      tech: "AWS (VPC, EC2, ALB, ASG)",
      desc: "Highly available and self-healing cloud network partitioning a custom VPC into public and private subnets with auto-scaling capabilities.",
      link: "https://github.com/erzaberisha"
    },
    {
      title: "Bloom Flower Shop",
      tech: "React, Node.js, CSS3",
      desc: "An interactive full-stack e-commerce application focusing on dynamic state management, modular components, and responsive grids.",
      link: "https://github.com/erzaberisha"
    }
  ];

  return (
    // Rritja e gjerësisë maksimale për shtrirje më të mirë në desktop
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 selection:bg-gray-800 text-gray-300">
      
      {/* Header Section: Emri majtas, përshkrimi djathtas në desktop */}
      <header className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-900 pb-12">
        <div className="md:col-span-1">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Erza BERISHA</h1>
          <p className="text-lg text-blue-400 font-medium">Software Engineer</p>
          <p className="text-sm text-gray-500 font-mono mt-1">Computer Science Student</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            Final-year Computer Science student at the University of Prishtina focused on Full-Stack Software Engineering, Distributed Systems, and Data Security. Passionate about building resilient concurrent models and secure cloud infrastructures.
          </p>
        </div>
      </header>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6 font-mono">// Technical Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Java", "Node.js", "React", "Python", "TypeScript", "AWS", "PostgreSQL", "MongoDB", "Git"].map((tech) => (
            <span key={tech} className="bg-gray-900/50 border border-gray-800/80 px-3 py-1.5 rounded text-sm text-gray-300 font-medium hover:border-gray-700 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section: 2 kolona në desktop, 1 në celular */}
      <section className="mb-24">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-8 font-mono">// Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col justify-between border border-gray-900 bg-gray-900/10 p-6 rounded-lg hover:border-gray-800 hover:bg-gray-900/20 transition-all duration-300">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-900/50">
                <span className="text-xs text-blue-400/80 font-mono bg-blue-950/30 px-2 py-0.5 rounded border border-blue-900/30">{project.tech}</span>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-mono text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                >
                  view-source <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section me Ikona */}
      <footer className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono">
        <div className="flex flex-wrap gap-4 items-center">
          
          {/* Ikona e Emailit */}
          <a href="mailto:berzaberisha@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email
          </a>
          
          {/* Ikona e LinkedIn */}
          <a href="https://linkedin.com/in/erze-berisha/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          
          {/* Ikona e GitHub */}
          <a href="https://github.com/erzaberisha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>

        </div>
        <span className="text-xs text-gray-600">© 2026</span>
      </footer>
    </div>
  );
}

export default App;