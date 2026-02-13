
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Film, History, Pencil, Palette } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '精選書單', icon: <BookOpen size={18} /> },
    { path: '/children', label: '兒童與青少年', icon: <Palette size={18} /> },
    { path: '/documentaries', label: '紀錄片影視', icon: <Film size={18} /> },
    { path: '/share', label: '我要推薦', icon: <Pencil size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf8] dark:bg-[#1e1e1e] transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <History className="text-rose-700 dark:text-rose-400 transform group-hover:rotate-12 transition-transform" size={28} />
              <h1 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 serif tracking-wider">
                民主富二代<span className="text-rose-600 dark:text-rose-400">補課小站</span>
              </h1>
            </Link>
            <div className="flex items-center space-x-2">
              <nav className="hidden md:flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all ${location.pathname === item.path
                      ? 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 shadow-sm'
                      : 'text-stone-600 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-stone-50 dark:hover:bg-stone-800'
                      }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>

      <footer className="bg-stone-900 dark:bg-stone-950 text-stone-400 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <History size={40} className="text-rose-800 dark:text-rose-700 opacity-50" />
          </div>
          <p className="serif text-stone-200 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">自由，是每一代人的接力賽。</p>
          <div className="h-px w-20 bg-rose-900 dark:bg-rose-800 mx-auto mb-8"></div>
          <p className="text-xs tracking-widest font-bold uppercase mb-2">本站授權：CC BY 4.0</p>
          <p className="text-[10px] opacity-50">© {new Date().getFullYear()} 民主富二代補課小站. All history belongs to the people.</p>

          <nav className="flex flex-wrap justify-center gap-6 mt-10 md:hidden">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-[11px] font-black uppercase tracking-tighter hover:text-white border-b border-stone-700 dark:border-stone-600 pb-1">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
