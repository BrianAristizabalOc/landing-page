"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NeuraFlow Platform",
    category: "SaaS / Web App",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format",
    accent: "#22d3ee",
  },
  {
    title: "Orbit E-Commerce",
    category: "E-Commerce / UI",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format",
    accent: "#a78bfa",
  },
  {
    title: "Pulsar Finance",
    category: "Fintech / Dashboard",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format",
    accent: "#f472b6",
  },
  {
    title: "Zeta Identity",
    category: "Branding / Motion",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format",
    accent: "#34d399",
  },
  {
    title: "Cosmos CMS",
    category: "Desarrollo / Backend",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format",
    accent: "#fb923c",
  },
  {
    title: "Helix Marketing",
    category: "Marketing / Campaña",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format",
    accent: "#facc15",
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative py-28 bg-[#07071a]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(167,139,250,0.07), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Nuestro Trabajo
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="gradient-text-alt">Portafolio</span> Selecto
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Proyectos que hablan por sí solos. Cada uno, una historia de
            transformación digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay always */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/40 to-transparent" />

              {/* Hover color overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: p.accent }}
              />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1"
                  style={{ color: p.accent }}
                >
                  {p.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">{p.title}</h3>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: p.accent }}
                  >
                    <ArrowUpRight size={15} className="text-slate-950" />
                  </div>
                </div>
              </div>

              {/* Border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${p.accent}40` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-violet-400/30 text-violet-300 font-semibold hover:border-violet-400/60 hover:text-violet-200 transition-all duration-300"
          >
            Ver todos los proyectos
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
