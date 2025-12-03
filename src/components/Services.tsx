import { Smartphone, TabletSmartphone, AppWindow, Palette, Code, Rocket } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'iOS разработка',
      description: 'Создаем нативные приложения для iPhone и iPad с безупречным пользовательским опытом'
    },
    {
      icon: TabletSmartphone,
      title: 'Android разработка',
      description: 'Разрабатываем производительные и стабильные приложения для всех Android устройств'
    },
    {
      icon: AppWindow,
      title: 'Кроссплатформенные решения',
      description: 'Используем React Native и Flutter для создания приложений на обеих платформах'
    },
    {
      icon: Palette,
      title: 'UI/UX дизайн',
      description: 'Проектируем интуитивные интерфейсы, которые пользователи полюбят с первого взгляда'
    },
    {
      icon: Code,
      title: 'Backend разработка',
      description: 'Строим надежную серверную инфраструктуру для ваших мобильных приложений'
    },
    {
      icon: Rocket,
      title: 'Поддержка и развитие',
      description: 'Обеспечиваем техническую поддержку и постоянное улучшение вашего продукта'
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      {/* Ancient pattern divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C48A52] to-transparent"></div>
      
      <div className="max-w-[1920px] mx-auto px-20">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
            <span className="text-[#C48A52]">Наши услуги</span>
          </div>
          <h2 className="text-5xl text-white mb-6">
            Что мы <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">создаем</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Полный цикл разработки мобильных приложений от идеи до запуска и поддержки
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-2xl border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all hover:transform hover:-translate-y-2"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#C48A52]/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#C48A52]" />
                  </div>
                  
                  <h3 className="text-2xl text-white mb-4">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
