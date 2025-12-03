import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2F3B50]">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Footer />
    </div>
  );
}
