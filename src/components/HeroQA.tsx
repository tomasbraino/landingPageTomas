// src/components/HeroQA.tsx
import React from 'react';
// Importamos los iconos que necesitamos
import { Terminal, CheckCircle, ArrowRight, Play, Server, ShieldCheck } from 'lucide-react';

const HeroQA = () => {
    return (
        // <section> es el contenedor principal. Equivalente al <body> de tu test
        // className="..." son los estilos Tailwind (bg-slate-950 = fondo oscuro)
        <section className="relative bg-slate-950 text-white overflow-hidden min-h-screen flex items-center" data-testid="hero-section">

            {/* FONDO: Efecto Grid (Puramente decorativo) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 pt-20 pb-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* --- COLUMNA IZQUIERDA: COPYWRITING --- */}
                    <div className="flex-1 text-center lg:text-left">

                        {/* Badge: Indicador de estado */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-mono mb-6 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Disponible para nuevos proyectos
                        </div>

                        {/* H1: Tu Propuesta de Valor */}
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 font-sans">
                            Tu Suite de Automatización no debería ser un <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Cuello de Botella.</span>
                        </h1>

                        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Ayudo a Startups y equipos de ingeniería a eliminar tests frágiles, reducir tiempos de regresión y garantizar despliegues seguros.
                            <span className="block mt-2 text-slate-300 font-medium">Estrategias de QA que escalan, no que se rompen con el CSS.</span>
                        </p>

                        {/* Botones de Acción (CTAs) */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                data-testid="cta-audit"
                                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 hover:scale-105"
                            >
                                Audita tu Estrategia QA
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <button
                                data-testid="cta-cases"
                                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:scale-105"
                            >
                                <Play className="w-4 h-4" />
                                Ver Casos de Estudio
                            </button>
                        </div>

                        {/* Tech stack (icons with text) */}
                        <div className="mt-10 pt-8 border-t border-slate-800">
                            <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">Herramientas & Stack</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-2 font-mono text-sm text-slate-300"><Terminal size={16} /> Playwright</div>
                                <div className="flex items-center gap-2 font-mono text-sm text-slate-300"><CheckCircle size={16} /> Selenium</div>
                                <div className="flex items-center gap-2 font-mono text-sm text-slate-300"><Server size={16} /> Jenkins and Azure DevOps for CI/CD</div>
                                <div className="flex items-center gap-2 font-mono text-sm text-slate-300"><ShieldCheck size={16} /> Security</div>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: DEMO TÉCNICA (TERMINAL) --- */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-xl perspective-1000 hidden lg:block">
                        <div className="relative bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden transform rotate-y-12 transition-transform hover:rotate-0 duration-700 group">

                            {/* Terminal header */}
                            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="ml-auto text-xs text-slate-400 font-mono">zsh — test-runner</div>
                            </div>

                            {/* Terminal body */}
                            <div className="p-6 font-mono text-sm space-y-2">
                                <div className="text-slate-400">$ npx playwright test</div>
                                <div className="text-yellow-400">⚠ Starting 142 tests across 3 shards...</div>

                                {/* Simulated processes */}
                                <div className="space-y-1 mt-4">
                                    <div className="flex items-center gap-2 text-emerald-400 animate-pulse">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Auth Module <span className="text-slate-500 ml-2">(240ms)</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400 animate-pulse delay-75">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Checkout Flow <span className="text-slate-500 ml-2">(850ms)</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400 animate-pulse delay-150">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Payment Gateway API <span className="text-slate-500 ml-2">(1.2s)</span></span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-800 text-emerald-300 font-bold">
                                    ✔ All tests passed (4.2s)
                                    <br />
                                    <span className="text-slate-400 font-normal">Deploying to production...</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating card (ROI) */}
                        <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl hidden sm:block animate-bounce-slow">
                            <div className="text-xs text-slate-400 mb-1">Ahorro en Regresión Manual</div>
                            <div className="text-2xl font-bold text-white">+45 Horas/mes</div>
                            <div className="text-xs text-emerald-400 flex items-center gap-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                                ROI Inmediato
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroQA;