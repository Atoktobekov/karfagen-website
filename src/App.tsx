import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
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
                </Routes>
                <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
            </div>
        </BrowserRouter>
    );
}
