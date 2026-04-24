"use client";

import { Zap } from "lucide-react";

const links = {
  Servicios: ["Diseño & Branding", "Desarrollo Web", "Marketing Digital", "Consultoría"],
  Empresa: ["Nosotros", "Portafolio", "Blog", "Careers"],
  Legal: ["Privacidad", "Términos", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="bg-[#030308] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Zap size={16} className="text-slate-950 fill-slate-950" />
              </div>
              <span className="text-xl font-bold">
                X<span className="gradient-text">Corp</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Transformamos ideas en experiencias digitales extraordinarias. El futuro es ahora.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {["X", "in", "ig", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200 text-xs font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-500 text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} XCorp. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Hecho con ❤️ en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
