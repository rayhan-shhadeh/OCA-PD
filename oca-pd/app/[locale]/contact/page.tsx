import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.contact.title}</h1>
          <p className="text-primary-100 text-lg">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: '📍', title: t.contact.address_title, content: t.contact.address },
                { icon: '📞', title: t.contact.phone_title, content: t.contact.phone, href: 'tel:0597550083' },
                { icon: '✉️', title: t.contact.email_title, content: t.contact.email, href: 'mailto:aspn.association@gmail.com' },
                { icon: '⏰', title: t.contact.hours_title, content: t.contact.hours },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-primary-600 hover:underline font-medium">{item.content}</a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder + quick contact */}
            <div className="space-y-6">
              <div className="bg-primary-700 rounded-2xl p-8 text-white text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="font-bold text-xl mb-2">
                  {locale === 'ar' ? 'موقعنا' : 'Our Location'}
                </h3>
                <p className="text-primary-100 text-sm">{t.contact.address}</p>
                <a
                  href="https://maps.google.com/?q=Nablus,Palestine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-white text-primary-700 px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all"
                >
                  {locale === 'ar' ? 'فتح الخريطة' : 'Open Map'}
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">
                  {locale === 'ar' ? 'تواصل معنا مباشرة' : 'Contact Us Directly'}
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:0597550083"
                    className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors"
                  >
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-bold text-green-800 text-sm">0597 550 083</p>
                      <p className="text-green-600 text-xs">{locale === 'ar' ? 'اتصل الآن' : 'Call Now'}</p>
                    </div>
                  </a>
                  <a
                    href="mailto:aspn.association@gmail.com"
                    className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-bold text-blue-800 text-sm">aspn.association@gmail.com</p>
                      <p className="text-blue-600 text-xs">{locale === 'ar' ? 'راسلنا' : 'Email Us'}</p>
                    </div>
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
