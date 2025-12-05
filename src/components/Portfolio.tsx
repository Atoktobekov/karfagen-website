import {ArrowRight, Star} from 'lucide-react';
import { Link } from 'react-router-dom';
import {ImageWithFallback} from './figma/ImageWithFallback';
import manasImg from '@/assets/img/yemekhane.png';
import cryptoImg from '@/assets/img/crypto.png';
import nowhereImg from '@/assets/img/nowhere.png';

export function Portfolio() {
    const projects = [
        {
            title: 'Manas Yemekhane',
            category: 'Еда',
            description: 'Мобильное приложение для быстрого просмотра меню в столовой университета Манас',
            rating: 4.8,
            downloads: '100K+',
            image: manasImg,
        },
        {
            title: 'CryptoApp',
            category: 'Финансы',
            description: 'Приложение для мониторинга курсов криптовалют',
            rating: 4.9,
            downloads: '250K+',
            image: cryptoImg
        },
        {
            title: 'NowhereAwake',
            category: 'Игры',
            description: '2D игра в жанре платформер с загадочным сюжетом и авторской графикой',
            rating: 4.7,
            downloads: '500K+',
            image: nowhereImg
        }
    ];


    return (
        <section id="portfolio" className="py-32 relative">
            <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C48A52] to-transparent"></div>

            <div className="max-w-[1920px] mx-auto px-20">
                <div className="text-center mb-20">
                    <div
                        className="inline-block mb-4 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                        <span className="text-[#C48A52]">Портфолио</span>
                    </div>
                    <h2 className="text-5xl text-white mb-6">
                        Наши <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">достижения</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Проекты, которые изменили индустрию и завоевали доверие миллионов пользователей
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] rounded-2xl border border-[#C48A52]/20 overflow-hidden hover:border-[#C48A52]/50 transition-all hover:transform hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3B50] to-transparent"></div>

                                {/* Category badge */}
                                <div
                                    className="absolute top-4 left-4 px-4 py-2 bg-[#C48A52]/90 backdrop-blur-sm rounded-lg">
                                    <span className="text-white text-sm">{project.category}</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl text-white mb-3">{project.title}</h3>
                                <p className="text-white/70 mb-6">{project.description}</p>

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-[#FF9E76] fill-[#FF9E76]"/>
                                        <span className="text-white">{project.rating}</span>
                                    </div>
                                    <div className="text-[#C48A52]">{project.downloads} загрузок</div>
                                </div>

                                <button
                                    className="group/btn w-full py-3 border-2 border-[#C48A52] text-[#C48A52] rounded-lg hover:bg-[#C48A52] hover:text-white transition-all flex items-center justify-center gap-2">
                                    Подробнее
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"/>
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/projects">
                        <button className="px-12 py-4 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-xl hover:shadow-[#C48A52]/40 transition-all">
                            Смотреть все проекты
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
