import { useState } from 'react';
import { ArrowLeft, Star, Calendar, Users, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import manasImg from '@/assets/img/yemekhane.png';
import cryptoImg from '@/assets/img/crypto.png';
import nowhereImg from '@/assets/img/nowhere.png';
import blueboundImg from '@/assets/img/bluebound.png';
import mathBlitzImg from '@/assets/img/mathBlitz.png';

const categoryAll = "Все";
const categoryFinances = "Финансы";
const categoryHealth = "Здоровье";
const categoryEducation = "Образование";
const categoryProductivity = "Продуктивность";
const categoryGames = "Игры";
const categoryFood = "Еда";
export function ProjectsPage() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('Все');

    const categories = [categoryAll, categoryFinances, categoryHealth, categoryEducation, categoryProductivity, categoryGames, categoryFood];

    const projects = [
        {
            id: 1,
            title: 'Manas Yemekhane',
            category: categoryFood,
            description: 'Мобильное приложение для быстрого просмотра меню в столовой университета Манас',
            fullDescription: 'Приложение, дающее быстрый и удобный доступ к актуальному меню в столовой. В будущем планируется добавление рейтинга блюд и страницы для каждого блюда',
            rating: 4.8,
            downloads: '100K+',
            year: '2025',
            team: '1 человек',
            duration: '3 недели',
            image: manasImg,
            technologies: ['Flutter', 'Dart', 'Provider', 'Hive_ce']
        },
        {
            id: 2,
            title: 'CryptoApp',
            category: categoryFinances,
            description: 'Приложение для мониторинга курсов криптовалют',
            fullDescription: 'Приложение, показывающее самые актуальные цены на криптовалюты. Есть локальное сохранение данных и работа без интернета',
            rating: 4.9,
            downloads: '250K+',
            year: '2025',
            team: '2 человека',
            duration: '1.5 месяца',
            image: cryptoImg,
            technologies: ['Flutter', 'Firebase', 'Hive_ce', 'Dart']
        },
        {
            id: 3,
            title: 'NowhereAwake',
            category: categoryGames,
            description: '2D игра в жанре платформер с загадочным сюжетом и авторской графикой',
            fullDescription: 'Игра, сделанная командой Karfagen Games во время Ala-Too Gamejam 2025. Была сделана за 48 часов и принесла команде победу. Используется полностью авторская графика и скрипты',
            rating: 4.7,
            downloads: '500K+',
            year: '2025',
            team: '3 человека',
            duration: '48 часов',
            image: nowhereImg,
            technologies: ['Unity', 'C#', 'Aseprite', 'Photoshop']
        },
        {
            id: 4,
            title: 'BlueBound',
            category: categoryGames,
            description: 'Увлекательный 2D платформер на Unity с авторскими механиками',
            fullDescription: 'Первый мой полноценный проект. Сделан совсем ещё неопытным мной как практический проект на втором курсе учебы',
            rating: 4.6,
            downloads: '300K+',
            year: '2025',
            team: '1 человек',
            duration: '2 месяцев',
            image: blueboundImg,
            technologies: ['Unity', 'Photoshop', 'Git', 'C#']
        },
        {
            id: 5,
            title: 'MathBlitz',
            category: categoryGames,
            description: 'Супер простая игра для развития ментальной арифметики',
            fullDescription: 'Игра в быстром темпе на вычисление ответа выражения. Выражение всегда составляется из цифр 1, 2 и 3, также как и ответ являетя одним их этих цифр',
            rating: 4.9,
            downloads: '450K+',
            year: '2024',
            team: '1 человек',
            duration: '2 недели',
            image: mathBlitzImg,
            technologies: ['Flutter', 'Dart', 'Git']
        },
        {
            id: 6,
            title: 'Rita',
            category: categoryProductivity,
            description: 'Простое и полезное приложение для ежедневного планирования и саморазвития. В разработке',
            fullDescription: '📅 Каждый день — это карточка со списком дел\n' +
                '🔔 Вечером (21:00–22:00) приходит напоминание заполнить задачи\n' +
                '🌙 После полуночи карточка архивируется (остается доступной)\n' +
                '📊 Статистика:\n' +
                'Всего задач\n' +
                'Выполненные задачи\n' +
                'Процент выполнения\n' +
                '🏆 Система достижений (ачивки) за прогресс и активность',
            rating: 0.0,
            downloads: '_',
            year: '2025',
            team: '1 человек',
            duration: 'В разработке',
            image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NDc0NDIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
            technologies: ['Flutter', 'Provider', 'Git', 'Hive_ce'],
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
                    <div className="grid grid-cols-3 gap-8"> {/*это карточки проектов*/}
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

                                    <button className="group/btn w-full py-3 border-2 border-[#C48A52] text-[#C48A52] rounded-lg hover:bg-[#C48A52] hover:text-white transition-all flex items-center justify-center gap-2"
                                            onClick={() => navigate(`/projects/${project.id}`)}
                                    >
                                        Подробнее
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> {/*конец карточки проектов*/}

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
