import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';
import Link from 'next/link';

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.about.title}</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">{t.about.hero_subtitle}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-10 bg-primary-500 rounded-full" />
              <h2 className="text-2xl font-black text-primary-800">{locale === 'ar' ? 'عن الجمعية' : 'About the Association'}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t.about.overview}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-black text-primary-800 mb-4">{t.home.mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.home.mission.description}</p>
            </div>
            <div className="bg-primary-700 rounded-2xl p-8 text-white">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-black mb-4">{t.home.vision.title}</h3>
              <p className="text-primary-100 leading-relaxed">{t.home.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-800 mb-3">{t.about.objectives_title}</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.objectives.map((obj: string, i: number) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">{t.about.achievements_title}</h2>
            <div className="w-16 h-1 bg-secondary-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.achievements.map((item: any, i: number) => (
              <div key={i} className="glass rounded-xl p-6 text-center">
                <div className="text-4xl font-black text-secondary-300 mb-2">{item.number}</div>
                <p className="text-primary-100 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-800 mb-3">{t.about.future_title}</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>
          <div className="space-y-4">
            {t.about.future.map((plan: string, i: number) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50 border-t border-primary-100">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-black text-primary-800 mb-4">
            {locale === 'ar' ? 'هل تريد دعمنا؟' : 'Want to Support Us?'}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/donate`} className="bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition-colors shadow-md">
              {t.common.donate}
            </Link>
            <Link href={`/${locale}/volunteer`} className="border-2 border-primary-500 text-primary-600 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors">
              {t.common.volunteer}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
