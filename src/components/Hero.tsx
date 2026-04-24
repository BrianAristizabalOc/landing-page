"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ArrowRight } from "lucide-react";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    interface P { x: number; y: number; vx: number; vy: number; r: number; a: number }
    const particles: P[] = [];
    const N = 90;
    const LINK = 130;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < N; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.8 + 0.5,
          a: Math.random() * 0.4 + 0.15,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < N; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${p.a})`;
        ctx.fill();

        for (let j = i + 1; j < N; j++) {
          const q = particles[j];
          const dx = q.x - p.x, dy = q.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    window.addEventListener("resize", () => { resize(); init(); });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep space bg */}
      <div className="absolute inset-0 bg-[#050510]" />

      {/* Unsplash bg photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      />

      {/* Radial color blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, #22d3ee, transparent 70%)",
            top: "10%", left: "-5%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10 animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent 70%)",
            top: "20%", right: "-5%",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Particles */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" animate="show"
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass border border-cyan-400/20"
        >
          <Sparkles size={13} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Innovation Redefined
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp} custom={1} initial="hidden" animate="show"
          className="text-6xl sm:text-7xl md:text-[90px] font-extrabold leading-[1.05] mb-6 tracking-tight"
        >
          <span className="text-white block">El Futuro</span>
          <span className="gradient-text block">Es Ahora</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate="show"
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformamos ideas en experiencias digitales extraordinarias.
          Diseño, tecnología e innovación al servicio de tu visión.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} custom={3} initial="hidden" animate="show"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#servicios"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-400 text-slate-950 font-bold text-base hover:bg-cyan-300 transition-all duration-300 glow-cyan"
          >
            Explorar Servicios
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold text-base hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
          >
            Contáctanos
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp} custom={4} initial="hidden" animate="show"
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "500+", label: "Proyectos" },
            { value: "10+", label: "Años" },
            { value: "98%", label: "Satisfacción" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={16} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
