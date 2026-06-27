import React, { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Përshtat madhësinë e canvas me ekranin
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Karakteret "IT" që do të lëvizin (Binare dhe simbole)
    const katakana = "0101011001101101<>/{};:[]_=+*&^%$#@!";
    const alphabet = katakana.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      // Krijo një efekt fade mbi background-in e zi
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)'; // Ngjyra e errët bg-gray-950 me transparencë
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ngjyra e tekstit që bie (një jeshile/blu shumë e zbehtë "cyberpunk/IT")
      ctx.fillStyle = 'rgba(59, 130, 246, 0.12)'; // Blu shumë e butë që të mos pengojë leximin
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // Shpejtësia e lëvizjes

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

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
    <div className="relative min-h-screen bg-gray-950 overflow-x-hidden selection:bg-gray-800 text-gray-300">
      
      {/* Canvas për Background-in IT Matrix */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Pjesa kryesore e faqes (Content) e ngritur mbi z-10 */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* Header Section */}
        <header className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-900/60 pb-12 backdrop-blur-sm bg-gray-950/20 rounded-xl p-4">
          <div className="md:col-span-1">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Erza Berisha</h1>
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
        <section className="mb-20 backdrop-blur-sm bg-gray-950/10 p-4 rounded-xl">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6 font-mono">// Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Java", "Node.js", "React", "Python", "TypeScript", "AWS", "PostgreSQL", "MongoDB", "Git"].map((tech) => (
              <span key={tech} className="bg-gray-900/60 border border-gray-800/80 px-3 py-1.5 rounded text-sm text-gray-300 font-medium hover:border-blue-500/50 transition-colors duration-300">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-8 font-mono">// Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group flex flex-col justify-between border border-gray-900/80 bg-gray-900/40 backdrop-blur-md p-6 rounded-lg hover:border-blue-500/40 hover:bg-gray-900/60 transition-all duration-300 shadow-xl">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-900/80">
                  <span className="text-xs text-blue-400/80 font-mono bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/30">{project.tech}</span>
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
        <footer className="border-t border-gray-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono backdrop-blur-sm bg-gray-950/10 p-4 rounded-xl">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="mailto:berzaberisha@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-900/80 border border-gray-800 px-3 py-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a href="https://linkedin.com/in/erze-berisha/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-900/80 border border-gray-800 px-3 py-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/erzaberisha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-900/80 border border-gray-800 px-3 py-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
          </div>
          <span className="text-xs text-gray-600">© 2026</span>
        </footer>
      </div>
    </div>
  );
}

export default App;