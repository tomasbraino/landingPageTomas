import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Tomas Brainovich - QA Engineer & Web Developer',
    description: 'QA Automation, Estrategia de Calidad y Desarrollo de Software Web Robusto.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen flex flex-col justify-between`}>
                <Navbar />
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
