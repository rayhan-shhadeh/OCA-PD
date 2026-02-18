import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/types/content";

interface FooterProps {
  locale: Locale;
  t: any;
}

export default function Footer({ locale, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}`, label: t.common.home },
    { href: `/${locale}/about`, label: t.common.about },
    { href: `/${locale}/programs`, label: t.common.programs },
    { href: `/${locale}/activities`, label: t.common.activities },
    { href: `/${locale}/news`, label: t.common.news },
    { href: `/${locale}/volunteer`, label: t.common.volunteer },
    { href: `/${locale}/gallery`, label: t.common.gallery },
    { href: `/${locale}/donate`, label: t.common.donate },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      {/* Wave divider */}
      <div className="bg-gray-50">
        <svg
          viewBox="0 0 1440 80"
          className="w-full -mb-1"
          preserveAspectRatio="none"
        >
          <path
            fill="#2e1065"
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      <div className="container-custom pt-20 pb-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Organization Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16 bg-white rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="OCA-PD"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">
                  {t.footer.org_name}
                </p>
                <p className="text-secondary-300 text-xs mt-0.5">
                  OCA-PD | Since 2016
                </p>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            {/* Contact quick info */}
            <div className="space-y-2 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>
                  {locale === "ar" ? "نابلس - فلسطين" : "Nablus, Palestine"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:0597550083"
                  className="hover:text-white transition-colors"
                >
                  0597 550 083
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:aspn.association@gmail.com"
                  className="hover:text-white transition-colors text-xs"
                >
                  aspn.association@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 relative">
              {t.footer.quick_links}
              <span
                className="absolute bottom-0 right-0 w-12 h-0.5 bg-secondary-400 mt-2 block"
                style={{ bottom: "-8px" }}
              />
            </h3>
            <ul className="space-y-2 mt-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="text-secondary-400 text-xs group-hover:translate-x-1 transition-transform"
                      style={{
                        transform: locale === "ar" ? "scaleX(-1)" : "none",
                      }}
                    >
                      ▶
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate CTA */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 relative">
              {locale === "ar" ? "ساهم معنا" : "Support Us"}
              <span
                className="absolute bottom-0 right-0 w-12 h-0.5 bg-secondary-400"
                style={{ bottom: "-8px" }}
              />
            </h3>
            <div className="mt-6 space-y-4">
              <p className="text-primary-200 text-sm leading-relaxed">
                {locale === "ar"
                  ? "تبرعك يُحدث فارقًا حقيقيًا في حياة مئات الأسر الفلسطينية."
                  : "Your donation makes a real difference in the lives of hundreds of Palestinian families."}
              </p>
              <Link
                href={`/${locale}/donate`}
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>💙</span>
                {t.common.donate}
              </Link>
              <div className="bg-primary-800 rounded-xl p-4 text-xs text-primary-200 space-y-1">
                <p className="font-semibold text-white text-sm">
                  {locale === "ar" ? "بنك فلسطين" : "Bank of Palestine"}
                </p>
                <p>IBAN: PS37PINV089802201770030038000</p>
                <p>SWIFT: PINVPS22</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800  mt-16 pt-10  flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-300 text-sm text-center">
            © {currentYear} {t.footer.org_name} | {t.footer.rights}
          </p>
          <p className="text-primary-400 text-xs">
            OCA-PD | {locale === "ar" ? "نابلس، فلسطين" : "Nablus, Palestine"}
          </p>
        </div>
      </div>
    </footer>
  );
}
