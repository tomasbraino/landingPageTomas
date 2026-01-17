import React from 'react';
import { Cpu, Zap, Search, Workflow, LineChart, ShieldAlert } from 'lucide-react';

const ServicesBento = () => {
    return (
        <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Encabezado de Sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
                        Capabilities
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ingeniería de Calidad Integral
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Dejamos atrás el testing manual obsoleto. Implementamos frameworks de automatización inteligente y estrategias de validación para sistemas complejos y modelos de IA.
                    </p>
                </div>

                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: Automation (Grande - Ocupa 2 columnas) */}
                    <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-900/20 transition-colors">
                            <Workflow className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">End-to-End Automation Frameworks</h4>
                        <p className="text-slate-400 mb-4">
                            Arquitectura de pruebas robusta con <strong>Playwright</strong> o <strong>Selenium</strong>. Creamos suites de regresión que se ejecutan en paralelo, reduciendo el tiempo de feedback de horas a minutos.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-slate-500 font-mono">
                            <li className="flex items-center gap-2">✔ Self-healing Tests</li>
                            <li className="flex items-center gap-2">✔ API Integration</li>
                            <li className="flex items-center gap-2">✔ Mobile Testing</li>
                            <li className="flex items-center gap-2">✔ Dockerized Env</li>
                        </ul>
                    </div>

                    {/* Card 2: AI Testing (Vertical) */}
                    <div className="md:row-span-2 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900/20 transition-colors">
                            <Cpu className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">AI & LLM Reliability</h4>
                        <p className="text-slate-400 mb-6 text-sm">
                            Validación especializada para sistemas basados en Inteligencia Artificial. Aseguramos que tus agentes de IA sean precisos y éticos.
                        </p>
                        <div className="space-y-3">
                            <div className="bg-slate-950/50 p-3 rounded border border-slate-800 text-sm text-slate-300">
                                <span className="text-blue-400 font-mono text-xs block mb-1">EVAL 01</span>
                                Detección de Alucinaciones
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded border border-slate-800 text-sm text-slate-300">
                                <span className="text-blue-400 font-mono text-xs block mb-1">EVAL 02</span>
                                Bias & Fairness Testing
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded border border-slate-800 text-sm text-slate-300">
                                <span className="text-blue-400 font-mono text-xs block mb-1">EVAL 03</span>
                                Prompt Injection Security
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Performance */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-900/20 transition-colors">
                            <Zap className="w-6 h-6 text-purple-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Performance Engineering</h4>
                        <p className="text-slate-400 text-sm">
                            Pruebas de carga y estrés con <strong>k6</strong>. Detectamos cuellos de botella antes del Black Friday.
                        </p>
                    </div>

                    {/* Card 4: QA Ops / Consulting */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-900/20 transition-colors">
                            <LineChart className="w-6 h-6 text-orange-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">QA Strategy & Ops</h4>
                        <p className="text-slate-400 text-sm">
                            Auditoría de procesos. Transformamos equipos de "Clickers Manuales" en "Engineers".
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesBento;