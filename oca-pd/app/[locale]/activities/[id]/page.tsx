import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getItemById } from '@/lib/notion';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/types/content';

export const revalidate = 3600;

export async function generateStaticParams() {
  return [];
}

export default async function ActivityDetailPage({ params }: { params: { locale: string; id: string } }) {
  const locale = params.locale as Locale;
  const t = await getTranslations(locale);
  const item = await getItemById(params.id, locale);

  if (!item) notFound();

  const formattedDate = item.date
    ? new Date(item.date).toLocaleDateString(locale === 'ar' ? 'ar-PS' : 'en-GB', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : '';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link href={`/${locale}/activities`} className="inline-flex items-center gap-2 text-primary-600 font-medium hover:underline">
            <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.activities.backToList}
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-700 to-primary-600 text-white py-16">
        <div className="container-custom">
          {formattedDate && <p className="text-secondary-200 mb-3 text-sm">📅 {formattedDate}</p>}
          <h1 className="text-3xl md:text-5xl font-black">{item.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {item.coverImage && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img src={item.coverImage} alt={item.title} className="w-full h-auto max-h-96 object-cover" />
            </div>
          )}

          {item.description && (
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <p className="text-gray-700 leading-loose whitespace-pre-line text-lg">{item.description}</p>
            </div>
          )}

          {item.images && item.images.length > 1 && (
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.activities.gallery}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.images.map((image: string, index: number) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md">
                    <img src={image} alt={`${item.title} - ${index + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
