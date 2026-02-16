import type React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const NotFoundView: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-700 min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <SEO title="找不到頁面" description="您所尋找的頁面不存在。" />
      <div className="text-8xl font-black text-stone-200 dark:text-stone-700 serif mb-4">404</div>
      <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 serif mb-4">找不到這個頁面</h2>
      <p className="text-stone-500 dark:text-stone-400 mb-8">您所尋找的頁面可能已移除，或是網址有誤。</p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 font-bold text-white bg-rose-700 dark:bg-rose-600 rounded-full hover:bg-rose-800 dark:hover:bg-rose-500 transition-colors"
      >
        回到首頁
      </Link>
    </section>
  );
};

export default NotFoundView;
