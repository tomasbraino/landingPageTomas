import React from 'react';
import { Cpu, Zap, Search, Workflow, LineChart, ShieldAlert, Globe, FileText, Database } from 'lucide-react';

const ServicesBento = () => {
    return (
        <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="services-bento">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Encabezado de Sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3 animate-fade-in">
                        Capabilities & Services
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Soluciones Tecnológicas & Aseguramiento de Calidad
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Soluciones frontend robustas y estrategias de QA punta a punta. Integramos automatización avanzada, pruebas manuales exhaustivas, y desarrollo web con testing nativo.
                    </p>
                </div>

                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: E2E Automation (Grande - Ocupa 2 columnas) */}
                    <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-950/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-900/20 transition-colors">
                            <Workflow className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">End-to-End Automation</h4>
                        <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                            Diseño y arquitectura de frameworks de pruebas estables usando <strong>Playwright</strong> y <strong>Selenium</strong>. Reducimos los tiempos de ejecución mediante ejecuciones paralelas en contenedores y minimizamos falsos positivos con algoritmos de autocuración.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-xs text-slate-500 font-mono">
                            <li className="flex items-center gap-2">✔ Playwright & Selenium</li>
                            <li className="flex items-center gap-2">✔ Mobile (Appium/Web)</li>
                            <li className="flex items-center gap-2">✔ Ejecución en Paralelo</li>
                            <li className="flex items-center gap-2">✔ Autocuración de Localizadores</li>
                        </ul>
                    </div>

                    {/* Card 2: AI & LLM Reliability (Vertical - Ocupa 2 filas) */}
                    <div className="md:row-span-2 bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-950/10 transition-all duration-300 group flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-900/20 transition-colors">
                                <Cpu className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">AI & LLM Evaluation</h4>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                Pruebas avanzadas para agentes de Inteligencia Artificial y LLMs. Validamos precisión en respuestas, detectamos alucinaciones y aplicamos pruebas de inyección de prompts.
                            </p>
                        </div>
                        <div className="space-y-2 mt-4">
                            <div className="bg-slate-950/50 p-3 rounded border border-slate-800/80 text-xs text-slate-300">
                                <span className="text-cyan-400 font-mono text-[10px] block mb-1">EVAL-SYS 01</span>
                                Detección de Alucinaciones & Bias
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded border border-slate-800/80 text-xs text-slate-300">
                                <span className="text-cyan-400 font-mono text-[10px] block mb-1">EVAL-SYS 02</span>
                                Robustez ante Prompt Injections
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded border border-slate-800/80 text-xs text-slate-300">
                                <span className="text-cyan-400 font-mono text-[10px] block mb-1">EVAL-SYS 03</span>
                                Monitoreo y Guardrails
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Tested Web Development (Grande - Ocupa 2 columnas) */}
                    <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-950/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900/20 transition-colors">
                            <Globe className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">Desarrollo Web & Testing Nativo</h4>
                        <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                            Creación de aplicaciones web modernas, rápidas y seguras utilizando <strong>React</strong>, <strong>Next.js</strong> y <strong>Tailwind CSS</strong>. Todo código es entregado con cobertura de pruebas unitarias e integración de extremo a extremo desde el primer día para garantizar estabilidad absoluta.
                        </p>
                        <div className="flex gap-4 font-mono text-xs text-slate-500">
                            <span>Stack: Next.js + React + Tailwind</span>
                            <span>|</span>
                            <span>Tests: Playwright + Vitest</span>
                        </div>
                    </div>

                    {/* Card 4: Performance Engineering */}
                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-950/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-900/20 transition-colors">
                            <Zap className="w-6 h-6 text-purple-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Performance & Load</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Pruebas de estrés y volumen de usuarios usando <strong>k6</strong> y <strong>JMeter</strong>. Localizamos fugas de memoria, cuellos de botella en la red y optimizamos el consumo de recursos de base de datos.
                        </p>
                    </div>

                    {/* Card 5: API & Database testing */}
                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-950/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-900/20 transition-colors">
                            <Database className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">API & SQL Testing</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Verificación de APIs con <strong>Postman</strong> y scripts integrados. Pruebas de base de datos relacionales con consultas <strong>SQL</strong> para validar la consistencia e integridad de la persistencia de datos.
                        </p>
                    </div>

                    {/* Card 6: Manual QA, Test Planning & Coverage */}
                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-950/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/20 transition-colors">
                            <FileText className="w-6 h-6 text-red-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Manual QA & Test Plans</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Diseño de estrategias de QA, especificación de matrices de cobertura de negocio, y ejecución de pruebas manuales exhaustivas: <strong>Smoke tests</strong>, <strong>Regresiones</strong> continuas y pruebas de usabilidad <strong>Ad-hoc</strong>.
                        </p>
                    </div>

                    {/* Card 7: CI/CD Quality Gates (Grande - Ocupa 2 columnas) */}
                    <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-950/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-900/20 transition-colors">
                            <LineChart className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">CI/CD Quality Gates (DevOps QA)</h4>
                        <p className="text-slate-400 text-sm leading-relaxed animate-pulse-slow">
                            Integración continua de pruebas automáticas en pipelines de <strong>Jenkins</strong> y <strong>GitHub Actions</strong>. Bloqueamos despliegues defectuosos y enviamos reportes de calidad detallados al canal de Slack de los desarrolladores de forma inmediata.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesBento;