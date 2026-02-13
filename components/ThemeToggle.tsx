import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, Theme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, cycleTheme } = useTheme();

  const icons: Record<Theme, React.ReactNode> = {
    light: <Sun size={18} />,
    dark: <Moon size={18} />,
    system: <Monitor size={18} />,
  };

  const labels: Record<Theme, string> = {
    light: '淺色模式',
    dark: '深色模式',
    system: '跟隨系統',
  };

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
      title={labels[theme]}
      aria-label={labels[theme]}
    >
      {icons[theme]}
    </button>
  );
};

export default ThemeToggle;
