
import React from 'react';
import { Book } from '../types';
import { Library, ExternalLink, Hash, ShoppingCart } from 'lucide-react';
import { getBookCoverUrl } from '../utils/bookCover';

interface BookCardProps {
  book: Book;
  onTagClick?: (tag: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onTagClick }) => {
  return (
    <div className="group bg-white dark:bg-stone-800 rounded-lg shadow-sm hover:shadow-md dark:shadow-stone-900/50 transition-all duration-300 overflow-hidden border border-stone-200 dark:border-stone-700 flex flex-col h-full relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 dark:bg-stone-700">
        <img
          src={getBookCoverUrl(book)}
          alt={book.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
      </div>

      <div className="p-3.5 flex flex-col flex-grow">
        <span className="text-rose-700 dark:text-rose-400 text-[9px] font-bold tracking-widest uppercase mb-1">{book.author}</span>
        <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 serif mb-1.5 group-hover:text-rose-800 dark:group-hover:text-rose-400 transition-colors leading-tight line-clamp-2 min-h-[2.5rem]">
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
                className="px-1.5 py-0.5 bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400 text-[8px] font-bold rounded hover:bg-rose-100 dark:hover:bg-rose-900/50 hover:text-rose-700 dark:hover:text-rose-400 transition-colors flex items-center gap-0.5"
              >
                <Hash size={7} />
                {tag}
              </button>
            ))}
          </div>
        )}

        <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed mb-3 line-clamp-3 flex-grow">
          {book.description}
        </p>

        <div className="pt-2.5 border-t border-stone-100 dark:border-stone-700">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={book.links.books}
              target="_blank"
              rel="noopener noreferrer"
              className="flex py-1.5 bg-stone-900 dark:bg-rose-700 hover:bg-rose-800 dark:hover:bg-rose-600 text-white text-[9px] font-bold rounded items-center justify-center space-x-1 transition-colors shadow-sm"
            >
              <ShoppingCart size={10} />
              <span>網路購書</span>
            </a>

            <a
              href={book.links.nlpi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex py-1.5 bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200 text-[9px] font-bold rounded items-center justify-center space-x-1 transition-colors border border-stone-200 dark:border-stone-600"
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
