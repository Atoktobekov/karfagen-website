export function TermsOfServiceContent() {
  return (
    <div className="text-white/80 space-y-8">
      {/* Introduction */}
      <section>
        <h3 className="text-2xl text-white mb-4">1. Принятие условий</h3>
        <p className="leading-relaxed mb-4">
          Добро пожаловать в Karfagen. Используя наш веб-сайт и услуги, вы соглашаетесь соблюдать 
          настоящие Условия использования. Если вы не согласны с какими-либо частями этих условий, 
          пожалуйста, не используйте наш сайт.
        </p>
        <div className="bg-[#C48A52]/10 border border-[#C48A52]/30 p-6 rounded-xl">
          <p className="text-white">
            <strong>Важно:</strong> Настоящие условия представляют собой юридически обязывающее 
            соглашение между вами и компанией Karfagen.
          </p>
        </div>
      </section>

      {/* Services Description */}
      <section>
        <h3 className="text-2xl text-white mb-4">2. Описание услуг</h3>
        <p className="leading-relaxed mb-4">
          Karfagen предоставляет услуги по разработке мобильных приложений, включая но не ограничиваясь:
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#3d4a61]/30 p-4 rounded-lg border border-[#C48A52]/10">
            <p className="text-white mb-2">📱 iOS разработка</p>
            <p className="text-white/60 text-sm">Нативные приложения для Apple</p>
          </div>
          <div className="bg-[#3d4a61]/30 p-4 rounded-lg border border-[#C48A52]/10">
            <p className="text-white mb-2">🤖 Android разработка</p>
            <p className="text-white/60 text-sm">Приложения для Android устройств</p>
          </div>
          <div className="bg-[#3d4a61]/30 p-4 rounded-lg border border-[#C48A52]/10">
            <p className="text-white mb-2">🎨 UI/UX дизайн</p>
            <p className="text-white/60 text-sm">Интерфейсы приложений</p>
          </div>
          <div className="bg-[#3d4a61]/30 p-4 rounded-lg border border-[#C48A52]/10">
            <p className="text-white mb-2">⚙️ Backend разработка</p>
            <p className="text-white/60 text-sm">Серверная инфраструктура</p>
          </div>
        </div>
        <p className="leading-relaxed mt-4 text-white/70">
          Мы оставляем за собой право изменять, приостанавливать или прекращать любую часть 
          наших услуг в любое время без предварительного уведомления.
        </p>
      </section>

      {/* User Obligations */}
      <section>
        <h3 className="text-2xl text-white mb-4">3. Обязанности пользователя</h3>
        <p className="leading-relaxed mb-4">При использовании нашего сайта и услуг вы соглашаетесь:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-[#3d4a61]/20 p-4 rounded-lg">
            <span className="text-[#C48A52] text-xl">•</span>
            <div>
              <strong className="text-white">Предоставлять точную информацию:</strong>
              <p className="text-white/70 mt-1">Вся предоставленная информация должна быть достоверной и актуальной</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#3d4a61]/20 p-4 rounded-lg">
            <span className="text-[#C48A52] text-xl">•</span>
            <div>
              <strong className="text-white">Соблюдать законодательство:</strong>
              <p className="text-white/70 mt-1">Не использовать сайт для незаконной деятельности</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#3d4a61]/20 p-4 rounded-lg">
            <span className="text-[#C48A52] text-xl">•</span>
            <div>
              <strong className="text-white">Уважать права других:</strong>
              <p className="text-white/70 mt-1">Не нарушать интеллектуальную собственность третьих лиц</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#3d4a61]/20 p-4 rounded-lg">
            <span className="text-[#C48A52] text-xl">•</span>
            <div>
              <strong className="text-white">Не причинять вред:</strong>
              <p className="text-white/70 mt-1">Не предпринимать действий, которые могут повредить нашему сайту или услугам</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section>
        <h3 className="text-2xl text-white mb-4">4. Интеллектуальная собственность</h3>
        
        <div className="space-y-4">
          <div className="bg-[#3d4a61]/30 p-6 rounded-xl border border-[#C48A52]/10">
            <h4 className="text-xl text-[#C48A52] mb-3">4.1. Наши права</h4>
            <p className="text-white/70 leading-relaxed mb-3">
              Все материалы на нашем сайте, включая тексты, графику, логотипы, иконки, изображения, 
              аудио- и видеоклипы, и программное обеспечение, являются собственностью Karfagen или 
              наших лицензиаров и защищены законами об авторском праве.
            </p>
            <p className="text-white/70 leading-relaxed">
              Бренд «Karfagen» и все связанные логотипы являются нашими товарными знаками.
            </p>
          </div>

          <div className="bg-[#3d4a61]/30 p-6 rounded-xl border border-[#C48A52]/10">
            <h4 className="text-xl text-[#C48A52] mb-3">4.2. Права клиента</h4>
            <p className="text-white/70 leading-relaxed mb-3">
              При разработке проекта права на созданный продукт передаются клиенту после полной 
              оплаты услуг, если иное не предусмотрено индивидуальным договором.
            </p>
            <p className="text-white/70 leading-relaxed">
              Мы оставляем за собой право использовать созданные проекты в портфолио и маркетинговых 
              материалах, если не согласовано иное.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section>
        <h3 className="text-2xl text-white mb-4">5. Условия оплаты</h3>
        <p className="leading-relaxed mb-4">
          Оплата услуг производится в соответствии с индивидуальным коммерческим предложением:
        </p>
        <div className="space-y-3 mb-4">
          <div className="flex gap-3">
            <span className="text-[#FF9E76] flex-shrink-0">→</span>
            <p className="text-white/70">
              Предоплата обычно составляет 30-50% от стоимости проекта
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#FF9E76] flex-shrink-0">→</span>
            <p className="text-white/70">
              Окончательный расчет производится после завершения и приемки работ
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#FF9E76] flex-shrink-0">→</span>
            <p className="text-white/70">
              Цены указаны без НДС, если не указано иное
            </p>
          </div>
        </div>
        <div className="bg-[#FF9E76]/10 border border-[#FF9E76]/30 p-6 rounded-xl">
          <p className="text-white">
            <strong>Важно:</strong> Задержка оплаты может привести к приостановке работ по проекту.
          </p>
        </div>
      </section>

      {/* Project Timeline */}
      <section>
        <h3 className="text-2xl text-white mb-4">6. Сроки выполнения</h3>
        <p className="leading-relaxed mb-4">
          Сроки разработки определяются индивидуально для каждого проекта и указываются в договоре:
        </p>
        <div className="bg-[#3d4a61]/30 p-6 rounded-xl border border-[#C48A52]/10">
          <ul className="space-y-2 text-white/70">
            <li className="flex gap-2">
              <span className="text-[#C48A52]">✓</span>
              <span>Мы прилагаем все усилия для соблюдения согласованных сроков</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C48A52]">✓</span>
              <span>Изменения в требованиях могут повлиять на сроки выполнения</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C48A52]">✓</span>
              <span>Задержки со стороны клиента (предоставление материалов, обратная связь) могут продлить сроки</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C48A52]">✓</span>
              <span>Форс-мажорные обстоятельства могут повлиять на выполнение обязательств</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Warranties and Disclaimers */}
      <section>
        <h3 className="text-2xl text-white mb-4">7. Гарантии и отказ от ответственности</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-xl text-white mb-3">7.1. Наши гарантии</h4>
            <p className="text-white/70 leading-relaxed mb-3">
              Мы гарантируем, что наши услуги будут предоставлены профессионально и в соответствии 
              с отраслевыми стандартами. На разработанные приложения предоставляется гарантийная 
              поддержка в течение согласованного периода.
            </p>
          </div>

          <div className="bg-[#3d4a61]/30 p-6 rounded-xl border border-[#C48A52]/10">
            <h4 className="text-xl text-white mb-3">7.2. Ограничения ответственности</h4>
            <p className="text-white/70 leading-relaxed mb-3">
              Мы не несем ответственности за:
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex gap-2">
                <span className="text-[#FF9E76]">×</span>
                <span>Косвенные или случайные убытки</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF9E76]">×</span>
                <span>Потерю прибыли или данных</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF9E76]">×</span>
                <span>Действия третьих лиц (магазины приложений, хостинг-провайдеры)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF9E76]">×</span>
                <span>Изменения в политиках платформ (iOS, Android)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section>
        <h3 className="text-2xl text-white mb-4">8. Конфиденциальность</h3>
        <p className="leading-relaxed mb-4">
          Мы обязуемся сохранять конфиденциальность всей информации, полученной от клиентов:
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/20">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="text-white mb-2">NDA</h4>
            <p className="text-white/70 text-sm">
              Готовы подписать соглашение о неразглашении
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/20">
            <div className="text-4xl mb-3">🛡️</div>
            <h4 className="text-white mb-2">Защита данных</h4>
            <p className="text-white/70 text-sm">
              Используем надежные методы хранения и передачи данных
            </p>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section>
        <h3 className="text-2xl text-white mb-4">9. Прекращение сотрудничества</h3>
        <p className="leading-relaxed mb-4">
          Любая из сторон может прекратить сотрудничество:
        </p>
        <div className="space-y-3">
          <div className="bg-[#3d4a61]/20 p-4 rounded-lg">
            <strong className="text-white">По соглашению сторон:</strong>
            <p className="text-white/70 mt-1">В любое время при взаимном согласии</p>
          </div>
          <div className="bg-[#3d4a61]/20 p-4 rounded-lg">
            <strong className="text-white">При нарушении условий:</strong>
            <p className="text-white/70 mt-1">В случае существенного нарушения договорных обязательств</p>
          </div>
          <div className="bg-[#3d4a61]/20 p-4 rounded-lg">
            <strong className="text-white">С уведомлением:</strong>
            <p className="text-white/70 mt-1">С предварительным уведомлением за 30 дней</p>
          </div>
        </div>
        <p className="leading-relaxed mt-4 text-white/70">
          При расторжении договора оплата производится за фактически выполненные работы.
        </p>
      </section>

      {/* Dispute Resolution */}
      <section>
        <h3 className="text-2xl text-white mb-4">10. Разрешение споров</h3>
        <p className="leading-relaxed mb-4">
          В случае возникновения споров стороны обязуются:
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-4 bg-[#3d4a61]/20 p-4 rounded-lg">
            <span className="text-3xl">1️⃣</span>
            <div>
              <strong className="text-white">Провести переговоры</strong>
              <p className="text-white/70 text-sm mt-1">Попытаться урегулировать спор мирным путем</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#3d4a61]/20 p-4 rounded-lg">
            <span className="text-3xl">2️⃣</span>
            <div>
              <strong className="text-white">Обратиться к посредничеству</strong>
              <p className="text-white/70 text-sm mt-1">Использовать услуги независимого медиатора</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#3d4a61]/20 p-4 rounded-lg">
            <span className="text-3xl">3️⃣</span>
            <div>
              <strong className="text-white">Судебное разбирательство</strong>
              <p className="text-white/70 text-sm mt-1">При необходимости обратиться в суд по месту нахождения ответчика</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modifications */}
      <section>
        <h3 className="text-2xl text-white mb-4">11. Изменения условий</h3>
        <p className="leading-relaxed mb-4">
          Мы оставляем за собой право изменять настоящие Условия использования в любое время. 
          Об изменениях мы уведомим вас, разместив обновленную версию на сайте.
        </p>
        <div className="bg-[#C48A52]/10 border border-[#C48A52]/30 p-6 rounded-xl">
          <p className="text-white leading-relaxed">
            Продолжая использовать наш сайт после внесения изменений, вы соглашаетесь 
            с новыми условиями. Если вы не согласны с изменениями, прекратите использование сайта.
          </p>
        </div>
      </section>

      {/* Governing Law */}
      <section>
        <h3 className="text-2xl text-white mb-4">12. Применимое право</h3>
        <p className="leading-relaxed">
          Настоящие Условия регулируются и толкуются в соответствии с законодательством 
          Российской Федерации, без учета его коллизионных норм.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h3 className="text-2xl text-white mb-4">13. Контактная информация</h3>
        <p className="leading-relaxed mb-4">
          По всем вопросам, связанным с настоящими Условиями использования, обращайтесь:
        </p>
        <div className="bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] p-6 rounded-xl border border-[#C48A52]/30">
          <div className="space-y-3 text-white/80">
            <p><strong className="text-[#C48A52]">Компания:</strong> Karfagen</p>
            <p><strong className="text-[#C48A52]">Email:</strong> adil_toktobekov@mail.ru</p>
            <p><strong className="text-[#C48A52]">Телефон:</strong> +996 776 123 666</p>
            <p><strong className="text-[#C48A52]">Адрес:</strong> Бишкек, Кыргызстан</p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="border-t border-[#C48A52]/20 pt-8">
        <div className="bg-gradient-to-r from-[#C48A52]/10 to-[#FF9E76]/10 p-6 rounded-xl border border-[#C48A52]/20">
          <p className="text-white/80 leading-relaxed text-center">
            Karfagen — это не просто компания по разработке приложений, это партнер, 
            который помогает воплотить ваши идеи в реальность. Как древний Карфаген 
            строил мосты между цивилизациями, так и мы создаем связи между вашим 
            бизнесом и миллионами пользователей через инновационные технологии.
          </p>
        </div>
      </section>
    </div>
  );
}
