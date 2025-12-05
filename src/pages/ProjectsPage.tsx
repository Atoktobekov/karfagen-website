import { useState } from 'react';
import { ArrowLeft, Star, Calendar, Users, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function ProjectsPage() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('Все');

    const categories = ['Все', 'Финансы', 'Здоровье', 'Образование', 'E-commerce', 'Доставка', 'Социальные'];

    const projects = [
        {
            id: 1,
            title: 'FinTech Pro',
            category: 'Финансы',
            description: 'Мобильное приложение для управления финансами с AI-советником и автоматической категоризацией расходов',
            fullDescription: 'Комплексное решение для личных финансов с машинным обучением, анализом трат и инвестиционными рекомендациями',
            rating: 4.8,
            downloads: '100K+',
            year: '2024',
            team: '8 человек',
            duration: '6 месяцев',
            image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NDc0NDIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['React Native', 'Node.js', 'TensorFlow', 'PostgreSQL']
        },
        {
            id: 2,
            title: 'HealthTracker',
            category: 'Здоровье',
            description: 'Комплексное приложение для мониторинга здоровья и фитнеса с интеграцией носимых устройств',
            fullDescription: 'Персональный помощник здоровья с трекингом активности, питания, сна и медицинских показателей',
            rating: 4.9,
            downloads: '250K+',
            year: '2024',
            team: '10 человек',
            duration: '8 месяцев',
            image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0ODY3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit']
        },
        {
            id: 3,
            title: 'EduSpace',
            category: 'Образование',
            description: 'Платформа для онлайн-обучения с интерактивными курсами и геймификацией',
            fullDescription: 'Образовательная платформа с видеокурсами, тестами, сертификатами и системой достижений',
            rating: 4.7,
            downloads: '500K+',
            year: '2023',
            team: '12 человек',
            duration: '10 месяцев',
            image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0Nzc2OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['React Native', 'AWS', 'GraphQL', 'MongoDB']
        },
        {
            id: 4,
            title: 'ShopMate',
            category: 'E-commerce',
            description: 'Современное приложение для онлайн-шопинга с AR-примеркой и персонализированными рекомендациями',
            fullDescription: 'Инновационный e-commerce с дополненной реальностью, AI-стилистом и удобной системой оплаты',
            rating: 4.6,
            downloads: '300K+',
            year: '2024',
            team: '9 человек',
            duration: '7 месяцев',
            image: 'https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGFwcHxlbnwxfHx8fDE3NjQ5MDk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['Swift', 'Kotlin', 'ARKit', 'Stripe']
        },
        {
            id: 5,
            title: 'QuickFood',
            category: 'Доставка',
            description: 'Приложение для доставки еды с отслеживанием заказа в реальном времени',
            fullDescription: 'Сервис доставки еды с большим выбором ресторанов, быстрой доставкой и программой лояльности',
            rating: 4.5,
            downloads: '450K+',
            year: '2023',
            team: '11 человек',
            duration: '9 месяцев',
            image: 'https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY0ODYyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['React Native', 'Node.js', 'Socket.io', 'Maps API']
        },
        {
            id: 6,
            title: 'ConnectHub',
            category: 'Социальные',
            description: 'Социальная сеть для профессионалов с нетворкингом и поиском работы',
            fullDescription: 'Платформа для профессионального общения, обмена опытом и карьерного роста',
            rating: 4.4,
            downloads: '200K+',
            year: '2024',
            team: '15 человек',
            duration: '12 месяцев',
            image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NDc0NDIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['Flutter', 'Django', 'Redis', 'WebRTC']
        },
        {
            id: 7,
            title: 'TravelMate',
            category: 'Путешествия',
            description: 'Приложение для планирования путешествий с бронированием и маршрутами',
            fullDescription: 'Полный сервис для путешественников: билеты, отели, экскурсии и персональные маршруты',
            rating: 4.7,
            downloads: '180K+',
            year: '2023',
            team: '7 человек',
            duration: '8 месяцев',
            image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0ODY3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['React Native', 'Express', 'Amadeus API', 'Mapbox']
        },
        {
            id: 8,
            title: 'CryptoWallet',
            category: 'Финансы',
            description: 'Безопасный кошелек для криптовалют с биржевой торговлей',
            fullDescription: 'Мультивалютный крипто-кошелек с обменом, стейкингом и DeFi интеграцией',
            rating: 4.6,
            downloads: '150K+',
            year: '2024',
            team: '10 человек',
            duration: '9 месяцев',
            image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0Nzc2OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['Swift', 'Kotlin', 'Blockchain', 'Web3.js']
        },
        {
            id: 9,
            title: 'MindfulMe',
            category: 'Здоровье',
            description: 'Приложение для медитации и ментального здоровья',
            fullDescription: 'Персональный коуч по медитации с программами снижения стресса и улучшения сна',
            rating: 4.8,
            downloads: '220K+',
            year: '2023',
            team: '6 человек',
            duration: '5 месяцев',
            image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NDc0NDIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['Flutter', 'Firebase', 'Audio SDK', 'ML Kit']
        }
    ];

    const filteredProjects = activeCategory === 'Все'
        ? projects
        : projects.filter(p => p.category === activeCategory);

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

                <div className="max-w-[1920px] mx-auto px-20 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-6 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                            <span className="text-[#C48A52]">Наши работы</span>
                        </div>
                        <h1 className="text-6xl text-white mb-6">
                            Портфолио <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">проектов</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            Более 150 успешных проектов для клиентов по всему миру. Каждый проект — это история успеха и инноваций.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-lg transition-all ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white shadow-lg shadow-[#C48A52]/30'
                                        : 'bg-[#3d4a61] text-white/70 hover:bg-[#3d4a61]/80 hover:text-white border border-[#C48A52]/20'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32">
                <div className="max-w-[1920px] mx-auto px-20">
                    <div className="grid grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-2xl border border-[#C48A52]/20 overflow-hidden hover:border-[#C48A52]/50 transition-all hover:transform hover:-translate-y-2"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F3B50] to-transparent"></div>

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4 px-4 py-2 bg-[#C48A52]/90 backdrop-blur-sm rounded-lg">
                                        <span className="text-white text-sm">{project.category}</span>
                                    </div>

                                    {/* Year badge */}
                                    <div className="absolute top-4 right-4 px-4 py-2 bg-[#2F3B50]/90 backdrop-blur-sm rounded-lg border border-[#C48A52]/30">
                                        <span className="text-white text-sm">{project.year}</span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl text-white mb-3">{project.title}</h3>
                                    <p className="text-white/70 mb-6 line-clamp-2">{project.description}</p>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-5 h-5 text-[#FF9E76] fill-[#FF9E76]" />
                                                <span className="text-white">{project.rating}</span>
                                            </div>
                                            <div className="text-[#C48A52]">{project.downloads}</div>
                                        </div>

                                        <div className="flex items-center gap-6 text-sm text-white/60">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                <span>{project.team}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.duration}</span>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full text-xs text-[#C48A52]"
                                                >
                          {tech}
                        </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-3 py-1 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full text-xs text-[#C48A52]">
                          +{project.technologies.length - 3}
                        </span>
                                            )}
                                        </div>
                                    </div>

                                    <button className="group/btn w-full py-3 border-2 border-[#C48A52] text-[#C48A52] rounded-lg hover:bg-[#C48A52] hover:text-white transition-all flex items-center justify-center gap-2">
                                        Подробнее
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-white/60 text-xl">Проектов в этой категории пока нет</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
