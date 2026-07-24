import React from 'react';
import Link from 'next/link';
import { Terminal, Shield, Award, Users, Download, ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutPage() {
    const techStack = [
        {
            category: 'Automatización & QA',
            tools: ['Playwright', 'Selenium', 'Appium', 'Cypress'],
            bg: 'bg-emerald-950/20 border-emerald-500/20',
            text: 'text-emerald-400',
        },
        {
            category: 'CI/CD & DevOps',
            tools: ['Jenkins', 'Github Actions', 'Docker', 'Gitlab CI'],
            bg: 'bg-cyan-950/20 border-cyan-500/20',
            text: 'text-cyan-400',
        },
        {
            category: 'Lenguajes',
            tools: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
            bg: 'bg-blue-950/20 border-blue-500/20',
            text: 'text-blue-400',
        },
        {
            category: 'Rendimiento & API',
            tools: ['k6', 'JMeter', 'Postman', 'RestAssured'],
            bg: 'bg-purple-950/20 border-purple-500/20',
            text: 'text-purple-400',
        },
        {
            category: 'Herramientas de IA & IDEs',
            tools: ['Cursor', 'Antigravity (DeepMind)', 'Devin (Cognition)', 'VS Code'],
            bg: 'bg-pink-950/20 border-pink-500/20',
            text: 'text-pink-400',
        },
    ];

    const principles = [
        {
            title: 'Cero Flaky Tests',
            desc: 'Un test inestable es peor que no tener tests; destruye la confianza. Busco que cada ejecución sea predecible, rápida y determinista.',
            icon: Shield,
        },
        {
            title: 'Velocidad como Prioridad',
            desc: 'Las pruebas no deben retrasar los lanzamientos. Diseñamos suites optimizadas y paralelizadas que dan feedback en minutos.',
            icon: Award,
        },
        {
            title: 'Empatía con el Desarrollador',
            desc: 'El QA no es un policía del código. Colaboro estrechamente con el equipo de desarrollo proveyendo reportes precisos y reproducciones locales sencillas.',
            icon: Users,
        },
    ];

    return (
        <main className="bg-slate-950 min-h-screen pt-32 pb-24 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto space-y-20 relative z-10">
                {/* Intro / Bio */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                        Sobre Mí
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        Hola, soy Tomas. Ayudo a equipos a construir software con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Calidad Garantizada.</span>
                    </h1>
                    <div className="text-slate-400 space-y-4 text-base md:text-lg leading-relaxed">
                        <p>
                            Soy un **QA Automation Engineer & Software Developer** apasionado por la estabilidad y el rendimiento de las aplicaciones. A lo largo de mi carrera, me he especializado en la transición de procesos de testing manuales manuales a arquitecturas de automatización robustas e integradas en pipelines de CI/CD.
                        </p>
                        <p>
                            Creo firmemente que el aseguramiento de calidad es un habilitador del negocio. Con tests rápidos y estables, los desarrolladores pueden desplegar múltiples veces al día con la confianza de que nada se romperá en el entorno de producción.
                        </p>
                        <p>
                            Recientemente he incorporado flujos de desarrollo asistido por **Inteligencia Artificial**, aprovechando herramientas avanzadas como **Cursor**, **Antigravity** y **Devin** para acelerar el desarrollo de frameworks de prueba, simulando escenarios complejos de usuario y validando implementaciones en tiempo récord.
                        </p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/20 hover:scale-105 animate-pulse-slow"
                        >
                            Trabajemos Juntos
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button
                            onClick={() => alert('¡Descarga de CV simulada exitosamente!')}
                            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 rounded-lg font-medium transition-all flex items-center gap-2 hover:scale-105"
                        >
                            <Download className="w-4 h-4" />
                            Descargar CV (PDF)
                        </button>
                    </div>
                </div>

                {/* Principles */}
                <div className="space-y-8 pt-8 border-t border-slate-900">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Filosofía de Trabajo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {principles.map((pr, i) => {
                            const Icon = pr.icon;
                            return (
                                <div key={i} className="bg-slate-900/20 border border-slate-900 rounded-xl p-6 space-y-4">
                                    <div className="w-10 h-10 bg-slate-800/80 rounded-lg flex items-center justify-center text-emerald-400">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-white font-semibold text-lg">{pr.title}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">{pr.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Detailed Tech Stack Grid */}
                <div className="space-y-8 pt-8 border-t border-slate-900">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Caja de Herramientas</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Este es el stack tecnológico que domino e implemento de forma activa en mis proyectos diarios para automatización, base de datos, análisis de carga, desarrollo e inteligencia artificial.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {techStack.map((tech, i) => (
                            <div key={i} className={`border rounded-xl p-6 ${tech.bg} transition-colors duration-300`}>
                                <h3 className="text-white font-mono font-semibold text-sm mb-4 tracking-wider uppercase">
                                    {tech.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.tools.map((tool, j) => (
                                        <span 
                                            key={j} 
                                            className="px-3 py-1 bg-slate-950/70 border border-slate-800 rounded-md text-xs text-slate-300 font-mono flex items-center gap-1.5"
                                        >
                                            <CheckCircle className={`w-3.5 h-3.5 ${tech.text}`} />
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
