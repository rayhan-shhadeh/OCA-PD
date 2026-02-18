import Link from "next/link";
import Image from "next/image";
import ContentCard from "@/components/ContentCard";
import { getItems } from "@/lib/notion";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export const revalidate = 3600;

const stats = [
  { key: "families", value: "200+", icon: "👨‍👩‍👧" },
  { key: "sessions", value: "150+", icon: "🎓" },
  { key: "tools", value: "300+", icon: "🦽" },
  { key: "activities", value: "20+", icon: "🎯" },
  { key: "partners", value: "15", icon: "🤝" },
  { key: "cases", value: "170+", icon: "❤️" },
];

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  const [activities, news] = await Promise.all([
    getItems(process.env.NOTION_ACTIVITIES_DB_ID, locale, "activity"),
    getItems(process.env.NOTION_NEWS_DB_ID, locale, "news"),
  ]);

  const staticPrograms = t.programs.static;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-primary-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-white animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-secondary-200 text-sm font-medium mb-6 border border-white/20">
                <span>🕊️</span>
                <span>{t.home.hero.established}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-3">
                {t.home.hero.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-300 mb-6">
                {t.home.hero.subtitle}
              </h2>
              <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-lg">
                {t.home.hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/donate`}
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-black text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-200"
                >
                  💙 {t.home.hero.cta_donate}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200"
                >
                  {t.home.hero.cta_learn} →
                </Link>
              </div>
            </div>

            {/* Logo/Visual */}
            <div className="hidden lg:flex justify-center items-center animate-float">
              <div className="relative">
                <div className="w-72 h-72 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="w-56 h-56 relative">
                    <Image
                      src="/logo.png"
                      alt="OCA-PD"
                      fill
                      className=" drop-shadow-2xl relative w-14 h-19 flex-shrink-0 rounded-full overflow-hidden"
                      priority
                    />
                  </div>
                </div>
                {/* Orbiting elements */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-secondary-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl">♿</span>
                </div>
                <div className="absolute bottom-8 -left-8 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">❤️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4 animate-slideUp delay-300">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center glass rounded-xl p-4">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-white font-black text-xl">
                  {stat.value}
                </div>
                <div className="text-primary-200 text-xs mt-0.5">
                  {t.home.stats[stat.key as keyof typeof t.home.stats]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#f9fafb"
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-black text-primary-800 mb-4">
                {t.home.mission.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.home.mission.description}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-lg">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-black mb-4">
                {t.home.vision.title}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {t.home.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
              {t.home.programs.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t.home.programs.subtitle}
            </p>
            <div className="w-16 h-1 bg-primary-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticPrograms.slice(0, 6).map((program: any, index: number) => (
              <div
                key={program.id}
                className="card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`/${locale}/programs`}
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition-colors shadow-md"
            >
              {t.home.programs.viewAll}
              <svg
                className="w-4 h-4 rtl-flip"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
                {t.home.activities.title}
              </h2>
              <p className="text-gray-500">{t.home.activities.subtitle}</p>
              <div className="w-16 h-1 bg-primary-500 mt-3 rounded-full" />
            </div>
            <Link
              href={`/${locale}/activities`}
              className="hidden sm:flex items-center gap-1 text-primary-600 font-semibold hover:underline text-sm"
            >
              {t.home.activities.viewAll}
              <svg
                className="w-4 h-4 rtl-flip"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {activities.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.slice(0, 6).map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                  locale={locale}
                  section="activities"
                  t={t}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
              <div className="text-5xl mb-4">🎯</div>
              <p className="text-gray-400 font-medium">
                {t.activities.noItems}
              </p>
            </div>
          )}

          <div className="text-center mt-6 sm:hidden">
            <Link
              href={`/${locale}/activities`}
              className="text-primary-600 font-semibold"
            >
              {t.home.activities.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
                {t.home.news.title}
              </h2>
              <p className="text-gray-500">{t.home.news.subtitle}</p>
              <div className="w-16 h-1 bg-primary-500 mt-3 rounded-full" />
            </div>
            <Link
              href={`/${locale}/news`}
              className="hidden sm:flex items-center gap-1 text-primary-600 font-semibold hover:underline text-sm"
            >
              {t.home.news.viewAll}
              <svg
                className="w-4 h-4 rtl-flip"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {news.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(0, 6).map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                  locale={locale}
                  section="news"
                  t={t}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <div className="text-5xl mb-4">📰</div>
              <p className="text-gray-400 font-medium">{t.news.noItems}</p>
            </div>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              {t.home.values.title}
            </h2>
            <div className="w-16 h-1 bg-secondary-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { key: "dignity", icon: "🕊️" },
              { key: "justice", icon: "⚖️" },
              { key: "transparency", icon: "🔍" },
              { key: "partnership", icon: "🤝" },
              { key: "giving", icon: "💝" },
            ].map((value) => (
              <div key={value.key} className="text-center glass rounded-xl p-6">
                <div className="text-4xl mb-3">{value.icon}</div>
                <p className="text-white font-semibold text-sm">
                  {t.home.values[value.key as keyof typeof t.home.values]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-50 border-t border-secondary-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary-800 mb-4">
            {t.home.cta.title}
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            {t.home.cta.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${locale}/donate`}
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-10 py-4 rounded-full font-black text-lg shadow-xl hover:bg-primary-600 hover:scale-105 transition-all duration-200"
            >
              💙 {t.home.cta.donate}
            </Link>
            <Link
              href={`/${locale}/volunteer`}
              className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-600 px-10 py-4 rounded-full font-black text-lg hover:bg-primary-50 transition-all duration-200"
            >
              🙋 {t.home.cta.volunteer}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
