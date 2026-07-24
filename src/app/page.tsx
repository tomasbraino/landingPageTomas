import React from 'react';
import HeroQA from '@/components/HeroQA';
import ServicesBento from '@/components/ServicesBento';
import { ShieldCheck, Layers, Cpu, CheckCircle2, Play, Users, Clock, Award } from 'lucide-react';

export default function Home() {
    const workflowSteps = [
        {
            num: '01',
            title: 'Auditoría & Diagnóstico',
            desc: 'Analizo tu codebase, localizo falsos positivos (flaky tests), cuellos de botella en la suite actual y defino riesgos de regresión en UI/APIs.',
            color: 'from-emerald-500/20 to-emerald-500/5',
            text: 'text-emerald-400',
        },
        {
            num: '02',
            title: 'Plan de Pruebas & Estrategia',
            desc: 'Diseño un plan que combina automatización (Playwright/Selenium) y testing manual riguroso (Smoke y Regresión), optimizando el ROI del aseguramiento de calidad.',
            color: 'from-cyan-500/20 to-cyan-500/5',
            text: 'text-cyan-400',
        },
        {
            num: '03',
            title: 'Desarrollo de Frameworks & Tests',
            desc: 'Codifico tests auto-curables y rápidos en TS/JS o Python. Paralelamente estructuro planes de prueba manuales (Ad-hoc) para flujos no automatizables.',
            color: 'from-blue-500/20 to-blue-500/5',
            text: 'text-blue-400',
        },
        {
            num: '04',
            title: 'CI/CD & DevOps Gates',
            desc: 'Integro las pruebas con Jenkins o GitHub Actions. Todo pull request corre tests automáticos; si falla, el deployment se bloquea automáticamente.',
            color: 'from-purple-500/20 to-purple-500/5',
            text: 'text-purple-400',
        },
        {
            num: '05',
            title: 'Estabilidad & Monitoreo',
            desc: 'Monitoreo reportes históricos de ejecución, analizo velocidad de feedback y mantengo la suite limpia de falsas alarmas conforme el producto evoluciona.',
            color: 'from-pink-500/20 to-pink-500/5',
            text: 'text-pink-400',
        },
    ];

    const stats = [
        {
            value: '-80%',
            label: 'Tiempo en Regresiones',
            desc: 'De días a minutos mediante automatización paralela.',
            icon: Clock,
            color: 'text-emerald-400',
        },
        {
            value: '99.8%',
            label: 'Estabilidad de Tests',
            desc: 'Cero alertas falsas gracias a localizadores auto-curables.',
            icon: ShieldCheck,
            color: 'text-cyan-400',
        },
        {
            value: '100+',
            label: 'Deploys Mensuales Seguros',
            desc: 'Lanzamientos directos a producción sin regresiones manuales de pánico.',
            icon: CheckCircle2,
            color: 'text-blue-400',
        },
        {
            value: '45 hrs',
            label: 'Ahorro / Dev al mes',
            desc: 'El equipo de desarrollo se enfoca en programar características, no en validar.',
            icon: Users,
            color: 'text-purple-400',
        },
    ];

    return (
        <main className="bg-slate-950 min-h-screen">
            {/* HERO SECTION */}
            <HeroQA />

            {/* SERVICES SECTION */}
            <ServicesBento />

            {/* STATS SECTION */}
            <section className="bg-slate-950 py-20 px-6 border-y border-slate-900 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.02),transparent_40%)] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div 
                                    key={i} 
                                    className="bg-slate-900/30 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`text-4xl font-extrabold tracking-tight ${stat.color}`}>
                                            {stat.value}
                                        </span>
                                        <Icon className={`w-5 h-5 ${stat.color} opacity-80`} />
                                    </div>
                                    <h4 className="text-white font-semibold text-sm mb-1">{stat.label}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">{stat.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WORKFLOW / "CÓMO TRABAJO" SECTION */}
            <section className="bg-slate-950 py-24 px-6 relative" id="workflow">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/2 [filter:blur(120px)] pointer-events-none rounded-full"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
                            Metodología QA Ops
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Mi Flujo de Trabajo
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            No arrojo tests a la pared para ver qué se pega. Sigo un proceso sistemático de calidad de software que asegura entregas estables y continuas.
                        </p>
                    </div>

                    {/* Timeline workflow items */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {workflowSteps.map((step, index) => (
                            <div 
                                key={index} 
                                className="relative flex flex-col bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-900 rounded-2xl p-6 hover:border-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 group"
                            >
                                {/* Step number */}
                                <div className="text-4xl font-extrabold font-mono mb-4 text-slate-800 group-hover:text-slate-700 transition-colors">
                                    {step.num}
                                </div>
                                <h4 className="text-white font-bold text-base mb-3 leading-snug">
                                    {step.title}
                                </h4>
                                <p className="text-slate-500 text-xs leading-relaxed flex-grow">
                                    {step.desc}
                                </p>

                                {/* Connective link bar for desktop */}
                                {index < 4 && (
                                    <div className="hidden lg:block absolute top-[44px] -right-[24px] w-[32px] h-[2px] bg-slate-800 z-20"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
                            <Layers className="w-4 h-4 text-emerald-400 animate-spin" />
                            Garantizando lanzamientos de producción sin pánico.
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}