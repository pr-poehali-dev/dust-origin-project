import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/727c5331-d618-48fc-acd9-6aca0a3a10df/files/fc37cdec-9ae2-4d11-9aa4-d3d8d0181108.jpg";

const courses = [
  {
    id: 1,
    tag: "Дизайн",
    title: "Визуальное мышление",
    subtitle: "Научитесь видеть мир глазами художника",
    duration: "8 недель",
    students: "1 240",
    level: "С нуля",
    color: "from-amber-500/10 to-orange-500/5",
    accent: "text-amber-400",
    border: "border-amber-500/30",
    emoji: "🎨",
  },
  {
    id: 2,
    tag: "Фотография",
    title: "Язык света и тени",
    subtitle: "От телефона до профессиональных съёмок",
    duration: "6 недель",
    students: "890",
    level: "Начальный",
    color: "from-violet-500/10 to-purple-500/5",
    accent: "text-violet-400",
    border: "border-violet-500/30",
    emoji: "📷",
  },
  {
    id: 3,
    tag: "Писательство",
    title: "Живые тексты",
    subtitle: "Пишите так, чтобы хотелось читать до конца",
    duration: "10 недель",
    students: "2 100",
    level: "Любой",
    color: "from-emerald-500/10 to-teal-500/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    emoji: "✍️",
  },
  {
    id: 4,
    tag: "Музыка",
    title: "Создай свой звук",
    subtitle: "Основы электронной музыки и сведения",
    duration: "12 недель",
    students: "560",
    level: "С нуля",
    color: "from-pink-500/10 to-rose-500/5",
    accent: "text-pink-400",
    border: "border-pink-500/30",
    emoji: "🎵",
  },
  {
    id: 5,
    tag: "Иллюстрация",
    title: "Цифровой рисунок",
    subtitle: "Procreate, стили и личный почерк",
    duration: "8 недель",
    students: "1 780",
    level: "С нуля",
    color: "from-sky-500/10 to-blue-500/5",
    accent: "text-sky-400",
    border: "border-sky-500/30",
    emoji: "🖌️",
  },
  {
    id: 6,
    tag: "Видео",
    title: "Режиссура момента",
    subtitle: "Сторителлинг через движущееся изображение",
    duration: "9 недель",
    students: "430",
    level: "Средний",
    color: "from-orange-500/10 to-red-500/5",
    accent: "text-orange-400",
    border: "border-orange-500/30",
    emoji: "🎬",
  },
];

const stats = [
  { value: "12 000+", label: "Студентов" },
  { value: "48", label: "Курсов" },
  { value: "94%", label: "Довольных" },
  { value: "3 года", label: "На рынке" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<"home" | "courses">("home");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{ background: "linear-gradient(to bottom, hsl(220,20%,6%) 0%, transparent 100%)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
            <span className="text-[10px] font-bold text-[hsl(220,20%,6%)]">U</span>
          </div>
          <span className="font-display text-xl font-semibold text-gold tracking-wide">Universum</span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-[hsl(220,18%,9%)] border border-[hsl(220,15%,16%)] rounded-full px-2 py-1">
          <button
            onClick={() => setActiveSection("home")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === "home"
                ? "bg-gold text-[hsl(220,20%,6%)]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => setActiveSection("courses")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === "courses"
                ? "bg-gold text-[hsl(220,20%,6%)]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Курсы
          </button>
        </div>

        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gold text-[hsl(220,20%,6%)] hover:bg-amber-400 transition-all duration-200">
          Начать учиться
        </button>

        <div className="flex md:hidden gap-3">
          <button
            onClick={() => setActiveSection("home")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === "home" ? "bg-gold text-[hsl(220,20%,6%)]" : "text-muted-foreground"
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => setActiveSection("courses")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeSection === "courses" ? "bg-gold text-[hsl(220,20%,6%)]" : "text-muted-foreground"
            }`}
          >
            Курсы
          </button>
        </div>
      </nav>

      {/* ===== HOME ===== */}
      {activeSection === "home" && (
        <div>
          {/* HERO */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img src={HERO_IMAGE} alt="hero" className="w-full h-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,6%)]/60 via-transparent to-[hsl(220,20%,6%)]" />
            </div>

            <div className="absolute top-1/4 left-[8%] w-3 h-3 rounded-full bg-gold opacity-60 animate-float" />
            <div className="absolute top-1/3 right-[12%] w-5 h-5 rounded-full bg-violet opacity-40 animate-float-delay" />
            <div className="absolute bottom-1/3 left-[15%] w-2 h-2 rounded-full bg-gold opacity-80 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-[8%] w-4 h-4 border border-gold/40 rounded-full animate-float-delay" />
            <div
              className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, hsl(280,60%,65%), transparent)", filter: "blur(20px)" }}
            />
            <div
              className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, hsl(42,85%,62%), transparent)", filter: "blur(30px)" }}
            />

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
              <div className="animate-fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                Новый сезон курсов открыт
              </div>

              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-8 animate-fade-up-2">
                <span className="block text-foreground">Знание —</span>
                <span className="block shimmer-text italic font-semibold">это искусство</span>
              </h1>

              <p className="animate-fade-up-3 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Раскройте свой творческий потенциал вместе с практиками, которые превращают обучение в вдохновение
              </p>

              <div className="animate-fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setActiveSection("courses")}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-[hsl(220,20%,6%)] font-semibold text-base hover:bg-amber-400 transition-all duration-200 glow-gold"
                >
                  Смотреть курсы
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/20 text-foreground font-medium text-base hover:border-gold/50 hover:text-gold transition-all duration-200">
                  <Icon name="Play" size={16} />
                  Посмотреть видео
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs animate-bounce">
              <span className="font-light tracking-widest uppercase text-[10px]">Листайте</span>
              <Icon name="ChevronDown" size={16} />
            </div>
          </section>

          {/* STATS */}
          <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-6 rounded-2xl border border-[hsl(220,15%,16%)] bg-[hsl(220,18%,8%)]">
                  <div className="font-display text-4xl md:text-5xl font-semibold text-gold mb-2">{s.value}</div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="text-gold text-sm font-medium tracking-widest uppercase mb-4">О платформе</div>
                  <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8">
                    Мы учим тех,
                    <br />
                    <em className="text-gold not-italic font-semibold">кто хочет большего</em>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Universum — это место, где опыт встречается с вдохновением. Мы создаём курсы вместе с практиками, которые живут своим делом и передают не просто знания, а образ мышления.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-10">
                    Каждый курс — это путешествие. Вы получаете живые задания, обратную связь и сообщество единомышленников, которое поддерживает даже после окончания учёбы.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Обратная связь", "Сообщество", "Сертификаты", "Пожизненный доступ"].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-gold/30 text-gold text-sm font-medium bg-gold/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-3xl overflow-hidden aspect-square relative">
                    <img src={HERO_IMAGE} alt="about" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet/30 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-card border border-[hsl(220,15%,16%)] shadow-2xl">
                    <div className="text-2xl font-display font-semibold text-gold">48</div>
                    <div className="text-xs text-muted-foreground mt-1">авторских курсов</div>
                  </div>
                  <div className="absolute -top-6 -right-6 p-5 rounded-2xl bg-card border border-[hsl(220,15%,16%)] shadow-2xl">
                    <div className="text-2xl font-display font-semibold text-violet">★ 4.9</div>
                    <div className="text-xs text-muted-foreground mt-1">средняя оценка</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURED COURSES */}
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-16">
                <div>
                  <div className="text-violet text-sm font-medium tracking-widest uppercase mb-4">Популярное</div>
                  <h2 className="font-display text-5xl md:text-6xl font-light">
                    Курсы, которые
                    <br />
                    <em className="font-semibold not-italic">меняют всё</em>
                  </h2>
                </div>
                <button
                  onClick={() => setActiveSection("courses")}
                  className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm font-medium"
                >
                  Все курсы <Icon name="ArrowRight" size={16} />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {courses.slice(0, 3).map((course) => (
                  <div key={course.id} className={`border-gradient rounded-3xl p-6 card-hover cursor-pointer bg-gradient-to-br ${course.color}`}>
                    <div className="text-4xl mb-4">{course.emoji}</div>
                    <div className={`text-xs font-semibold tracking-widest uppercase mb-3 ${course.accent}`}>{course.tag}</div>
                    <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">{course.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{course.subtitle}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> {course.duration}</span>
                      <span className="flex items-center gap-1"><Icon name="Users" size={12} /> {course.students}</span>
                      <span className={`px-2 py-1 rounded-full border ${course.border} ${course.accent} font-medium`}>{course.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="rounded-3xl p-12 md:p-20 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(220,18%,9%) 0%, hsl(280,20%,12%) 100%)",
                  border: "1px solid hsla(280,60%,65%,0.2)",
                }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(280,60%,65%), transparent)", filter: "blur(40px)" }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(42,85%,62%), transparent)", filter: "blur(40px)" }} />
                <div className="relative z-10">
                  <div className="text-5xl mb-6">✨</div>
                  <h2 className="font-display text-4xl md:text-6xl font-light mb-6 leading-tight">
                    Готовы начать
                    <br />
                    <em className="text-gold font-semibold not-italic">своё путешествие?</em>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                    Первые 7 дней — бесплатно. Присоединяйтесь и откройте для себя новый способ учиться.
                  </p>
                  <button className="px-10 py-4 rounded-full bg-gold text-[hsl(220,20%,6%)] font-semibold text-lg hover:bg-amber-400 transition-all duration-200 glow-gold">
                    Начать бесплатно
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-[hsl(220,15%,16%)] py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-[8px] font-bold text-[hsl(220,20%,6%)]">U</span>
                </div>
                <span className="font-display text-lg text-gold">Universum</span>
              </div>
              <div className="text-muted-foreground text-sm">© 2026 Universum. Все права защищены</div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-gold transition-colors">Контакты</a>
                <a href="#" className="hover:text-gold transition-colors">Политика</a>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* ===== COURSES ===== */}
      {activeSection === "courses" && (
        <div className="pt-28 pb-20 px-6 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <div className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Все направления</div>
              <h1 className="font-display text-6xl md:text-7xl font-light mb-6">
                Найди свой
                <br />
                <em className="shimmer-text font-semibold not-italic">путь</em>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                48 авторских курсов от практиков, которые вдохновляют и меняют взгляд на мир
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {["Все", "Дизайн", "Фотография", "Писательство", "Музыка", "Иллюстрация", "Видео"].map((tag, i) => (
                <button
                  key={tag}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    i === 0
                      ? "bg-gold text-[hsl(220,20%,6%)] border-gold"
                      : "border-[hsl(220,15%,20%)] text-muted-foreground hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <div
                  key={course.id}
                  className={`border-gradient rounded-3xl p-7 card-hover cursor-pointer bg-gradient-to-br ${course.color} animate-fade-up`}
                  style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "backwards" }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-4xl">{course.emoji}</div>
                    <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${course.border} ${course.accent}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className={`text-xs font-semibold tracking-widest uppercase mb-2 ${course.accent}`}>{course.tag}</div>
                  <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{course.subtitle}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5"><Icon name="Clock" size={12} /> {course.duration}</span>
                    <span className="flex items-center gap-1.5"><Icon name="Users" size={12} /> {course.students} студентов</span>
                  </div>
                  <button className={`w-full py-3 rounded-2xl font-semibold text-sm border transition-all duration-200 hover:bg-white/5 ${course.border} ${course.accent}`}>
                    Подробнее о курсе
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center p-12 rounded-3xl" style={{ background: "linear-gradient(135deg, hsl(220,18%,9%), hsl(220,15%,11%))", border: "1px solid hsl(220,15%,18%)" }}>
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-4">Не нашли нужный курс?</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Расскажите, чему хотите научиться — и мы постараемся открыть это направление
              </p>
              <button className="px-8 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all text-sm font-medium">
                Предложить тему
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
