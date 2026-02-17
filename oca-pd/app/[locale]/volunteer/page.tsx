import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';
import Link from 'next/link';

export default async function VolunteerPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  const reasons = [t.volunteer.why_1, t.volunteer.why_2, t.volunteer.why_3, t.volunteer.why_4];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20 text-center">
        <div className="container-custom">
          <div className="text-5xl mb-4">🙋</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.volunteer.title}</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">{t.volunteer.subtitle}</p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-black text-center text-gray-800 mb-8">{t.volunteer.why_title}</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  {['⭐', '🎓', '❤️', '🚀'][i]}
                </div>
                <p className="text-gray-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-4">
              {locale === 'ar' ? 'كيف تتطوع معنا؟' : 'How to Volunteer?'}
            </h3>
            <p className="text-primary-100 mb-6">
              {locale === 'ar'
                ? 'تواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني لمعرفة الفرص المتاحة'
                : 'Contact us directly by phone or email to learn about available opportunities'}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:0597550083" className="bg-white text-primary-700 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                📞 {t.volunteer.call}
              </a>
              <Link href={`/${locale}/contact`} className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                {t.volunteer.contact_us}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
