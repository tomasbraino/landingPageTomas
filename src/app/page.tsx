
import HeroQA from '@/components/HeroQA';
import ServicesBento from '@/components/ServicesBento';


export default function Home() {
    return (
        <main className="bg-slate-950 min-h-screen">
            <HeroQA />
            <ServicesBento />
        </main>
    );
}