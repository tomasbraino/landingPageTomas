import React from 'react';
import Link from 'next/link';
import { 
    Workflow, Cpu, Zap, Server, Database, Globe, FileText, 
    ArrowRight, CheckCircle2, DollarSign, MessageSquare 
} from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            icon: Workflow,
            title: '1. E2E Automation Frameworks',
            desc: 'Diseño e implemento arquitecturas completas de automatización usando Playwright y Selenium. Configuramos suites rápidas, robustas y paralelizadas.',
            details: [
                'Scripting en TypeScript, JavaScript, Python o Java.',
                'Soporte multiplataforma (Web y Apps Móviles con Appium).',
                'Estrategias de esperas implícitas dinámicas para evitar flaky tests.',
                'Reportes automáticos enriquecidos con capturas de pantalla y grabaciones de vídeo.'
            ],
            color: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/5'
        },
        {
            icon: Cpu,
            title: '2. AI & LLM Evaluation / Safety',
            desc: 'Aseguramos la fiabilidad, coherencia y seguridad de tus flujos de IA. Validamos LLMs y agentes autónomos frente a entradas maliciosas y salidas inválidas.',
            details: [
                'Pruebas contra inyección de prompts (Prompt Injection Shielding).',
                'Validación sistemática de respuestas con frameworks de evaluación (Ragas, TruLens).',
                'Pruebas de sesgo, consistencia semántica y detección de alucinaciones.',
                'Modelado de tests ad-hoc simulando interacciones conversacionales.'
            ],
            color: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/5'
        },
        {
            icon: Zap,
            title: '3. Performance & Load Engineering',
            desc: 'Sometemos tus servidores y bases de datos a escenarios extremos de tráfico. Identificamos el punto de quiebre de tu software antes de ir a producción.',
            details: [
                'Pruebas de carga, estrés, picos y resistencia con k6 y JMeter.',
                'Simulación de miles de usuarios concurrentes de forma distribuida.',
                'Análisis de tiempos de respuesta, tasa de error y fugas de memoria.',
                'Monitoreo de recursos del servidor (CPU, RAM, cuellos de botella de SQL).'
            ],
            color: 'text-purple-400 border-purple-500/20 bg-purple-950/5'
        },
        {
            icon: Server,
            title: '4. CI/CD Quality Gate Integration',
            desc: 'Configuramos tus pipelines de DevOps para que las suites de prueba actúen como un filtro de calidad infranqueable antes de cada despliegue.',
            details: [
                'Integración nativa con GitHub Actions, Jenkins, GitLab CI y Azure DevOps.',
                'Estrategias de re-ejecución automática en caso de fallos de red o flaky tests.',
                'Alertas instantáneas y reportes directamente integrados en Slack o Microsoft Teams.',
                'Optimización de caché para descargar dependencias a alta velocidad.'
            ],
            color: 'text-indigo-400 border-indigo-500/20 bg-indigo-950/5'
        },
        {
            icon: Database,
            title: '5. API Contract Verification & Testing',
            desc: 'Garantizamos que el frontend y el backend se comuniquen perfectamente. Validamos los esquemas y respuestas de tus endpoints REST/GraphQL.',
            details: [
                'Monitoreo y pruebas automatizadas con Postman e integraciones en CI (Newman).',
                'Verificación de esquemas JSON y códigos de estado HTTP.',
                'Muestreo y mocking de servicios externos para aislar dependencias.',
                'Pruebas de base de datos relacionales (SQL) para validar integraciones de datos.'
            ],
            color: 'text-yellow-400 border-yellow-500/20 bg-yellow-950/5'
        },
        {
            icon: Globe,
            title: '6. Desarrollo Web con Testing Integrado',
            desc: 'Codifico tu sitio web o aplicación web modular con excelentes prácticas de desarrollo y un esquema de testing nativo que previene regresiones.',
            details: [
                'Desarrollo frontend en React y Next.js con Tailwind CSS moderno.',
                'Cooptación de componentes interactivos y estructuras web accesibles y amigables con SEO.',
                'Código cubierto por tests unitarios (Vitest/Jest) y pruebas de integración (Playwright).',
                'Estructura de enrutamiento limpia y carga ultra rápida.'
            ],
            color: 'text-blue-400 border-blue-500/20 bg-blue-950/5'
        },
        {
            icon: FileText,
            title: '7. Manual QA & Planes de Prueba',
            desc: 'Estructuro el aseguramiento de calidad desde la fase de requerimientos. Diseñamos planes de prueba detallados para cubrir lo que el código no puede ver.',
            details: [
                'Diseño de Test Plans exhaustivos alineados con los objetivos de tu negocio.',
                'Ejecución rigurosa de Smoke Tests (Pruebas de Humo) en deploys de staging.',
                'Ciclos completos de Regresión manual antes de liberaciones críticas.',
                'Pruebas exploratorias (Ad-hoc) enfocadas en la usabilidad y experiencia de usuario.'
            ],
            color: 'text-red-400 border-red-500/20 bg-red-950/5'
        }
    ];

    const pricingTiers = [
        {
            name: 'QA Audit / Consultoría',
            price: 'Desde $499',
            desc: 'Ideal para evaluar tu suite de testing actual, detectar vulnerabilidades de calidad y estructurar una hoja de ruta de automatización.',
            features: [
                'Análisis de estabilidad en tests actuales',
                'Reporte detallado de cuellos de botella',
                'Propuesta de arquitectura y herramientas',
                'Sesión de consultoría en vivo (2 horas)'
            ],
            cta: 'Agendar Auditoría'
        },
        {
            name: 'QA Automation Suite',
            price: 'Mensual / Por Sprint',
            desc: 'Desarrollo continuo de tu suite de automatización y mantenimiento de tests. QA dedicado a tu velocidad de desarrollo.',
            features: [
                'Framework desde cero (Playwright/Selenium)',
                'Integración completa en tu CI/CD',
                'Planes de prueba manual y automatizado',
                'Soporte a regresiones críticas y Flaky Tests'
            ],
            cta: 'Cotizar Proyecto'
        },
        {
            name: 'Desarrollo Web Completamente Testeado',
            price: 'Bajo Presupuesto',
            desc: 'Desarrollo web a la medida de tu startup. Diseño web premium optimizado para conversión, velocidad y con testing nativo incluido.',
            features: [
                'Landing page o web app en Next.js',
                'Optimización SEO y diseño responsivo',
                'Tests unitarios y E2E integrados',
                'Configuración del hosting y Vercel'
            ],
            cta: 'Solicitar Presupuesto'
        }
    ];

    return (
        <main className="bg-slate-950 min-h-screen pt-32 pb-24 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(6,182,212,0.02),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto space-y-24">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                        Servicios
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Qué Hago por tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Software.</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Explora mis soluciones técnicas. Garantizo la estabilidad de tu plataforma mediante ingeniería de calidad moderna y desarrollo sólido.
                    </p>
                </div>

                {/* Services list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={i} 
                                className={`border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 ${service.color}`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg md:text-xl">{service.title}</h3>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="space-y-2.5">
                                    {service.details.map((detail, j) => (
                                        <div key={j} className="flex items-start gap-2 text-xs text-slate-500">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pricing / Estimates Tiers */}
                <div className="space-y-12 pt-16 border-t border-slate-900">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl font-bold text-white">Presupuestos & Planes</h2>
                        <p className="text-slate-400 text-sm">
                            Estructuras flexibles adaptadas a las necesidades y tamaño de tu equipo tecnológico.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, i) => (
                            <div 
                                key={i} 
                                className="bg-slate-900/20 border border-slate-900 hover:border-slate-800 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300"
                            >
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{tier.name}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">{tier.desc}</p>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <DollarSign className="w-5 h-5 text-emerald-400" />
                                        <span className="text-white text-3xl font-bold font-mono tracking-tight">{tier.price.replace('Desde $', '').replace('Bajo ', '').replace('Mensual / ', '')}</span>
                                        <span className="text-slate-500 text-xs font-mono">{tier.price.includes('Desde') ? 'Base' : tier.price.includes('Mensual') ? 'Por Sprint' : 'Fijo'}</span>
                                    </div>
                                    <ul className="space-y-3 border-t border-slate-800/60 pt-6">
                                        {tier.features.map((feat, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-slate-400">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <Link 
                                        href="/contact" 
                                        className="w-full py-3 bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        {tier.cta}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
