import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDirection, locales, getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  return {
    title:
      locale === "ar"
        ? "جمعية أهالي ذوي الاحتياجات الخاصة - أبناؤنا | OCA-PD"
        : "Our Children Association for Persons with Disabilities | OCA-PD",
    description:
      locale === "ar"
        ? "جمعية فلسطينية غير حكومية تعتني بحقوق الأشخاص ذوي الإعاقة - نابلس، فلسطين"
        : "Palestinian NGO caring for the rights of persons with disabilities - Nablus, Palestine",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) notFound();

  const t = await getTranslations(locale);
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header locale={locale} t={t} />
        <main className="flex-1 pt-20">{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
