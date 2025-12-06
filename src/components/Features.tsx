import { Shield, Zap, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tableImg from "@/assets/img/table1.png";
import {Link} from "react-router-dom";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Как стены древнего Карфагена - наш код защищен и стабилен'
    },
    {
      icon: Zap,
      title: 'Скорость',
      description: 'Быстрая разработка без потери качества благодаря проверенным технологиям'
    },
    {
      icon: Users,
      title: 'Команда экспертов',
      description: 'Опытные разработчики, дизайнеры и менеджеры в одной команде'
    },
    {
      icon: TrendingUp,
      title: 'Масштабируемость',
      description: 'Создаем приложения, готовые к росту вашего бизнеса'
    }
  ];

  return (
    <section id="features" className="py-32 relative bg-[#252f42]">
      <div className="max-w-[1920px] mx-auto px-20">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52]/10 to-[#FF9E76]/10 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-3xl border border-[#C48A52]/20">
                <ImageWithFallback 
                  src={tableImg}
                  alt="Modern Interface"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              
              {/* Ancient geometric decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#FF9E76] opacity-30 transform rotate-45"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C48A52]/30 transform rotate-12"></div>
            </div>
          </div>
          
          <div>
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Почему мы</span>
            </div>
            
            <h2 className="text-5xl text-white mb-6">
              Наследие качества и <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">инноваций</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12">
              Мы объединяем проверенные временем принципы архитектуры с передовыми технологиями
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-6 p-6 bg-[#2F3B50]/50 rounded-xl border border-[#C48A52]/10 hover:border-[#C48A52]/30 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#C48A52]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
        <div className="text-center mt-12">
            <Link to="/about">
                <button className="px-12 py-4 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-xl hover:shadow-[#C48A52]/40 transition-all">
                    Подробнее о нас
                </button>
            </Link>
        </div>
    </section>
  );
}
