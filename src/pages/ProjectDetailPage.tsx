import { ArrowLeft, Star, Calendar, Users, Download, CheckCircle2, TrendingUp, Target, Zap, Award, Smartphone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate, useParams } from 'react-router-dom';
import manasImg from '@/assets/img/yemekhane_leather.png';
import askaImg from '@/assets/img/aska_yemekhane.png';

// Данные проектов (в реальном приложении это должно быть из API или глобального стейта)
const projectsData = [
  {
    id: 1,
    title: 'Manas Yemekhane',
    category: 'Еда',
    description: 'Мобильное приложение для быстрого просмотра меню в столовой университета Манас',
    fullDescription: 'Приложение, дающее быстрый и удобный доступ к актуальному меню в столовой. В будущем планируется добавление рейтинга блюд и страницы для каждого блюда. Также возможно будет добавление каталога буфета.',
    rating: 4.8,
    downloads: '100K+',
    year: '2025',
    team: '1 человек',
    duration: '3 недели',
    image: askaImg,
    technologies: ['Flutter', 'Dart', 'Firebase', 'Hive_ce', 'Node.js'],
    client: 'Университет Манас',
    challenge: 'Создать интуитивное приложение для быстрого и простого доступа к меню без необходимости запускать браузер и переходить на сайт.',
    solution: 'Мы разработали мобильное приложение, которое позволяет быстро узнать актуальное меню в столовой и может работать даже без интернета.',
    results: [
      { metric: '100K+', label: 'Скачиваний за первый месяц' },
      { metric: '4.8', label: 'Рейтинг в App Store' },
      { metric: '85%', label: 'Активных пользователей' },
      { metric: '75%', label: 'Сокращение времени для просмотра меню' }
    ],
    features: [
      'Получение свежих данных через API',
      'Кэширование данных для работы без интернета',
      'Автоматическое обновление через сервер',
      'Приятный дизайн с анимациями',
      'Логирование всех действий приложения через Talker'
    ],
    timeline: [
      { phase: 'Исследование', duration: '2 недели', description: 'Анализ задачи и пользовательских потребностей' },
      { phase: 'Дизайн', duration: '1 неделя', description: 'Создание UX/UI и прототипирование' },
      { phase: 'Разработка', duration: '3 недели', description: 'Backend, Frontend и модели данных' },
      { phase: 'Тестирование', duration: '2 недели', description: 'QA, тестирование безопасности' },
      { phase: 'Запуск', duration: '2 недели', description: 'Деплой и мониторинг' }
    ]
  },
  {
    id: 2,
    title: 'HealthTracker',
    category: 'Здоровье',
    description: 'Комплексное приложение для мониторинга здоровья и фитнеса с интеграцией носимых устройств',
    fullDescription: 'Персональный помощник здоровья с трекингом активности, питания, сна и медицинских показателей. Приложение синхронизируется с носимыми устройствами и предоставляет детальную аналитику здоровья.',
    rating: 4.9,
    downloads: '250K+',
    year: '2024',
    team: '10 человек',
    duration: '8 месяцев',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0ODY3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'ML Kit', 'Cloud Functions'],
    client: 'Стартап в сфере здравоохранения',
    challenge: 'Разработать комплексное решение для мониторинга здоровья с интеграцией различных носимых устройств',
    solution: 'Создали кроссплатформенное приложение с универсальными API для интеграции с любыми фитнес-трекерами и умными часами',
    results: [
      { metric: '250K+', label: 'Активных пользователей' },
      { metric: '4.9', label: 'Средний рейтинг' },
      { metric: '92%', label: 'Удержание пользователей' },
      { metric: '50+', label: 'Поддерживаемых устройств' }
    ],
    features: [
      'Синхронизация с Apple Watch, Fitbit, Garmin',
      'Трекинг активности, калорий, сна и пульса',
      'Персональные планы тренировок',
      'Дневник питания с базой продуктов',
      'Медицинские напоминания и журнал',
      'Социальные челленджи и достижения'
    ],
    timeline: [
      { phase: 'Исследование', duration: '3 недели', description: 'Изучение рынка носимых устройств' },
      { phase: 'Дизайн', duration: '5 недель', description: 'UX для здоровья и фитнеса' },
      { phase: 'Разработка', duration: '16 недель', description: 'Интеграция с устройствами' },
      { phase: 'Тестирование', duration: '5 недель', description: 'Тестирование на реальных устройствах' },
      { phase: 'Запуск', duration: '3 недели', description: 'Постепенный роллаут' }
    ]
  },
  {
    id: 3,
    title: 'EduSpace',
    category: 'Образование',
    description: 'Платформа для онлайн-обучения с интерактивными курсами и геймификацией',
    fullDescription: 'Образовательная платформа с видеокурсами, тестами, сертификатами и системой достижений. Позволяет создавать и продавать онлайн-курсы с полным набором инструментов для обучения.',
    rating: 4.7,
    downloads: '500K+',
    year: '2023',
    team: '12 человек',
    duration: '10 месяцев',
    image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0Nzc2OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React Native', 'AWS', 'GraphQL', 'MongoDB', 'S3', 'CloudFront'],
    client: 'Образовательная платформа',
    challenge: 'Создать масштабируемую платформу для онлайн-обучения с поддержкой видео и интерактивных элементов',
    solution: 'Разработали облачное решение с использованием AWS для стриминга видео и хранения контента с геймификацией для мотивации',
    results: [
      { metric: '500K+', label: 'Зарегистрированных студентов' },
      { metric: '10K+', label: 'Опубликованных курсов' },
      { metric: '4.7', label: 'Рейтинг платформы' },
      { metric: '2M+', label: 'Просмотров видео в месяц' }
    ],
    features: [
      'Создание и публикация видеокурсов',
      'Интерактивные тесты и задания',
      'Система сертификатов и достижений',
      'Геймификация с очками и лидербордами',
      'Форумы и обсуждения для студентов',
      'Аналитика прогресса обучения'
    ],
    timeline: [
      { phase: 'Исследование', duration: '4 недели', description: 'Анализ конкурентов и потребностей' },
      { phase: 'Дизайн', duration: '6 недель', description: 'Дизайн системы обучения' },
      { phase: 'Разработка', duration: '20 недель', description: 'Платформа и видео-инфраструктура' },
      { phase: 'Тестирование', duration: '6 недель', description: 'Нагрузочное тестирование' },
      { phase: 'Запуск', duration: '4 недели', description: 'Миграция контента и запуск' }
    ]
  }
];

export function ProjectDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Находим проект по ID
  const project = projectsData.find(p => p.id === Number(id));

  // Если проект не найден, показываем заглушку
  if (!project) {
    return (
      <div className="min-h-screen bg-[#2F3B50] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Проект не найден</h1>
          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-3 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-lg transition-all"
          >
            Вернуться к проектам
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2F3B50]">
      {/* Header */}
      <header className="bg-[#2F3B50]/95 backdrop-blur-sm border-b border-[#C48A52]/20 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-20 py-6">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-3 text-white/80 hover:text-[#C48A52] transition-colors group"
          >
            <div className="w-10 h-10 bg-[#C48A52]/20 rounded-lg flex items-center justify-center group-hover:bg-[#C48A52]/30 transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-lg">Вернуться к проектам</span>
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

        <div className="max-w-[1920px] mx-auto px-20 relative z-10">
          {/* Title and Meta */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                <span className="text-[#C48A52]">{project.category}</span>
              </div>
              <div className="px-6 py-2 bg-[#2F3B50]/50 border border-[#C48A52]/30 rounded-full">
                <span className="text-white">{project.year}</span>
              </div>
            </div>
            
            <h1 className="text-6xl text-white mb-6">
              {project.title}
            </h1>
            <p className="text-2xl text-white/70 max-w-4xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/20">
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-6 h-6 text-[#FF9E76] fill-[#FF9E76]" />
                <span className="text-3xl text-white">{project.rating}</span>
              </div>
              <p className="text-white/60">Рейтинг приложения</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/20">
              <div className="flex items-center gap-3 mb-2">
                <Download className="w-6 h-6 text-[#C48A52]" />
                <span className="text-3xl text-white">{project.downloads}</span>
              </div>
              <p className="text-white/60">Скачиваний</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/20">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-[#C48A52]" />
                <span className="text-3xl text-white">{project.team}</span>
              </div>
              <p className="text-white/60">Команда проекта</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/20">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-[#C48A52]" />
                <span className="text-3xl text-white">{project.duration}</span>
              </div>
              <p className="text-white/60">Время разработки</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-3xl border border-[#C48A52]/20">
              <ImageWithFallback 
                src={project.image}
                alt={project.title}
                className="w-full h-[600px] object-contain rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#C48A52] rounded-lg transform rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#FF9E76] to-[#C48A52] rounded-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-32 bg-[#252f42]">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-10 rounded-2xl border border-[#C48A52]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#C48A52]" />
              </div>
              <h3 className="text-3xl text-white mb-4">Задача</h3>
              <p className="text-white/70 text-lg leading-relaxed">{project.challenge}</p>
              <div className="mt-6 pt-6 border-t border-[#C48A52]/20">
                <p className="text-white/60">Клиент: <span className="text-white">{project.client}</span></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-10 rounded-2xl border border-[#C48A52]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-[#FF9E76]" />
              </div>
              <h3 className="text-3xl text-white mb-4">Решение</h3>
              <p className="text-white/70 text-lg leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-32">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                <span className="text-[#C48A52]">О проекте</span>
              </div>
              <h2 className="text-5xl text-white mb-6">
                Подробное <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">описание</span>
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-12 rounded-2xl border border-[#C48A52]/20">
              <p className="text-white/80 text-xl leading-relaxed mb-8">
                {project.fullDescription}
              </p>
              
              {/* Screenshots placeholder */}
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative group">
                    <ImageWithFallback 
                      src={manasImg}
                      alt={`Screenshot ${i}`}
                      className="w-full h-80 object-contain rounded-xl border border-[#C48A52]/20 group-hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-[#252f42]">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Возможности</span>
            </div>
            <h2 className="text-5xl text-white mb-6">
              Ключевые <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">функции</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/20"
              >
                <CheckCircle2 className="w-6 h-6 text-[#C48A52] flex-shrink-0 mt-1" />
                <p className="text-white/80 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-32">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Технологии</span>
            </div>
            <h2 className="text-5xl text-white mb-6">
              Стек <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">технологий</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-8 py-4 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-xl border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all hover:-translate-y-1"
              >
                <span className="text-white text-lg">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-[#252f42]">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Процесс</span>
            </div>
            <h2 className="text-5xl text-white mb-6">
              Этапы <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">разработки</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C48A52] via-[#FF9E76] to-[#C48A52] transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {project.timeline.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-2xl border border-[#C48A52]/20">
                      <div className="text-[#C48A52] mb-2">{step.duration}</div>
                      <h3 className="text-2xl text-white mb-2">{step.phase}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#C48A52] to-[#FF9E76] rounded-full border-4 border-[#252f42]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52] to-[#FF9E76] rounded-full animate-ping opacity-20"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32">
        <div className="max-w-[1920px] mx-auto px-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
              <span className="text-[#C48A52]">Результаты</span>
            </div>
            <h2 className="text-5xl text-white mb-6">
              Достигнутые <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">показатели</span>
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div 
                key={index}
                className="text-center bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-10 rounded-2xl border border-[#C48A52]/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-[#C48A52]" />
                </div>
                <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76] mb-3">
                  {result.metric}
                </div>
                <p className="text-white/70">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#252f42]">
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
                <span className="text-[#C48A52]">Начните свой проект</span>
              </div>
              <h2 className="text-5xl text-white mb-6">
                Готовы создать что-то <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">выдающееся</span>?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">
                Давайте обсудим ваш проект и создадим приложение, которое превзойдет ожидания
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                  className="px-12 py-4 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-xl hover:shadow-[#C48A52]/40 transition-all inline-flex items-center gap-3"
                >
                  <Smartphone className="w-5 h-5" />
                  Обсудить проект
                </button>
                <button 
                  onClick={() => navigate('/projects')}
                  className="px-12 py-4 bg-white/5 text-white border border-[#C48A52]/30 rounded-lg hover:bg-white/10 hover:border-[#C48A52]/50 transition-all inline-flex items-center gap-3"
                >
                  <Award className="w-5 h-5" />
                  Другие проекты
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
