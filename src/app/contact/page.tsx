'use client';

import React, { useState } from 'react';
import { 
    Mail, Calendar, MessageSquare, ShieldCheck, 
    ChevronDown, ChevronUp, CheckCircle, AlertCircle 
} from 'lucide-react';

export default function ContactPage() {
    // Form States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [projectType, setProjectType] = useState('');
    const [message, setMessage] = useState('');
    
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // FAQ Accordion States
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: '¿Cómo manejas los tests inestables (flaky tests)?',
            a: 'Los flaky tests son el enemigo número uno del QA. Los combato utilizando selectores estables (preferiblemente text o test-ids), aplicando esperas dinámicas controladas por el estado del DOM en vez de esperas estáticas de tiempo, y aislando datos de prueba para asegurar que cada ejecución comience en un estado limpio.'
        },
        {
            q: '¿Qué herramientas de CI/CD soportas para integrar los tests?',
            a: 'Integro suites de prueba de forma nativa en Jenkins y GitHub Actions, pero también tengo experiencia configurando runners en GitLab CI, Bitbucket Pipelines y Azure DevOps. El objetivo es configurar compuertas de calidad (Quality Gates) que impidan que un despliegue falle en producción.'
        },
        {
            q: '¿Cuándo debería automatizar y cuándo hacer testing manual?',
            a: 'La automatización es ideal para flujos críticos repetitivos (regresiones, flujos de compra, login) y pruebas de carga. El testing manual es indispensable en fases tempranas del desarrollo (pruebas ad-hoc, exploratorias) o para validar usabilidad, diseño visual y accesibilidad compleja.'
        },
        {
            q: '¿Cómo se mide el ROI (Retorno de Inversión) en automatización?',
            a: 'Se calcula comparando el tiempo y costo de ejecutar una regresión manual completa frente al tiempo de ejecución automatizada en paralelo en la nube. Por lo general, una suite robusta ahorra más de 40 horas mensuales a los desarrolladores a partir del segundo mes.'
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const validateForm = () => {
        const tempErrors: { [key: string]: string } = {};
        if (!name.trim()) tempErrors.name = 'El nombre es obligatorio.';
        if (!email.trim()) {
            tempErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = 'El correo electrónico no es válido.';
        }
        if (!projectType) tempErrors.projectType = 'Por favor selecciona un tipo de servicio.';
        if (!message.trim()) tempErrors.message = 'El mensaje no puede estar vacío.';
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 1200);
    };

    return (
        <main className="bg-slate-950 min-h-screen pt-32 pb-24 px-6 relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto space-y-20 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                        Contacto
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Hablemos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Calidad & Código.</span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                        ¿Quieres auditar tu suite de pruebas actual, automatizar tus regresiones o construir una web con testing nativo? Escríbeme y diseñemos una estrategia.
                    </p>
                </div>

                {/* Form & Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Form Card */}
                    <div className="lg:col-span-7 bg-slate-900/30 border border-slate-900 rounded-2xl p-8 backdrop-blur-sm relative">
                        {submitted ? (
                            <div className="text-center py-12 space-y-6 animate-fade-in">
                                <div className="w-16 h-16 bg-emerald-950 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-white text-2xl font-bold">¡Mensaje Enviado!</h3>
                                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                                        Gracias por contactarme, {name}. Responderé a tu correo ({email}) en menos de 24 horas.
                                    </p>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-500">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    Payload verificado & tests pasados.
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 font-mono">Nombre</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                                        }}
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 rounded-lg px-4 py-3 text-white text-sm outline-none transition-all"
                                        placeholder="Ej. Tomas"
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.name}</p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 font-mono">Correo Electrónico</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                                        }}
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 rounded-lg px-4 py-3 text-white text-sm outline-none transition-all"
                                        placeholder="Ej. tomas@correo.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.email}</p>
                                    )}
                                </div>

                                {/* Project Type Selection */}
                                <div className="space-y-2">
                                    <label htmlFor="projectType" className="block text-sm font-semibold text-slate-300 font-mono">Servicio Requerido</label>
                                    <select 
                                        id="projectType"
                                        value={projectType}
                                        onChange={(e) => {
                                            setProjectType(e.target.value);
                                            if (errors.projectType) setErrors(prev => ({ ...prev, projectType: '' }));
                                        }}
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 rounded-lg px-4 py-3 text-slate-300 text-sm outline-none transition-all"
                                    >
                                        <option value="">Selecciona una opción...</option>
                                        <option value="automation">Automatización E2E (Playwright/Selenium)</option>
                                        <option value="webdev">Desarrollo Web con Testing Nativo</option>
                                        <option value="manual">Planes de Prueba & QA Manual</option>
                                        <option value="perf">Pruebas de Carga & Stress (k6)</option>
                                        <option value="ai">Validación de IA & LLMs</option>
                                        <option value="other">Otro servicio / Consulta general</option>
                                    </select>
                                    {errors.projectType && (
                                        <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.projectType}</p>
                                    )}
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 font-mono">Detalles del Proyecto</label>
                                    <textarea 
                                        id="message"
                                        rows={4}
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                                        }}
                                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 rounded-lg px-4 py-3 text-white text-sm outline-none transition-all resize-none"
                                        placeholder="Cuéntame sobre tu aplicación, el stack que usas y qué problemas de calidad o desarrollo quieres resolver..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 hover:scale-[1.01]"
                                >
                                    {submitting ? 'Enviando...' : 'Enviar Solicitud'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Calendly / Scheduling & Details */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Calendly / Quick Call CTA */}
                        <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-emerald-950 rounded-xl border border-emerald-500/25 text-emerald-400">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">¿Prefieres una llamada?</h3>
                                    <p className="text-slate-500 text-xs font-mono">Agendar sesión de 15 minutos</p>
                                </div>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Hablemos directamente. Agenda un espacio en mi calendario para discutir los cuellos de botella de tu suite de pruebas y evaluar posibles integraciones.
                            </p>
                            <button 
                                onClick={() => alert('Integración con Calendly iniciada exitosamente.')}
                                className="w-full py-3 bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold rounded-lg transition-all"
                            >
                                Agendar vía Calendly
                            </button>
                        </div>

                        {/* Quick Contact Details */}
                        <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-4 text-xs font-mono">
                            <h4 className="text-slate-300 font-semibold">Ubicación & Disponibilidad</h4>
                            <div className="space-y-2 text-slate-500">
                                <p>📍 Ubicación: Buenos Aires, Argentina (GMT-3)</p>
                                <p>💼 Disponibilidad: Freelance / Consultoría / Contractor</p>
                                <p>📧 Email directo: tomas@example.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* FAQ Section */}
                <div className="space-y-8 pt-12 border-t border-slate-900">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl font-bold text-white">Preguntas Frecuentes (QA FAQ)</h2>
                        <p className="text-slate-400 text-sm">
                            Respuestas rápidas sobre mi metodología de aseguramiento de calidad y cómo abordo los tests.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div 
                                    key={i} 
                                    className="bg-slate-900/20 border border-slate-900 hover:border-slate-800 rounded-xl transition-all"
                                >
                                    <button 
                                        onClick={() => toggleFaq(i)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left text-white font-medium hover:text-emerald-400 transition-colors"
                                    >
                                        <span className="text-sm font-sans">{faq.q}</span>
                                        {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-5 pt-1 text-slate-400 text-xs leading-relaxed border-t border-slate-900/60 animate-fade-in">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </main>
    );
}
