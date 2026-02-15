
import React, { useState } from 'react';
import { Documentary } from '../types';
import { Calendar, User, Search, Video, ArrowRight } from 'lucide-react';

interface DocCardProps {
  doc: Documentary;
}

const DocCard: React.FC<DocCardProps> = ({ doc }) => {
  const [imageError, setImageError] = useState(false);
  // 依照片名搜尋 YouTube 相關影片的連結
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent('紀錄片 ' + doc.title)}`;

  // 輔助函式：針對會擋外連的網域使用代理
  const getImageUrl = (url: string) => {
    if (!url) return '';
    const absoluteUrl = url.startsWith('http') ? url : `https://${url}`;
    // 使用 wsrv.nl 並對全網址直接進行編碼
    // 這樣對已編碼的 Wikipedia 網址會形成雙重編碼（% -> %25），可規避 429 錯誤
    return `https://wsrv.nl/?url=${encodeURIComponent(absoluteUrl)}`;
  };

  return (
    <div className="group relative flex flex-col bg-white dark:bg-stone-900 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 hover:border-rose-300 dark:hover:border-rose-900/50 transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/5 dark:hover:shadow-rose-900/10 hover:-translate-y-1 h-full">
      {/* Film Poster Section */}
      <div className="relative aspect-[2/3] overflow-hidden bg-stone-100 dark:bg-stone-800">
        <a
          href={searchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          {!doc.thumbnail || imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 dark:text-stone-600 bg-stone-100 dark:bg-stone-800">
              <div className="relative">
                <Video size={48} strokeWidth={1} className="text-rose-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video size={24} strokeWidth={1.5} className="text-rose-500/40 animate-pulse" />
                </div>
              </div>
              <span className="mt-4 text-[9px] serif italic tracking-[0.2em] uppercase opacity-40">No Poster Available</span>
            </div>
          ) : (
            <>
              <img
                src={getImageUrl(doc.thumbnail)}
                alt={doc.title}
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
            </>
          )}

          {/* Type Badge */}
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-sm text-[8px] font-black text-white/90 uppercase tracking-widest z-10">
            Film
          </div>

          {/* Quick Info Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1 transition-all duration-500 group-hover:translate-y-1 group-hover:opacity-0">
            <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-medium">
              <Calendar size={10} className="text-rose-400" />
              {doc.year}
            </div>
          </div>

          {/* Search Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-rose-900/40 backdrop-blur-[2px]">
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
              <Search size={18} className="text-white" />
            </div>
          </div>
        </a>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-black text-stone-900 dark:text-stone-100 serif mb-2 leading-tight group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors line-clamp-2">
          《{doc.title}》
        </h3>

        <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-tighter">
          <User size={10} strokeWidth={2.5} className="text-rose-800/50 dark:text-rose-400/50" />
          <span className="truncate">{doc.director}</span>
        </div>

        <p className="text-stone-600 dark:text-stone-400 text-[11px] leading-relaxed mb-4 serif line-clamp-3">
          {doc.description}
        </p>

        {doc.tags && doc.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
            {doc.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 bg-stone-50 dark:bg-stone-800/50 text-stone-500 dark:text-stone-500 text-[9px] font-bold rounded border border-stone-100 dark:border-stone-700/50"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-col gap-2">
          <a
            href={searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 bg-stone-900 dark:bg-stone-800 hover:bg-rose-700 dark:hover:bg-rose-600 text-white text-[11px] font-black rounded transition-all duration-300"
          >
            查找 YouTube
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocCard;
