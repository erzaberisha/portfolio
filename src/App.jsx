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
    <div className="max-w-3xl mx-auto px-6 py-20 selection:bg-gray-800">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Erza Berisha</h1>
        <p className="text-xl text-gray-400 mb-6">Software Engineer & Computer Science Student</p>
        <p className="text-gray-400 leading-relaxed max-w-2xl">
          Final-year Computer Science student at the University of Prishtina focused on Full-Stack Software Engineering, 
          Distributed Systems, and Data Security. Passionate about building resilient concurrent models and secure cloud infrastructures.
        </p>
      </header>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Technical Stack</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {["Java", "Node.js", "React", "Python", "TypeScript", "AWS", "PostgreSQL", "MongoDB", "Git"].map((tech) => (
            <span key={tech} className="bg-gray-900 border border-gray-800 px-3 py-1 rounded text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Selected Projects</h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group border-b border-gray-900 pb-8 last:border-0">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500 font-mono">{project.tech}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3 leading-relaxed">{project.desc}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-mono text-gray-500 hover:text-white transition-colors"
              >
                view-source →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="border-t border-gray-900 pt-8 flex justify-between items-center text-sm text-gray-500 font-mono">
        <div>
          <a href="mailto:berzaberisha@gmail.com" className="hover:text-white transition-colors mr-4">Email</a>
          <a href="https://linkedin.com/in/erze-berisha/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors mr-4">LinkedIn</a>
          <a href="https://github.com/erzaberisha" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <span>2026</span>
      </footer>
    </div>
  );
}

export default App;