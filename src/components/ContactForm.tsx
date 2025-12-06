import { useState } from 'react';
import { X, Send, User, Phone, MessageSquare, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_sm9wis3',
                'template_9wkg7uk',
                {
                    user_name: formData.name,
                    user_phone: formData.phone,
                    user_subject: formData.subject,
                    user_message: formData.message,
                },
                'E03nQJM-eKxUUa57O'
            );

            alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');

            setFormData({ name: '', phone: '', subject: '', message: '' });
            onOpenChange(false);
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка при отправке, попробуйте позже.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] border-2 border-[#C48A52]/30 text-white p-0 gap-0">
        <DialogHeader className="p-8 pb-6 border-b border-[#C48A52]/20">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl text-white flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#C48A52]" />
              </div>
              Связаться с нами
            </DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="w-10 h-10 rounded-lg bg-[#2F3B50]/50 hover:bg-[#C48A52]/20 transition-all flex items-center justify-center"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>
          </div>
          <p className="text-white/70 mt-3">
            Заполните форму и наш менеджер свяжется с вами в течение 24 часов
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white flex items-center gap-2">
                <User className="w-4 h-4 text-[#C48A52]" />
                От кого
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#2F3B50]/50 border-[#C48A52]/30 text-white placeholder:text-white/40 focus:border-[#C48A52] focus:ring-[#C48A52]/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C48A52]" />
                Номер телефона
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-[#2F3B50]/50 border-[#C48A52]/30 text-white placeholder:text-white/40 focus:border-[#C48A52] focus:ring-[#C48A52]/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#C48A52]" />
              Тема
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="О чем вы хотите поговорить?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="bg-[#2F3B50]/50 border-[#C48A52]/30 text-white placeholder:text-white/40 focus:border-[#C48A52] focus:ring-[#C48A52]/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Сообщение
            </Label>
            <Textarea
              id="message"
              placeholder="Расскажите подробнее о вашем проекте..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-[#2F3B50]/50 border-[#C48A52]/30 text-white placeholder:text-white/40 focus:border-[#C48A52] focus:ring-[#C48A52]/20 resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] hover:shadow-lg hover:shadow-[#C48A52]/30 text-white h-12 transition-all"
            >
              {isSubmitting ? (
                'Отправка...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Отправить заявку
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-2 border-[#C48A52]/50 text-[#C48A52] hover:bg-[#C48A52]/10 h-12"
            >
              Отмена
            </Button>
          </div>

          <div className="pt-4 border-t border-[#C48A52]/20">
            <p className="text-sm text-white/60 text-center">
              Отправляя форму, вы соглашаетесь с{' '}
              <a href="#" className="text-[#C48A52] hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </form>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#C48A52]/5 to-transparent rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#FF9E76]/5 to-transparent rounded-tr-full pointer-events-none"></div>
      </DialogContent>
    </Dialog>
  );
}
