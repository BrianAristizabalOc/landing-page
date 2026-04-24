"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#050510]">
      {/* Glow blobs */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-12 sm:p-16"
          style={{
            border: "1px solid rgba(34,211,238,0.15)",
            boxShadow: "0 0 60px rgba(34,211,238,0.06)",
          }}
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            ¿Listo para el siguiente nivel?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Hagamos algo{" "}
            <span className="gradient-text">extraordinario</span>{" "}
            juntos
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Cuéntanos tu idea y la convertiremos en una experiencia digital que
            supere tus expectativas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contacto"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-bold text-base hover:opacity-90 transition-all duration-300 glow-cyan"
            >
              <Mail size={18} />
              Iniciar Proyecto
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portafolio"
              className="px-8 py-4 rounded-full glass border border-white/10 text-slate-300 font-semibold text-base hover:border-white/20 hover:text-white transition-all duration-300"
            >
              Ver Portafolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
