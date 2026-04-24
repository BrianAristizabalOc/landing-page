"use client";

import { motion } from "framer-motion";

const clients = [
  "Accenture", "TechCorp", "Innovatech", "FutureScale",
  "DataSync", "CloudBase", "NexGen", "QuantumAI",
  "VisionLab", "CoreSystems", "BrightWave", "PivotX",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-10 py-5 rounded-xl glass border border-white/5 hover:border-cyan-400/20 transition-colors duration-300 min-w-[160px]">
      <span className="text-slate-500 font-semibold text-sm tracking-wide hover:text-slate-300 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section id="nosotros" className="relative py-24 bg-[#07071a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-slate-500 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Aliados que confían en nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Marcas que <span className="gradient-text">Transformamos</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#07071a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#07071a] to-transparent pointer-events-none" />

        <div className="flex animate-marquee gap-4 w-max">
          {doubled.map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Second row reversed */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#07071a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#07071a] to-transparent pointer-events-none" />

        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee 35s linear infinite reverse" }}
        >
          {[...doubled].reverse().map((name, i) => (
            <LogoItem key={`rev-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
