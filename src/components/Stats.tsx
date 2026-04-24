"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Proyectos Completados", color: "#22d3ee" },
  { value: 10, suffix: "+", label: "Años de Experiencia", color: "#a78bfa" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos", color: "#f472b6" },
  { value: 50, suffix: "+", label: "Marcas Globales", color: "#34d399" },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = 16;
          const steps = duration / step;
          let current = 0;
          const increment = target / steps;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums" style={{ color }}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050510]">
      {/* Divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,211,238,0.04), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-5xl sm:text-6xl font-extrabold mb-2 tabular-nums">
                <Counter target={s.value} suffix={s.suffix} color={s.color} />
              </div>
              <div className="text-slate-500 text-sm font-medium">{s.label}</div>

              {/* Underline accent */}
              <div
                className="mx-auto mt-3 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ background: s.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
