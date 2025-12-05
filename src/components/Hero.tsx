import {ArrowRight, Code2, Layers, Zap} from 'lucide-react';
import {ImageWithFallback} from './figma/ImageWithFallback';
import phoneImg from "@/assets/img/phone1.png";


export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Ancient Carthage Pattern Background */}
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
                <div className="grid grid-cols-2 gap-20 items-center">
                    <div>
                        <div
                            className="inline-block mb-6 px-6 py-2 bg-[#C48A52]/10 border border-[#C48A52]/30 rounded-full">
                            <span className="text-[#C48A52]">Строим цифровые империи</span>
                        </div>

                        <h1 className="text-7xl text-white mb-8 leading-tight">
                            Разработка<br/>
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48A52] to-[#FF9E76]">
                мобильных
              </span><br/>
                            приложений
                        </h1>

                        <p className="text-xl text-white/70 mb-12 max-w-xl">
                            Создаем инновационные мобильные решения, которые остаются в истории.
                            Как древний Карфаген строил торговые пути, мы прокладываем цифровые магистрали будущего.
                        </p>

                        <div className="flex gap-6">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                                className="group px-10 py-4 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-xl hover:shadow-[#C48A52]/40 transition-all flex items-center gap-3">
                                Начать проект
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </button>
                            <button
                                className="px-10 py-4 border-2 border-[#C48A52] text-[#C48A52] rounded-lg hover:bg-[#C48A52]/10 transition-all">
                                Наши работы
                            </button>
                        </div>

                        <div className="flex gap-12 mt-16">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#C48A52]/20 rounded-lg flex items-center justify-center">
                                    <Code2 className="w-6 h-6 text-[#C48A52]"/>
                                </div>
                                <div>
                                    <div className="text-2xl text-white">10+</div>
                                    <div className="text-sm text-white/60">Проектов</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#FF9E76]/20 rounded-lg flex items-center justify-center">
                                    <Layers className="w-6 h-6 text-[#FF9E76]"/>
                                </div>
                                <div>
                                    <div className="text-2xl text-white">20+</div>
                                    <div className="text-sm text-white/60">Клиентов</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#C48A52]/20 rounded-lg flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-[#C48A52]"/>
                                </div>
                                <div>
                                    <div className="text-2xl text-white">3+</div>
                                    <div className="text-sm text-white/60">Лет опыта</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[#C48A52]/20 to-[#FF9E76]/20 rounded-3xl blur-3xl"></div>
                        <div
                            className="relative bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-8 rounded-3xl border border-[#C48A52]/20">
                            <ImageWithFallback
                                src={phoneImg}
                                alt="Mobile Development"
                                className="w-full h-[600px] object-cover rounded-2xl"
                            />

                            {/* Decorative geometric elements */}
                            <div
                                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#C48A52] rounded-lg transform rotate-12"></div>
                            <div
                                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#FF9E76] to-[#C48A52] rounded-lg transform -rotate-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
