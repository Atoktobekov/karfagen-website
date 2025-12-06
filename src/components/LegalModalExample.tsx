import { useState } from 'react';
import { LegalModal } from './LegalModal';
import { PrivacyPolicyContent } from './PrivacyPolicy';
import { TermsOfServiceContent } from './TermsOfService';
import { Shield, FileText } from 'lucide-react';

/**
 * Пример использования LegalModal компонента
 * Этот компонент можно добавить на любую страницу
 */
export function LegalModalExample() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <div className="flex gap-4">
      {/* Кнопка для открытия Политики конфиденциальности */}
      <button
        onClick={() => setPrivacyOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-[#C48A52]/20 text-white rounded-lg border border-[#C48A52]/30 hover:bg-[#C48A52]/30 transition-all"
      >
        <Shield className="w-5 h-5" />
        Политика конфиденциальности
      </button>

      {/* Кнопка для открытия Условий использования */}
      <button
        onClick={() => setTermsOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-[#FF9E76]/20 text-white rounded-lg border border-[#FF9E76]/30 hover:bg-[#FF9E76]/30 transition-all"
      >
        <FileText className="w-5 h-5" />
        Условия использования
      </button>

      {/* Модальные окна */}
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
    </div>
  );
}
