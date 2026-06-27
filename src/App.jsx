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
    // Kemi rritur gjerësinë maksimale në max-w-6xl që të shtrihet më mirë në desktop
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 selection:bg-gray-800">
      
      {/* Header Section: Në desktop vjen emri majtas, përshkrimi djathtas */}
      <header className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-900 pb-12">
        <div className="md:col-span-1">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Erza Berisha</h1>
          <p className="text-lg text-blue-400 font-medium">Software Engineer</p>
          <p className="text-sm text-gray-500 font-mono mt-1">Computer Science Student</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            Final-year Computer Science student at the University of Prishtina focused on Full-Stack Software Engineering, 
            Distributed Systems, and Data Security. Passionate about building resilient concurrent models and secure cloud infrastructures.
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

      {/* Projects Section: grid-cols-1 në telefon, grid-cols-2 në kompjuter (md:) */}
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

      {/* Contact Section */}
      <footer className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-mono">
        <div className="flex gap-6">
          <a href="mailto:berzaberisha@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="https://linkedin.com/in/erze-berisha/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/erzaberisha" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <span className="text-xs">© 2026</span>
      </footer>
    </div>
  );
}

export default App;