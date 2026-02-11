
import React from 'react';
import { Book } from '../types';
import { Library, ExternalLink, Hash } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onTagClick?: (tag: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onTagClick }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-stone-200 flex flex-col h-full relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
      </div>
      
      <div className="p-3.5 flex flex-col flex-grow">
        <span className="text-rose-700 text-[9px] font-bold tracking-widest uppercase mb-1">{book.author}</span>
        <h3 className="text-sm font-bold text-stone-900 serif mb-1.5 group-hover:text-rose-800 transition-colors leading-tight line-clamp-2 min-h-[2.5rem]">
          {book.title}
        </h3>
        
        {/* Tags Section - Clickable */}
        {book.tags && book.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2.5">
            {book.tags.map((tag) => (
              <button 
                key={tag} 
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick?.(tag);
                }}
                className="px-1.5 py-0.5 bg-stone-100 text-stone-500 text-[8px] font-bold rounded hover:bg-rose-100 hover:text-rose-700 transition-colors flex items-center gap-0.5"
              >
                <Hash size={7} />
                {tag}
              </button>
            ))}
          </div>
        )}

        <p className="text-stone-600 text-[11px] leading-relaxed mb-3 line-clamp-3 flex-grow">
          {book.description}
        </p>
        
        <div className="pt-2.5 border-t border-stone-100 space-y-2.5">
          <div>
            <div className="grid grid-cols-3 gap-1 mb-2">
              <a
                href={book.links.books}
                target="_blank"
                rel="noopener noreferrer"
                title="博客來"
                className="py-1 bg-stone-50 hover:bg-rose-50 text-stone-700 hover:text-rose-700 text-[9px] font-bold rounded text-center transition-colors border border-stone-100"
              >
                博客來
              </a>
              <a
                href={book.links.eslite}
                target="_blank"
                rel="noopener noreferrer"
                title="誠品"
                className="py-1 bg-stone-50 hover:bg-rose-50 text-stone-700 hover:text-rose-700 text-[9px] font-bold rounded text-center transition-colors border border-stone-100"
              >
                誠品
              </a>
              <a
                href={book.links.kingstone}
                target="_blank"
                rel="noopener noreferrer"
                title="金石堂"
                className="py-1 bg-stone-50 hover:bg-rose-50 text-stone-700 hover:text-rose-700 text-[9px] font-bold rounded text-center transition-colors border border-stone-100"
              >
                金石堂
              </a>
            </div>
            
            <a
              href={book.links.nlpi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-[9px] font-bold rounded items-center justify-center space-x-1 transition-colors border border-stone-200"
            >
              <Library size={10} />
              <span>國資圖借閱</span>
              <ExternalLink size={8} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
