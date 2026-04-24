"use client";

import { motion } from "framer-motion";
import { Layers, Code2, Megaphone, Lightbulb, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Diseño & Branding",
    description:
      "Identidades visuales que trascienden. Creamos marcas que conectan emocionalmente con tu audiencia y se destacan en un mundo saturado.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.15)",
    tag: "Branding / UI / UX",
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Aplicaciones y sitios web de alto rendimiento construidos con las tecnologías más avanzadas del mercado. Velocidad, escalabilidad y elegancia.",
    color: "from-violet-400 to-purple-600",
    glow: "rgba(167,139,250,0.15)",
    tag: "Next.js / React / Node",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description:
      "Estrategias data-driven que convierten visitantes en clientes. SEO, SEM, redes sociales y contenido optimizado para resultados reales.",
    color: "from-fuchsia-400 to-pink-600",
    glow: "rgba(244,114,182,0.15)",
    tag: "SEO / SEM / Social",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Estratégica",
    description:
      "Acompañamos tu transformación digital de principio a fin. Análisis, planificación y ejecución con visión de futuro y enfoque en resultados.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.15)",
    tag: "Strategy / Growth",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 overflow-hidden bg-[#050510]">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(34,211,238,0.06), transparent)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            ¿Qué hacemos?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un ecosistema completo de soluciones digitales diseñadas para llevar
            tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={item}
                className="glass-card rounded-2xl p-8 group cursor-pointer"
                style={{ boxShadow: `0 0 0 0 ${svc.glow}` }}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-2 block">
                  {svc.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{svc.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
