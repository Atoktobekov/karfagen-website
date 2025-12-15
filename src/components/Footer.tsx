import { Mail, Phone, MapPin, Smartphone, Github, Instagram, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LegalModal } from './LegalModal';
import { PrivacyPolicyContent } from './PrivacyPolicy';
import { TermsOfServiceContent } from './TermsOfService';

export function Footer() {
    const navigate = useNavigate();
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

  return (
      <>
    <footer id="contact" className="relative bg-[#252f42] pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C48A52] to-transparent"></div>
      
      {/* Ancient mosaic pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle, #C48A52 1px, transparent 1px)`,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
      
      <div className="max-w-[1920px] mx-auto px-20 relative z-10">
        <div className="grid grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C48A52] to-[#FF9E76] rounded-lg flex items-center justify-center transform rotate-45">
                  <Smartphone className="w-6 h-6 text-[#2F3B50] -rotate-45" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF9E76] rounded-full"></div>
              </div>
              <span className="text-2xl text-white tracking-wider">KARFAGEN</span>
            </div>
            <p className="text-white/70 mb-6">
              Строим цифровые империи для наших клиентов. Создаем мобильные приложения, которые изменяют мир.
            </p>
            <div className="flex gap-4">

              <a  href="https://github.com/Atoktobekov"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="w-10 h-10 bg-[#C48A52]/20 rounded-lg flex items-center justify-center hover:bg-[#C48A52]/40 transition-all">
                <Github className="w-5 h-5 text-[#C48A52]" />
              </a>

              <a href="https://t.me/KarfagenDev"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-[#C48A52]/20 rounded-lg flex items-center justify-center hover:bg-[#C48A52]/40 transition-all">
                <Send className="w-5 h-5 text-[#C48A52]" />
              </a>
              <a href="https://www.instagram.com/adi_toktobekov/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-[#C48A52]/20 rounded-lg flex items-center justify-center hover:bg-[#C48A52]/40 transition-all">
                <Instagram className="w-5 h-5 text-[#C48A52]" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">iOS разработка</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Android разработка</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Кроссплатформа</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">UI/UX дизайн</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Backend</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg mb-6">Компания</h4>
            <ul className="space-y-3">
               <li><button onClick={() => navigate('/about')} className="text-white/70 hover:text-[#C48A52] transition-colors">О нас</button></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Вакансии</a></li>

            {/*  <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Команда</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Карьера</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Блог</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#C48A52] transition-colors">Контакты</a></li>*/}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C48A52] flex-shrink-0 mt-1" />
                <a href="mailto:info@karfagen.dev" className="text-white/70 hover:text-[#C48A52] transition-colors">
                  adil_toktobekov@mail.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C48A52] flex-shrink-0 mt-1" />
                <a href="tel:+74951234567" className="text-white/70 hover:text-[#C48A52] transition-colors">
                  +996 776 123 666
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C48A52] flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  Бишкек, Байтик баатыра, 86
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#C48A52]/20">
          <div className="flex justify-between items-center">
            <p className="text-white/60">
              © 2025 Karfagen. Все права защищены.
            </p>
              <div className="flex gap-8">
                  <button
                      onClick={() => setPrivacyOpen(true)}
                      className="text-white/60 hover:text-[#C48A52] transition-colors"
                  >
                      Политика конфиденциальности
                  </button>
                  <button
                      onClick={() => setTermsOpen(true)}
                      className="text-white/60 hover:text-[#C48A52] transition-colors"
                  >
                      Условия использования
                  </button>
              </div>
          </div>
        </div>
      </div>
    </footer>

          {/* Legal Modals */}
          <LegalModal
              open={privacyOpen}
              onOpenChange={setPrivacyOpen}
              title="Политика конфиденциальности"
          >
              <PrivacyPolicyContent />
          </LegalModal>

          <LegalModal
              open={termsOpen}
              onOpenChange={setTermsOpen}
              title="Условия использования"
          >
              <TermsOfServiceContent />
          </LegalModal>

      </>
  );
}
