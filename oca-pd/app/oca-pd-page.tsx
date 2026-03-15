import { permanentRedirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export const metadata = {
  title: 'OCA-PD - Our Children Association for Persons with Disabilities',
  description: 'جمعية أهالي ذوي الاحتياجات الخاصة – أبناؤنا',
};

export default function RootPage() {
  permanentRedirect(`/${defaultLocale}`);
}
