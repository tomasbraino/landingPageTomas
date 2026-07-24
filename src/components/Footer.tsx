import React from 'react';
import Link from 'next/link';
import { Terminal, Github, Linkedin, Mail, CheckCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 px-6 relative overflow-hidden">
            {/* Background Accent glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-mono font-bold text-white text-lg">
                            <div className="p-1.5 bg-emerald-950 border border-emerald-500/25 rounded-md">
                                <Terminal className="w-4 h-4 text-emerald-400" />
                            </div>
                            <span>Tomas<span className="text-emerald-400">.</span>QA</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Ingeniería de calidad, automatización robusta y desarrollo web de alta performance para startups y empresas exigentes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4 font-mono">Navegación</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/" className="hover:text-emerald-400 transition-colors">Inicio</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-emerald-400 transition-colors">Sobre Mí</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-emerald-400 transition-colors">Servicios</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4 font-mono">Conectar</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a 
                                    href="mailto:tomas@example.com" 
                                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    tomas@example.com
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub Profile
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn Profile
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* QA System Status (Green blink, matching theme) */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4 font-mono">Estado de QA</h4>
                        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-mono font-medium">Pipeline: Activo</span>
                            </div>
                            <div className="flex items-start gap-2 text-slate-400 text-xs">
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>142 tests automáticos pasados recientemente en producción.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
                    <p>© {new Date().getFullYear()} Tomas Brainovich. Todos los derechos reservados.</p>
                    <p>Hecho con Next.js & Tailwind CSS v4</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
