import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">404</div>
        <h1 className="text-3xl font-black text-gray-800 mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-500 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
        <Link href="/ar" className="bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition-colors">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
