import { ArrowLeft, Target, Users, Award, TrendingUp, Shield, Zap, Heart, Code2, Smartphone, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Как стены древнего Карфагена защищали город, так и наши решения защищают бизнес наших клиентов'
    },
    {
      icon: Zap,
      title: 'Инновации',
      description: 'Карфаген был центром инноваций своего времени. Мы продолжаем эту традицию в цифровую эпоху'
    },
    {
      icon: Heart,
      title: 'Качество',
      description: 'Карфагенские мастера славились качеством. Мы применяем этот же подход к каждой строке кода'
    },
    {
      icon: Users,
      title: 'Партнерство',
      description: 'Строим долгосрочные отношения, как торговые пути древнего Карфагена связывали континенты'
    }
  ];

  const team = [
    {
      name: 'Александр Иванов',
      role: 'Основатель & CEO',
      description: 'Визионер с 15-летним опытом в разработке',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NjQ4MTkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Мария Петрова',
      role: 'CTO',
      description: 'Технический лидер и архитектор решений',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NjQ4MTkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Дмитрий Смирнов',
      role: 'Lead Designer',
      description: 'Создает интерфейсы, которые любят пользователи',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NjQ4MTkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Елена Козлова',
      role: 'Head of Development',
      description: 'Руководит командой разработки мобильных приложений',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NjQ4MTkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const stats = [
    { value: '8+', label: 'Лет на рынке', icon: TrendingUp },
    { value: '150+', label: 'Завершенных проектов', icon: Award },
    { value: '50+', label: 'Довольных клиентов', icon: Users },
    { value: '30+', label: 'Специалистов в команде', icon: Code2 }
  ];

  const milestones = [
    {
      year: '2016',
      title: 'Основание компании',
      description: 'Начало пути с командой из 3 человек и большой мечтой изменить индустрию мобильной разработки'
    },
    {
      year: '2018',
      title: 'Первые 50 проектов',
      description: 'Расширение команды до 15 специалистов и выход на международный рынок'
    },
    {
      year: '2020',
      title: 'Открытие офиса',
      description: 'Новый офис в Москва-Сити и команда из 25 профессионалов'
    },
    {
      year: '2023',
      title: 'Лидер рынка',
      description: 'Более 150 проектов, 30+ специалистов и признание индустрии'
    },
    {
      year: '2025',
      title: 'Новые горизонты',
      description: 'Расширение в AI и Web3, инвестиции в R&D и обучение команды'
    }
  ];

  return (
    <div className="min-h-screen bg-[#2F3B50]">
      {/* Header */}
      <header className="bg-[#2F3B50]/95 backdrop-blur-sm border-b border-[#C48A52]/20 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-20 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-white/80 hover:text-[#C48A52] transition-colors group"
          >
            <div className="w-10 h-10 bg-[#C48A52]/20 rounded-lg flex items-center justify-center group-hover:bg-[#C48A52]/30 transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-lg">Вернуться на главную</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `repeating-linear-gradient(45deg, #C48A52 0px, #C48A52 2px, transparent 2px, transparent 20px),
                                  repeating-linear-gradient(-45deg, #C48A52 0px, #C48A52 2px, transparent 2px, transparent 20px)`
               }}>
          </div>
        </div>

        {/* Decorative Columns */}
        <div className="absolute left-0 top-1/4 w-2 h-96 bg-gradient-to-b from-[#C48A52]/30 to-transparent"></div>
        <div className="absolute right-0 top-1/3 w-2 h-96 bg-gradient-to-b from-[#FF9E76]/30 to-transparent"></div>

        <div className="max-w-[1920px] mx-auto px-20 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">О компании</span>
            </div>
            <h1 className="text-6xl text-white mb-6">
              Мы — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">Karfagen</span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Как древний Карфаген был центром торговли и инноваций Средиземноморья, 
              так и мы создаем цифровые империи, которые меняют мир мобильных технологий
            </p>
          </div>

          {/* Main Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-3xl border border-[#C48A52]/20">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2NDgyODExNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Karfagen Team"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#C48A52] rounded-lg transform rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#FF9E76] to-[#C48A52] rounded-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#252f42]">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-2xl border border-[#C48A52]/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#C48A52]" />
                  </div>
                  <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                <span className="text-[#C48A52]">Наша миссия</span>
              </div>
              <h2 className="text-5xl text-white mb-6">
                Строим цифровые <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">империи</span>
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Древний Карфаген был основан как торговая колония и вырос в могущественную империю, 
                которая изменила ход истории. Мы верим, что каждое мобильное приложение может стать 
                основой для нового успешного бизнеса.
              </p>
              <p className="text-xl text-white/70 leading-relaxed">
                Наша миссия — создавать инновационные мобильные решения, которые помогают нашим 
                клиентам достигать амбициозных целей и строить цифровые продукты мирового уровня.
              </p>
              
              <div className="flex gap-3 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#C48A52]/10 rounded-lg border border-[#C48A52]/30">
                  <Target className="w-5 h-5 text-[#C48A52]" />
                  <span className="text-white">Фокус на результате</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#FF9E76]/10 rounded-lg border border-[#FF9E76]/30">
                  <Sparkles className="w-5 h-5 text-[#FF9E76]" />
                  <span className="text-white">Инновационный подход</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52]/10 to-[#FF9E76]/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-3xl border border-[#C48A52]/20">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1603219950587-b4f3f7ee87e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDg3MzY5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Workspace"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#FF9E76] opacity-30 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#252f42]">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Наши ценности</span>
            </div>
            <h2 className="text-5xl text-white mb-6">
              Принципы, которыми мы <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">руководствуемся</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-2xl border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-[#C48A52]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl text-white mb-3">{value.title}</h3>
                      <p className="text-white/70 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Наша история</span>
            </div>
            <h2 className="text-5xl text-white mb-6">
              Путь от стартапа до <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">лидера рынка</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C48A52] via-[#FF9E76] to-[#C48A52] transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-8 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-2xl border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all">
                      <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76] mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl text-white mb-3">{milestone.title}</h3>
                      <p className="text-white/70 max-w-md">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#C48A52] to-[#FF9E76] rounded-full border-4 border-[#2F3B50]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52] to-[#FF9E76] rounded-full animate-ping opacity-20"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#252f42]">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Наша команда</span>
            </div>
            <h2 className="text-5xl text-white mb-6">
              Люди, создающие <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">будущее</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Профессионалы с мировым опытом, объединенные общей целью — создавать лучшие мобильные приложения
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-2xl border border-[#C48A52]/20 overflow-hidden hover:border-[#C48A52]/50 transition-all hover:transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F3B50] via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white mb-1">{member.name}</h3>
                  <div className="text-[#C48A52] mb-3">{member.role}</div>
                  <p className="text-white/70 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-3xl border border-[#C48A52]/30 p-20 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" 
                   style={{
                     backgroundImage: `radial-gradient(circle, #C48A52 1px, transparent 1px)`,
                     backgroundSize: '30px 30px'
                   }}>
              </div>
            </div>

            <div className="relative z-10">
              <div className="inline-block mb-6 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                <span className="text-[#C48A52]">Присоединяйтесь к нам</span>
              </div>
              <h2 className="text-5xl text-white mb-6">
                Готовы создать что-то <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">великое</span>?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">
                Давайте обсудим ваш проект и создадим мобильное приложение, которое изменит вашу индустрию
              </p>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                className="px-12 py-4 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-xl hover:shadow-[#C48A52]/40 transition-all inline-flex items-center gap-3"
              >
                <Smartphone className="w-5 h-5" />
                Начать проект
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
