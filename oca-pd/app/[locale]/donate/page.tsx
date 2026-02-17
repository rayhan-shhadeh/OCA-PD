import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export default async function DonatePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  const bankDetails = [
    { label: locale === 'ar' ? 'البنك' : 'Bank', value: t.donate.bank_name },
    { label: t.donate.account_name, value: 'ASSOCCIATION OF SPECIAL NEEDS PARENTS - OUR CHILDREN' },
    { label: t.donate.account_number_label, value: t.donate.account_number },
    { label: t.donate.iban_label, value: t.donate.iban },
    { label: t.donate.swift_label, value: t.donate.swift },
    { label: t.donate.currency_label, value: t.donate.currency },
  ];

  const impacts = [t.donate.impact_1, t.donate.impact_2, t.donate.impact_3];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24">
        <div className="container-custom text-center">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.donate.title}</h1>
          <p className="text-primary-100 text-xl max-w-2xl mx-auto">{t.donate.subtitle}</p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          {/* Impact Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-black text-gray-800 text-center mb-6">{t.donate.impact_title}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {impacts.map((impact, i) => (
                <div key={i} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 text-center border border-primary-100">
                  <div className="text-4xl mb-3">{['💊', '🎓', '🛒'][i]}</div>
                  <p className="text-primary-700 font-semibold text-sm leading-relaxed">{impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6 text-white">
              <h2 className="text-xl font-black">{t.donate.bank_title}</h2>
              <p className="text-primary-100 text-sm mt-1">
                {locale === 'ar' ? 'المعلومات البنكية للتحويل' : 'Bank transfer information'}
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {bankDetails.map((detail, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 text-sm font-medium sm:w-40 flex-shrink-0">{detail.label}</span>
                    <span className="font-bold text-gray-800 bg-gray-50 rounded-lg px-3 py-1.5 text-sm font-mono break-all">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl flex-shrink-0">💡</span>
                  <p className="text-amber-800 text-sm leading-relaxed">{t.donate.note}</p>
                </div>
              </div>

              {/* Contact for confirmation */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm mb-3">
                  {locale === 'ar' ? 'للتواصل بعد التحويل:' : 'Contact us after transfer:'}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="tel:0597550083" className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-green-600 transition-colors">
                    📞 0597 550 083
                  </a>
                  <a href="mailto:aspn.association@gmail.com" className="inline-flex items-center gap-2 bg-primary-500 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary-600 transition-colors">
                    ✉️ aspn.association@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
