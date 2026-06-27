import React, { useState, useEffect } from 'react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: "01",
      title: "Distributed Real-Time Chat System",
      tech: ["Java", "TCP Sockets", "Multithreading"],
      desc: "A concurrent client-server chat platform managing bidirectional communication across isolated virtual rooms using LinkedBlockingQueue.",
      link: "https://github.com/erzaberisha"
    },
    {
      id: "02",
      title: "Distributed Calculator via Java RMI",
      tech: ["Java", "RMI", "Concurrency"],
      desc: "A distributed system offloading intensive calculus and arithmetic tasks from thin clients to a centralized registry engine.",
      link: "https://github.com/erzaberisha"
    },
    {
      id: "03",
      title: "AWS Secure Infrastructure Deployment",
      tech: ["AWS", "VPC", "Auto-Scaling", "ALB"],
      desc: "Highly available and self-healing cloud network partitioning a custom VPC into public and private subnets with auto-scaling capabilities.",
      link: "https://github.com/erzaberisha"
    },
    {
      id: "04",
      title: "Bloom Flower Shop",
      tech: ["React", "Node.js", "TailwindCSS"],
      desc: "An interactive full-stack e-commerce application focusing on dynamic state management, modular components, and responsive grids.",
      link: "https://github.com/erzaberisha"
    }
  ];

  return (
    // Ndryshuar në stil direkt për t'u siguruar që sfondi i zi ngarkohet 100%
    <div style={{ backgroundColor: '#030712' }} className="relative min-h-screen text-gray-300 font-sans overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* 1. REAL-TIME GRID OVERLAY (Vrehet shumë më mirë tani) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(31, 41, 55, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 41, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem'
        }}
      />
      
      {/* 2. INTERACTIVE GLOW RADIAL (Drita që ndjek miun) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.2), transparent 80%)`
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-28">
        
        {/* HEADER SECTION - CYBER COMMAND */}
        <header className="relative border border-blue-500/20 bg-gray-950/60 backdrop-blur-md p-8 rounded-2xl mb-16 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#030712] px-3 py-0.5 text-xs font-mono text-blue-400 tracking-widest uppercase border border-blue-500/30 rounded">
            System.Core // Active
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 border-r-0 md:border-r border-gray-800/60 pr-4">
              <h1 className="text-4xl font-black tracking-tight text-white mb-1 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Erza BERISHA
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-mono text-blue-400 tracking-wider">SOFTWARE ENGINEER</p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-gray-400 leading-relaxed font-mono text-sm md:text-base">
                &gt; Final-year Computer Science student at the University of Prishtina. 
                Focusing on Full-Stack Software Engineering, Distributed Systems, and Data Security. 
                Passionate about building resilient concurrent models and secure cloud infrastructures.
              </p>
            </div>
          </div>
        </header>

        {/* TECHNICAL STACK */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-blue-500 font-mono text-sm">//</span>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono">Core Capabilities</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["Java", "Node.js", "React", "Python", "TypeScript", "AWS", "PostgreSQL", "MongoDB", "Git"].map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-950/80 border border-gray-800 px-4 py-2 rounded-xl text-xs font-mono text-gray-300 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-blue-500 font-mono text-sm">//</span>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono">Index_Of_Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative flex flex-col justify-between border border-gray-900/80 bg-gray-950/40 backdrop-blur-md p-6 rounded-2xl hover:border-blue-500/40 hover:bg-gray-950/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all duration-500"
              >
                <span className="absolute top-4 right-6 text-6xl font-black font-mono text-gray-900/30 group-hover:text-blue-500/10 transition-colors duration-500 pointer-events-none">
                  {project.id}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-blue-400/80 bg-blue-950/50 px-2 py-0.5 rounded border border-blue-900/30">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-900/60">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors flex items-center gap-1"
                    >
                      EXECUTE_SOURCE <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-900/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono">
          <div className="flex flex-wrap gap-3">
            <a href="mailto:berzaberisha@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all bg-gray-950/60 border border-gray-800 px-4 py-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a href="https://linkedin.com/in/erze-berisha/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all bg-gray-950/60 border border-gray-800 px-4 py-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/xl" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/erzaberisha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all bg-gray-950/60 border border-gray-800 px-4 py-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
          </div>
          <span className="text-gray-600 font-mono">// DEP_LOCKED: 2026</span>
        </footer>

      </div>
    </div>
  );
}

export default App;