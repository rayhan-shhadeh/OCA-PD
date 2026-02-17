import { getItems } from '@/lib/notion';
import { getTranslations } from '@/lib/i18n';
import ContentCard from '@/components/ContentCard';
import type { Locale } from '@/types/content';

export const revalidate = 3600;

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  const news = await getItems(process.env.NOTION_NEWS_DB_ID, locale, 'news');

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.news.title}</h1>
          <p className="text-primary-100 text-lg">{t.news.subtitle}</p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {news.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <ContentCard key={item.id} item={item} locale={locale} section="news" t={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
              <div className="text-6xl mb-4">📰</div>
              <p className="text-gray-400 font-medium text-lg">{t.news.noItems}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
