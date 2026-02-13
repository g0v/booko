
import React, { useState } from 'react';
import { Documentary } from '../types';
import { Calendar, User, Search, ImageOff, ArrowRight } from 'lucide-react';

interface DocCardProps {
  doc: Documentary;
}

const DocCard: React.FC<DocCardProps> = ({ doc }) => {
  const [imageError, setImageError] = useState(false);
  // 依照片名搜尋 YouTube 相關影片的連結
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent('紀錄片 ' + doc.title)}`;

  return (
    <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-sm dark:shadow-stone-900/50 border border-stone-100 dark:border-stone-700 overflow-hidden flex flex-col md:flex-row h-full group hover:shadow-xl dark:hover:shadow-stone-900/70 transition-all duration-500">
      {/* Film Screenshot Section (Vertical 2:3 Ratio) */}
      <div className="md:w-[280px] shrink-0 relative overflow-hidden bg-stone-900 aspect-[2/3] md:aspect-[2/3]">
        <a 
          href={searchUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full relative group/poster"
        >
          {imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-700">
              <ImageOff size={40} className="mb-2 opacity-20" />
              <span className="text-[10px] serif">Screenshot Unavailable</span>
            </div>
          ) : (
            <>
              <img
                src={doc.thumbnail}
                alt={doc.title}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/poster:scale-110 opacity-90 group-hover/poster:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover/poster:opacity-20 transition-opacity"></div>
            </>
          )}
          
          {/* Search Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/poster:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 bg-rose-600 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 scale-90 group-hover/poster:scale-100">
              <Search size={24} className="text-white" />
            </div>
          </div>
          
          {/* Cinema Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[8px] font-black px-2 py-1 rounded-sm uppercase tracking-[0.3em] border border-white/20">
            Documentary Stills
          </div>
        </a>
      </div>
      
      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow justify-center bg-white dark:bg-stone-800 transition-colors duration-300">
        <div className="flex flex-wrap items-center gap-4 text-stone-400 dark:text-stone-500 text-[11px] font-bold mb-4 uppercase tracking-wider">
          <div className="flex items-center space-x-1.5">
            <Calendar size={13} className="text-rose-700/50 dark:text-rose-400/50" />
            <span>首映年份：{doc.year}</span>
          </div>
          <div className="flex items-center space-x-1.5 border-l border-stone-200 dark:border-stone-600 pl-4">
            <User size={13} className="text-rose-700/50 dark:text-rose-400/50" />
            <span>導演：{doc.director}</span>
          </div>
        </div>
        
        <h3 className="text-3xl font-black text-stone-900 dark:text-stone-100 serif mb-4 group-hover:text-rose-800 dark:group-hover:text-rose-400 transition-colors leading-tight">
          《{doc.title}》
        </h3>

        <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-10 max-w-xl serif italic border-l-4 border-rose-100 dark:border-rose-800 pl-6">
          {doc.description}
        </p>
        
        <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-stone-100 dark:border-stone-700">
          <a
            href={searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center bg-stone-900 dark:bg-rose-700 hover:bg-rose-800 dark:hover:bg-rose-600 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-rose-200 dark:hover:shadow-rose-900/50 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              查找 YouTube 相關影片
              <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
          </a>

          <div className="flex flex-col items-end">
            <span className="text-[10px] text-stone-400 dark:text-stone-500 font-bold uppercase tracking-widest mb-1">Source: YouTube Search</span>
            <span className="text-[10px] text-rose-700/60 dark:text-rose-400/60 font-medium">點擊按鈕或圖片探索更多紀錄片資訊</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocCard;
