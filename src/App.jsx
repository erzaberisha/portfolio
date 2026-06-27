import React, { useEffect, useRef, useState } from 'react';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const maxParticles = 100; // Sa më shumë pika, aq më i theksuar rrjeti

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Krijimi i pikave
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2; // Shpejtësia X
        this.vy = (Math.random() - 0.5) * 1.2; // Shpejtësia Y
        this.radius = Math.random() * 2 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)'; // Pikat blu të theksuara
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Animacioni që lidh pikat me vija (efekti nga Pinterest)
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vizato dhe përditëso pikat
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Lidhja e pikave nëse janë afër
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) { // Distanca e lidhjes
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Sa më afër, aq më e theksuar vija cyan/blue
            ctx.strokeStyle = `rgba(34, 211, 238, ${1 - distance / 120})`; 
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const projects = [
    {
      title: "Distributed Real-Time Chat System",
      tech: ["Java", "TCP Sockets", "Multithreading"],
      desc: "A concurrent client-server chat platform managing bidirectional communication across isolated virtual rooms using LinkedBlockingQueue.",
      link: "https://github.com/erzaberisha"
    },
    {
      title: "Distributed Calculator via Java RMI",
      tech: ["Java", "RMI", "Concurrency"],
      desc: "A distributed system offloading intensive calculus and arithmetic tasks from thin clients to a centralized registry engine.",
      link: "https://github.com/erzaberisha"
    },
    {
      title: "AWS Secure Infrastructure Deployment",
      tech: ["AWS", "VPC", "Auto-Scaling", "ALB"],
      desc: "Highly available and self-healing cloud network partitioning a custom VPC into public and private subnets with auto-scaling capabilities.",
      link: "https://github.com/erzaberisha"
    },
    {
      title: "Bloom Flower Shop",
      tech: ["React", "Node.js", "TailwindCSS"],
      desc: "An interactive full-stack e-commerce application focusing on dynamic state management, modular components, and responsive grids.",
      link: "https://github.com/erzaberisha"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-300 font-sans overflow-x-hidden selection:bg-blue-500/30">
      
      {/* CANVAS BACKGROUND - EFREKTI PINTEREST NODES NETWORK */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        {/* HEADER */}
        <header className="border border-blue-500/20 bg-gray-950/70 backdrop-blur-md p-8 rounded-2xl mb-16 shadow-2xl">
          <h1 className="text-4xl font-black text-white mb-2">Erza BERISHA</h1>
          <p className="text-sm font-mono text-cyan-400 tracking-wider uppercase">// SOFTWARE ENGINEER</p>
          <p className="text-gray-400 mt-4 leading-relaxed font-mono text-sm max-w-3xl">
            Final-year Computer Science student at the University of Prishtina. Focusing on Full-Stack Software Engineering, Distributed Systems, and Data Security.
          </p>
        </header>

        {/* CORE CAPABILITIES */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-6">// Core Capabilities</h2>
          <div className="flex flex-wrap gap-2">
            {["Java", "Node.js", "React", "Python", "TypeScript", "AWS", "PostgreSQL", "Git"].map((tech) => (
              <span key={tech} className="bg-gray-950/90 border border-gray-800 px-4 py-2 rounded-xl text-xs font-mono text-gray-300 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="mb-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-8">// Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative border border-gray-900 bg-gray-950/60 backdrop-blur-md p-6 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-900/30">{t}</span>
                    ))}
                  </div>
                  <div className="border-t border-gray-900/80 pt-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-xs font-mono text-gray-500 group-hover:text-white flex items-center gap-1 transition-colors">
                      EXECUTE_SOURCE <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono">
          <div className="flex gap-3">
            <a href="mailto:berzaberisha@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 bg-gray-950/90 border border-gray-900 px-4 py-2 rounded-xl transition-colors">Email</a>
            <a href="https://linkedin.com/in/erze-berisha/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 bg-gray-950/90 border border-gray-900 px-4 py-2 rounded-xl transition-colors">LinkedIn</a>
            <a href="https://github.com/erzaberisha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 bg-gray-950/90 border border-gray-900 px-4 py-2 rounded-xl transition-colors">GitHub</a>
          </div>
          <span className="text-gray-600">© 2026 Erza BERISHA</span>
        </footer>

      </div>
    </div>
  );
}

export default App;