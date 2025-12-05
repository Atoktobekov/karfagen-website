import { Smartphone } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2F3B50]/95 backdrop-blur-sm border-b border-[#C48A52]/20">
      <div className="max-w-[1920px] mx-auto px-20 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C48A52] to-[#FF9E76] rounded-lg flex items-center justify-center transform rotate-45">
                <Smartphone className="w-6 h-6 text-[#2F3B50] -rotate-45" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF9E76] rounded-full"></div>
            </div>
            <span className="text-3xl text-white tracking-wider">KARFAGEN</span>
          </div>
          
          <nav className="flex items-center gap-12">
            <a href="#services" className="text-white/80 hover:text-[#C48A52] transition-colors">Услуги</a>
            <a href="#features" className="text-white/80 hover:text-[#C48A52] transition-colors">Преимущества</a>
            <a href="#portfolio" className="text-white/80 hover:text-[#C48A52] transition-colors">Портфолио</a>
            <a href="#contact" className="text-white/80 hover:text-[#C48A52] transition-colors">Контакты</a>
            <button
                onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                className="px-8 py-3 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-lg hover:shadow-[#C48A52]/30 transition-all">
              Связаться
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
