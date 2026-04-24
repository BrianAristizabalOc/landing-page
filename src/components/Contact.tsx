"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="relative py-28 bg-[#07071a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Hablemos
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Estamos listos para escucharte. Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "hola@xcorp.co", color: "#22d3ee" },
              { icon: Phone, label: "Teléfono", value: "+57 300 000 0000", color: "#a78bfa" },
              { icon: MapPin, label: "Ubicación", value: "Bogotá, Colombia", color: "#f472b6" },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                  >
                    <Icon size={20} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              );
            })}

            <div className="pt-6">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px",
                  opacity: 0.6,
                }}
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-400">Te responderemos muy pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {["Nombre", "Email"].map((ph) => (
                    <div key={ph}>
                      <input
                        required
                        type={ph === "Email" ? "email" : "text"}
                        placeholder={ph}
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>
                <input
                  required
                  type="text"
                  placeholder="Asunto"
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/7 transition-all duration-200"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/7 transition-all duration-200 resize-none"
                />
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-all duration-300 glow-cyan"
                >
                  Enviar Mensaje
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
