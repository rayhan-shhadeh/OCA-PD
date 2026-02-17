import type { Locale } from '@/types/content';

export const locales = ['ar', 'en'] as const;
export const defaultLocale: Locale = 'ar';

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}

export async function getTranslations(locale: Locale) {
  const messages = await import(`@/messages/${locale}.json`);
  return messages.default;
}
