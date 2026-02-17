import type { Metadata } from "next";
import "./globals.css";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "جمعية أهالي ذوي الاحتياجات الخاصة - أبناؤنا | OCA-PD",
  description:
    "جمعية فلسطينية غير حكومية تعتني بحقوق الأشخاص ذوي الإعاقة وتسعى لدمجهم في المجتمع",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
