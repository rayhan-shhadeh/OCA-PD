import { getItems } from '@/lib/notion';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export const revalidate = 3600;

export default async function GalleryPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);

  const [activities, news] = await Promise.all([
    getItems(process.env.NOTION_ACTIVITIES_DB_ID, locale, 'activity'),
    getItems(process.env.NOTION_NEWS_DB_ID, locale, 'news'),
  ]);

  const allImages = [
    ...activities.flatMap((a) => a.images || []),
    ...news.flatMap((n) => n.images || []),
  ].filter(Boolean);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.gallery.title}</h1>
          <p className="text-primary-100 text-lg">{t.gallery.subtitle}</p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {allImages.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {allImages.map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
              <div className="text-6xl mb-4">🖼️</div>
              <p className="text-gray-400 font-medium text-lg">{t.common.noItems}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
