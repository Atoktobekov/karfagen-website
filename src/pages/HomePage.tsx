import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { Portfolio } from '../components/Portfolio';
import { Footer } from '../components/Footer';

export function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Features />
            <Portfolio />
            <Footer />
        </>
    );
}
