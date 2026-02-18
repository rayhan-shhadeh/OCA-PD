"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types/content";

interface HeaderProps {
  locale: Locale;
  t: any;
}

export default function Header({ locale, t }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const altLocale = locale === "ar" ? "en" : "ar";
  const altPath = pathname.replace(`/${locale}`, `/${altLocale}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t.common.home },
    { href: `/${locale}/about`, label: t.common.about },
    { href: `/${locale}/programs`, label: t.common.programs },
    { href: `/${locale}/activities`, label: t.common.activities },
    { href: `/${locale}/news`, label: t.common.news },
    { href: `/${locale}/gallery`, label: t.common.gallery },
    { href: `/${locale}/volunteer`, label: t.common.volunteer },
    { href: `/${locale}/contact`, label: t.common.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`)
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="OCA-PD Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-bold text-sm leading-tight ${locale === "ar" ? "text-right" : "text-left"} text-primary-700`}
              >
                {locale === "ar"
                  ? "جمعية أهالي ذوي الاحتياجات الخاصة"
                  : "Our Children Association"}
              </p>
              <p className="text-primary-500 text-xs font-semibold">OCA-PD</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <Link
              href={altPath}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full border border-primary-200 text-primary-600 text-sm font-medium hover:bg-primary-50 transition-colors"
            >
              <span className="text-base">🌐</span>
              <span>{t.common.lang}</span>
            </Link>

            {/* Donate button */}
            <Link
              href={`/${locale}/donate`}
              className="hidden sm:flex items-center gap-1 px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-bold hover:bg-primary-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>💙</span>
              {t.common.donate}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-gray-100">
            <nav className="flex flex-col gap-1 mt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary-500 text-white"
                      : "text-gray-700 hover:bg-primary-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-2 px-4">
                <Link
                  href={altPath}
                  className="flex-1 text-center py-2 border border-primary-200 text-primary-600 rounded-lg text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {t.common.lang}
                </Link>
                <Link
                  href={`/${locale}/donate`}
                  className="flex-1 text-center py-2 bg-primary-500 text-white rounded-lg text-sm font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {t.common.donate}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
