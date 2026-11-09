import React, { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const maxParticles = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
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
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
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
      title: "Heart Disease Data Analytics & Predictive Modeling",
      tech: ["Python", "Pandas", "Scikit-Learn", "K-Means", "PCA", "Random Forest"],
      desc: "An end-to-end data science and machine learning project on clinical datasets. Features IQR outlier handling, StandardScaler pipelines, supervised classification (Logistic Regression, Random Forest, Decision Trees) with confusion matrix metrics, K-Means & PCA patient clustering, and Apriori association mining.",
      link: "https://github.com/erzaberisha/heart-disease-data-analytics"
    },
    {
      title: "French Railway Statistical Analysis",
      tech: ["R", "Statistics", "Data Visualization", "Hypothesis Testing"],
      desc: "Statistical analysis and data modeling performed in R on French railway transportation datasets to uncover operational patterns, trend distributions, and analytical insights.",
      link: "https://github.com/erzaberisha/french-railway-statistical-analysis"
    },
    {
      title: "Distributed Real-Time Chat System",
      tech: ["Java", "TCP Sockets", "Multithreading"],
      desc: "A concurrent client-server chat platform managing bidirectional communication across isolated virtual rooms using LinkedBlockingQueue.",
      link: "https://github.com/erzaberisha/distributed-realtime-chat"
    },
    {
      title: "Distributed Scientific Calculator via Java RMI",
      tech: ["Java", "RMI", "Concurrency"],
      desc: "A distributed system offloading intensive calculus and arithmetic tasks from thin clients to a centralized registry engine.",
      link: "https://github.com/erzaberisha/distributed-scientific-calculator-rmi"
    },
    {
      title: "AWS High Availability Network Deployment",
      tech: ["AWS", "VPC", "Auto-Scaling", "ALB", "Cloud Architecture"],
      desc: "Highly available and self-healing cloud infrastructure partitioning a custom VPC into public and private subnets with auto-scaling capabilities and load balancing.",
      link: "https://github.com/erzaberisha/aws-high-availability-network"
    },
    {
      title: "Bloom Flower Shop",
      tech: ["React", "Node.js", "TailwindCSS", "JavaScript"],
      desc: "An interactive full-stack e-commerce application focusing on dynamic state management, modular component architecture, and responsive design.",
      link: "https://github.com/erzaberisha/BloomFlowerShop"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-300 font-sans overflow-x-hidden selection:bg-blue-500/30">
      
      {/* CANVAS BACKGROUND */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        {/* HEADER */}
        <header className="border border-blue-500/20 bg-gray-950/70 backdrop-blur-md p-8 rounded-2xl mb-16 shadow-2xl">
          <h1 className="text-4xl font-black text-white mb-2">Erza BERISHA</h1>
          <p className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-4">SOFTWARE & MACHINE LEARNING ENGINEER</p>
          <p className="text-gray-400 leading-relaxed font-mono text-sm w-full">
            Computer Science Graduate from the University of Prishtina. Specialized in Software Engineering, Data Analytics, and Applied Machine Learning with hands-on experience in clinical healthcare data modeling and statistical computing.
          </p>
        </header>

        {/* CORE CAPABILITIES */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-6">Core Capabilities</h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "Pandas & NumPy", "Scikit-Learn", "R", "Java", "SQL", "React", "Node.js", "AWS", "Git"].map((tech) => (
              <span key={tech} className="bg-gray-950/90 border border-gray-800 px-4 py-2 rounded-xl text-xs font-mono text-gray-300 shadow-sm hover:border-cyan-500/40 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="mb-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-mono mb-8">Selected Projects ({projects.length})</h2>
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

        {/* FOOTER & CONTACT */}
        <footer className="border-t border-gray-900 pt-10 mt-16">
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono mb-2">Get In Touch / Contact</h2>
            <p className="text-xs font-mono text-gray-500">Feel free to reach out for opportunities or collaboration.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono">
            <div className="flex flex-wrap gap-3">
              {/* EMAIL */}
              <a 
                href="mailto:berzaberisha@gmail.com" 
                className="flex items-center gap-2.5 text-gray-300 hover:text-cyan-400 bg-gray-950/90 border border-gray-800 px-4 py-2 rounded-xl transition-all hover:border-cyan-500/40 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>Email</span>
              </a>

              {/* LINKEDIN */}
              <a 
                href="https://linkedin.com/in/erze-berisha/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2.5 text-gray-300 hover:text-cyan-400 bg-gray-950/90 border border-gray-800 px-4 py-2 rounded-xl transition-all hover:border-cyan-500/40 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* GITHUB */}
              <a 
                href="https://github.com/erzaberisha" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2.5 text-gray-300 hover:text-cyan-400 bg-gray-950/90 border border-gray-800 px-4 py-2 rounded-xl transition-all hover:border-cyan-500/40 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
            <span className="text-gray-600 font-mono">© 2026 Erza BERISHA</span>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;