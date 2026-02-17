import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';
import Link from 'next/link';

export default async function ProgramsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  const programs = t.programs.static;

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.programs.title}</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">{t.programs.subtitle}</p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program: any) => (
              <div key={program.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 text-center">
                  <span className="text-7xl">{program.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-black mb-4">
            {locale === 'ar' ? 'هل تحتاج إلى خدماتنا؟' : 'Do you need our services?'}
          </h2>
          <Link href={`/${locale}/contact`} className="bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
            {t.common.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
