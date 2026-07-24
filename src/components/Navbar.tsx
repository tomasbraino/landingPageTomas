'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre Mí', path: '/about' },
        { name: 'Servicios', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacto', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center gap-2 font-mono font-bold text-white text-lg tracking-tight group">
                        <div className="p-2 bg-emerald-950 border border-emerald-500/30 rounded-lg group-hover:border-emerald-400/60 transition-colors">
                            <Terminal className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <span>
                            Tomas<span className="text-emerald-400">.</span>QA
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((link) => {
                                const active = isActive(link.path);
                                return (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`relative text-sm font-medium transition-all py-2 ${
                                            active ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
                                        }`}
                                    >
                                        {link.name}
                                        {active && (
                                            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse"></span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA button */}
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 group hover:scale-105"
                        >
                            Auditar mi QA
                            <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation menu */}
            {isOpen && (
                <div className="md:hidden border-b border-slate-900 bg-slate-950/95 animate-fade-in">
                    <div className="px-4 pt-2 pb-6 space-y-3">
                        {navLinks.map((link) => {
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                                        active
                                            ? 'bg-emerald-950/40 text-emerald-400 border-l-4 border-emerald-500 pl-4'
                                            : 'text-slate-400 hover:text-white hover:bg-slate-900'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="pt-2 px-3">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20"
                            >
                                Auditar mi QA
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
