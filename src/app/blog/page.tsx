'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export interface Post {
    id: number;
    title: string;
    slug: string;
    summary: string;
    date: string;
    category: string;
    readTime: string;
    author: string;
    tags: string[];
}

export const BLOG_POSTS: Post[] = [
    {
        id: 1,
        title: 'Por Qué Playwright está Reemplazando a Cypress',
        slug: 'por-que-playwright-esta-reemplazando-a-cypress',
        summary: 'Una comparativa detallada sobre velocidad de ejecución, soporte multipestaña nativo, y por qué los ingenieros prefieren la API de Playwright.',
        date: '2026-07-20',
        category: 'Automatización',
        readTime: '6 min de lectura',
        author: 'Tomas Brainovich',
        tags: ['Playwright', 'Cypress', 'E2E Testing']
    },
    {
        id: 2,
        title: 'Cómo Testear Agentes de IA y LLMs',
        slug: 'como-testear-agentes-de-inteligencia-artificial',
        summary: 'Guía técnica para validar respuestas semánticas en Modelos de Lenguaje, detectar alucinaciones y simular ataques de Prompt Injection en pruebas de regresión.',
        date: '2026-07-15',
        category: 'IA & Testing',
        readTime: '8 min de lectura',
        author: 'Tomas Brainovich',
        tags: ['AI Testing', 'LLM', 'Security']
    },
    {
        id: 3,
        title: 'Configurando Quality Gates en GitHub Actions',
        slug: 'configurando-quality-gates-en-github-actions',
        summary: 'Aprende a bloquear automáticamente despliegues inestables integrando tus tests de Playwright y reportes en Slack como parte de tu pipeline de CI/CD.',
        date: '2026-07-08',
        category: 'CI/CD',
        readTime: '5 min de lectura',
        author: 'Tomas Brainovich',
        tags: ['GitHub Actions', 'CI/CD', 'Quality Gates']
    },
    {
        id: 4,
        title: 'Pruebas de Carga en la Nube con k6',
        slug: 'pruebas-de-carga-en-la-nube-con-k6',
        summary: 'Cómo escribir scripts de rendimiento escalables, simular picos de usuarios virtuales concurrentes y detectar fallas de memoria en tus servidores.',
        date: '2026-06-28',
        category: 'Performance',
        readTime: '7 min de lectura',
        author: 'Tomas Brainovich',
        tags: ['k6', 'Performance', 'Stress Testing']
    }
];

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const categories = ['Todas', 'Automatización', 'IA & Testing', 'CI/CD', 'Performance'];

    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesSearch = 
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesCategory = 
            selectedCategory === 'Todas' || post.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="bg-slate-950 min-h-screen pt-32 pb-24 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                        Blog de Ingeniería
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        Artículos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Calidad & Performance.</span>
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
                        Comparto guías técnicas paso a paso, reflexiones y mejores prácticas sobre automatización de pruebas, rendimiento, DevOps e Inteligencia Artificial.
                    </p>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-b border-slate-900 pb-6">
                    {/* Categories Tabs */}
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start w-full sm:w-auto">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 text-xs font-semibold rounded-lg border font-mono transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-emerald-950 border-emerald-500/40 text-emerald-400'
                                        : 'bg-slate-900/50 border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Buscar artículos o tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-900 focus:border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-xs outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredPosts.map((post) => (
                            <article 
                                key={post.id}
                                className="bg-slate-900/20 border border-slate-900 hover:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="space-y-4">
                                    {/* Date & Read time */}
                                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-mono">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readTime}
                                        </span>
                                        <span className="px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-500/10">
                                            {post.category}
                                        </span>
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-white font-bold text-lg md:text-xl group-hover:text-emerald-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    {/* Summary */}
                                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                                        {post.summary}
                                    </p>
                                </div>

                                {/* Tags & Link */}
                                <div className="mt-6 pt-4 border-t border-slate-900/60 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-1.5">
                                        {post.tags.map((tag, j) => (
                                            <span 
                                                key={j} 
                                                className="px-2 py-0.5 bg-slate-950 border border-slate-900 rounded text-[9px] text-slate-400 font-mono"
                                            >
                                                #{tag.toLowerCase()}
                                            </span>
                                        ))}
                                    </div>
                                    <Link 
                                        href={`/blog/${post.slug}`}
                                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 shrink-0 group/link"
                                    >
                                        Leer más
                                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-900/10 border border-dashed border-slate-900 rounded-2xl">
                        <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-400 font-mono text-sm">No se encontraron artículos que coincidan con la búsqueda.</p>
                        <button 
                            onClick={() => { setSearchQuery(''); setSelectedCategory('Todas'); }}
                            className="mt-4 text-xs font-semibold text-emerald-400 hover:underline"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}

            </div>
        </main>
    );
}
