import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {Services} from './components/Services';
import {Features} from './components/Features';
import {Portfolio} from './components/Portfolio';
import {Footer} from './components/Footer';
import {ContactForm} from './components/ContactForm';
import {useState, useEffect} from 'react';

export default function App() {
    const [contactFormOpen, setContactFormOpen] = useState(false);

    useEffect(() => {
        const handleOpenContactForm = () => setContactFormOpen(true);
        window.addEventListener('openContactForm', handleOpenContactForm);
        return () => window.removeEventListener('openContactForm', handleOpenContactForm);
    }, []);

    return (
        <div className="min-h-screen bg-[#2F3B50]">
            <Header/>
            <Hero/>
            <Services/>
            <Features/>
            <Portfolio/>
            <Footer/>
            <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen}/>
        </div>
    );
}
