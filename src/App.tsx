import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
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
        <BrowserRouter>
            <div className="min-h-screen bg-[#2F3B50]">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Routes>
                <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
            </div>
        </BrowserRouter>
    );
}
