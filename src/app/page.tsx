import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* 1. Cambia el contenedor principal a modo oscuro para dar vibe de 'Ingeniería' */}
            <section className="bg-slate-950 text-white min-h-[90vh] flex items-center justify-center px-4">

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* COLUMNA TEXTO: Directo al grano */}
                    <div className="space-y-6">
                        {/* Badge pequeño arriba */}
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                            ● Disponible para Auditorías QA
                        </span>

                        {/* H1 modificado */}
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Tu software no debería <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                                romperse en producción.
                            </span>
                        </h1>

                        {/* Subtítulo ajustado */}
                        <p className="text-slate-400 text-lg max-w-xl">
                            Consultoría de QA Automation & Estrategia de Calidad.
                            Transformo procesos de testing lentos en pipelines de CI/CD fiables.
                        </p>

                        {/* Botones (Reutiliza tus clases de botones, solo cambia texto) */}
                        <div className="flex gap-4">
                            <Link href="#contacto" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition">
                                Auditar mi QA
                            </Link>
                            <Link href="#casos" className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg transition">
                                Ver Casos de Éxito
                            </Link>
                        </div>

                        {/* Stack Rápido (Iconos texto) */}
                        <div className="pt-6 border-t border-slate-800/50 text-sm text-slate-500 font-mono flex gap-4">
                            <span>[ Playwright ]</span>
                            <span>[ Cypress ]</span>
                            <span>[ K6 ]</span>
                        </div>
                    </div>

                    {/* COLUMNA VISUAL: La Terminal (Hecha con puro CSS para no buscar imágenes) */}
                    <div className="relative rounded-xl bg-slate-900 border border-slate-800 p-4 shadow-2xl font-mono text-sm overflow-hidden group">
                        {/* Barra superior estilo ventana */}
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-xs text-slate-500">test-runner — zsh</span>
                        </div>

                        {/* Contenido simulado */}
                        <div className="space-y-2 opacity-90">
                            <div className="text-slate-400">$ running regression suite...</div>
                            <div className="text-emerald-400">✔ Auth_Login_Success (200ms)</div>
                            <div className="text-emerald-400">✔ Payment_Process_Visa (850ms)</div>
                            <div className="text-emerald-400">✔ API_Inventory_Check (120ms)</div>
                            <div className="text-yellow-500 mt-2">⚠ Flaky test detected: Search_Filter</div>
                            <div className="text-blue-400 mt-2">→ Auto-healing initiated...</div>
                            <div className="text-emerald-400 font-bold">✔ Fixed. All tests passed.</div>
                        </div>

                        {/* Efecto de brillo al pasar mouse (opcional) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>

                </div>
            </section>
        </>
    );
}