import { ArrowLeft, Smartphone, TabletSmartphone, AppWindow, Palette, Code, Rocket, CheckCircle2, Users, Clock, Award, Zap, Shield, TrendingUp, LightbulbIcon, FileText, PenTool, TestTube, Sparkles, MonitorSmartphone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function ServicesPage() {
    const navigate = useNavigate();

    const mainServices = [
        {
            icon: Smartphone,
            title: 'iOS разработка',
            description: 'Создаем нативные приложения для экосистемы Apple',
            details: [
                'Разработка на Swift и SwiftUI',
                'Оптимизация под все устройства Apple',
                'Интеграция с сервисами Apple',
                'Публикация в App Store',
                'Соответствие Human Interface Guidelines'
            ],
            color: '#C48A52'
        },
        {
            icon: TabletSmartphone,
            title: 'Android разработка',
            description: 'Производительные приложения для Android-устройств',
            details: [
                'Разработка на Kotlin и Java',
                'Material Design 3',
                'Оптимизация для разных версий Android',
                'Публикация в Google Play',
                'Адаптация под различные экраны'
            ],
            color: '#FF9E76'
        },
        {
            icon: AppWindow,
            title: 'Кроссплатформенная разработка',
            description: 'Единая кодовая база для iOS и Android',
            details: [
                'React Native для производительных приложений',
                'Flutter для красивых интерфейсов',
                'Общий код для двух платформ',
                'Быстрая разработка и меньшие затраты',
                'Нативная производительность'
            ],
            color: '#C48A52'
        },
        {
            icon: Palette,
            title: 'UI/UX дизайн',
            description: 'Интерфейсы, которые любят пользователи',
            details: [
                'Исследование пользователей и конкурентов',
                'Прототипирование и тестирование',
                'Создание дизайн-системы',
                'Адаптивные макеты для всех экранов',
                'Анимации и микроинтеракции'
            ],
            color: '#FF9E76'
        },
        {
            icon: Code,
            title: 'Backend разработка',
            description: 'Надежная серверная инфраструктура',
            details: [
                'REST API и GraphQL',
                'Node.js, Python, Go разработка',
                'Базы данных и кэширование',
                'Аутентификация и безопасность',
                'Масштабируемая архитектура'
            ],
            color: '#C48A52'
        },
        {
            icon: Rocket,
            title: 'Поддержка и развитие',
            description: 'Постоянное улучшение вашего продукта',
            details: [
                'Мониторинг и исправление ошибок',
                'Обновления для новых версий ОС',
                'Добавление новых функций',
                'Оптимизация производительности',
                'Техническая поддержка 24/7'
            ],
            color: '#FF9E76'
        }
    ];

    const workProcess = [
        {
            number: '01',
            title: 'Исследование',
            description: 'Изучаем ваш бизнес, целевую аудиторию и конкурентов',
            icon: LightbulbIcon
        },
        {
            number: '02',
            title: 'Планирование',
            description: 'Определяем функционал, технологии и сроки разработки',
            icon: FileText
        },
        {
            number: '03',
            title: 'Дизайн',
            description: 'Создаем прототипы и визуальный дизайн приложения',
            icon: PenTool
        },
        {
            number: '04',
            title: 'Разработка',
            description: 'Пишем чистый, масштабируемый и производительный код',
            icon: Code
        },
        {
            number: '05',
            title: 'Тестирование',
            description: 'Тщательно проверяем все функции и исправляем баги',
            icon: TestTube
        },
        {
            number: '06',
            title: 'Запуск',
            description: 'Публикуем приложение в App Store и Google Play',
            icon: Rocket
        }
    ];

    const technologies = [
        { name: 'Flutter', category: 'Mobile' },
        { name: 'Swift', category: 'iOS' },
        { name: 'Kotlin', category: 'Android' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Python', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Firebase', category: 'Backend' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'Figma', category: 'Design' },
        { name: 'Git', category: 'Tools' }
    ];

    const benefits = [
        {
            icon: Award,
            title: 'Опыт и экспертиза',
            description: '8+ лет на рынке и более 150 успешных проектов'
        },
        {
            icon: Users,
            title: 'Команда профессионалов',
            description: '30+ специалистов с опытом в ведущих компаниях'
        },
        {
            icon: Clock,
            title: 'Точные сроки',
            description: 'Соблюдаем дедлайны и держим вас в курсе на каждом этапе'
        },
        {
            icon: Shield,
            title: 'Гарантия качества',
            description: 'Тщательное тестирование и гарантийная поддержка'
        },
        {
            icon: Zap,
            title: 'Современные технологии',
            description: 'Используем проверенный стек для надежных решений'
        },
        {
            icon: TrendingUp,
            title: 'Развитие продукта',
            description: 'Помогаем масштабировать и улучшать ваше приложение'
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

                {/* Decorative Elements */}
                <div className="absolute left-0 top-1/4 w-2 h-96 bg-gradient-to-b from-[#C48A52]/30 to-transparent"></div>
                <div className="absolute right-0 top-1/3 w-2 h-96 bg-gradient-to-b from-[#FF9E76]/30 to-transparent"></div>

                <div className="max-w-[1920px] mx-auto px-20 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-6 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                            <span className="text-[#C48A52]">Наши услуги</span>
                        </div>
                        <h1 className="text-6xl text-white mb-6">
                            Полный цикл разработки <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">мобильных приложений</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                            От идеи до успешного запуска в App Store и Google Play. Как древний Карфаген строил торговые пути между континентами,
                            так и мы создаем цифровые мосты между вашим бизнесом и миллионами пользователей
                        </p>
                    </div>

                    {/* Main Image */}
                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-3xl border border-[#C48A52]/20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjUwMjc0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Mobile App Development"
                                className="w-full h-[500px] object-cover rounded-2xl"
                            />
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#C48A52] rounded-lg transform rotate-12"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#FF9E76] to-[#C48A52] rounded-lg transform -rotate-12"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-32 bg-[#252f42]">
                <div className="max-w-[1920px] mx-auto px-20">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                            <span className="text-[#C48A52]">Что мы предлагаем</span>
                        </div>
                        <h2 className="text-5xl text-white mb-6">
                            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">сервисы</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {mainServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-10 rounded-2xl border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all"
                                >
                                    <div className="flex gap-8">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="w-20 h-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                                                style={{
                                                    background: `linear-gradient(135deg, ${service.color}33 0%, ${service.color}1a 100%)`
                                                }}
                                            >
                                                <Icon className="w-10 h-10" style={{ color: service.color }} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-3xl text-white mb-3">{service.title}</h3>
                                            <p className="text-white/70 mb-6 text-lg">{service.description}</p>
                                            <ul className="space-y-3">
                                                {service.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-white/60">
                                                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Work Process */}
            <section className="py-32">
                <div className="max-w-[1920px] mx-auto px-20">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                            <span className="text-[#C48A52]">Как мы работаем</span>
                        </div>
                        <h2 className="text-5xl text-white mb-6">
                            Процесс <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">разработки</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Структурированный подход от первой встречи до запуска приложения
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {workProcess.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-2xl border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all group"
                                >
                                    {/* Number badge */}
                                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#C48A52] to-[#FF9E76] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        <span className="text-white text-xl">{step.number}</span>
                                    </div>

                                    <div className="mt-6">
                                        <div className="w-14 h-14 bg-[#C48A52]/20 rounded-lg flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-[#C48A52]" />
                                        </div>
                                        <h3 className="text-2xl text-white mb-3">{step.title}</h3>
                                        <p className="text-white/70">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-32 bg-[#252f42]">
                <div className="max-w-[1920px] mx-auto px-20">
                    <div className="grid grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                                <span className="text-[#C48A52]">Технологии</span>
                            </div>
                            <h2 className="text-5xl text-white mb-6">
                                Современный <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">стек</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-8 leading-relaxed">
                                Используем проверенные и надежные технологии для создания производительных
                                мобильных приложений, которые работают быстро и стабильно на всех устройствах
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-lg border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all"
                                    >
                                        <span className="text-white">{tech.name}</span>
                                        <span className="text-[#C48A52] text-sm ml-2">• {tech.category}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C48A52]/10 to-[#FF9E76]/10 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-3xl border border-[#C48A52]/20">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDk5MDk3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Technology Workspace"
                                    className="w-full h-[500px] object-cover rounded-2xl"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#FF9E76] opacity-30 transform rotate-45"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-32">
                <div className="max-w-[1920px] mx-auto px-20">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                            <span className="text-[#C48A52]">Почему мы</span>
                        </div>
                        <h2 className="text-5xl text-white mb-6">
                            Преимущества работы с <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">Karfagen</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-2xl border border-[#C48A52]/20 hover:border-[#C48A52]/50 transition-all hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8 text-[#C48A52]" />
                                    </div>
                                    <h3 className="text-2xl text-white mb-3">{benefit.title}</h3>
                                    <p className="text-white/70">{benefit.description}</p>
                                </div>
                            );
                        })}
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
                                <span className="text-[#C48A52]">Начните сейчас</span>
                            </div>
                            <h2 className="text-5xl text-white mb-6">
                                Готовы создать мобильное <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">приложение</span>?
                            </h2>
                            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">
                                Давайте обсудим ваш проект. Мы предложим оптимальное решение и просчитаем сроки разработки
                            </p>
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                                    className="px-12 py-4 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-xl hover:shadow-[#C48A52]/40 transition-all inline-flex items-center gap-3"
                                >
                                    <MonitorSmartphone className="w-5 h-5" />
                                    Обсудить проект
                                </button>
                                <button
                                    onClick={() => navigate('/projects')}
                                    className="px-12 py-4 bg-white/5 text-white border border-[#C48A52]/30 rounded-lg hover:bg-white/10 hover:border-[#C48A52]/50 transition-all inline-flex items-center gap-3"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Посмотреть проекты
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
