import Link from 'next/link';
import type { Locale } from '@/types/content';

interface CardProps {
  item: {
    id: string;
    title: string;
    description: string;
    date: string;
    coverImage?: string;
    images?: string[];
  };
  locale: Locale;
  section: string;
  t: any;
}

export default function ContentCard({ item, locale, section, t }: CardProps) {
  const formattedDate = item.date
    ? new Date(item.date).toLocaleDateString(locale === 'ar' ? 'ar-PS' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <Link href={`/${locale}/${section}/${item.id}`} className="block group">
      <div className="card-hover bg-white rounded-2xl shadow-md overflow-hidden h-full border border-gray-100">
        {/* Image */}
        <div className="relative h-52 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
          {item.coverImage ? (
            <img
              src={item.coverImage}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">
                  {section === 'activities' ? '🎯' : '📰'}
                </span>
              </div>
            </div>
          )}

          {/* Date badge */}
          {formattedDate && (
            <div className="absolute bottom-3 start-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700 shadow-sm">
              {formattedDate}
            </div>
          )}

          {/* Multiple images indicator */}
          {item.images && item.images.length > 1 && (
            <div className="absolute top-3 end-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.images.length}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
              {item.description}
            </p>
          )}

          {/* Read more */}
          <div className="mt-4 flex items-center gap-1 text-primary-600 font-semibold text-sm">
            <span>{t.common.readMore}</span>
            <svg
              className="w-4 h-4 rtl-flip group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
