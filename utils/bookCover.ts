import type { Book } from '../types';

export const getBookCoverUrl = (book: Book): string => {
  // 1. If we have a local or manually provided cover image, use it first
  if (book.coverImage) {
    if (book.coverImage.startsWith('http://')) {
      return book.coverImage.replace('http://', 'https://');
    }
    // If it's a local path (e.g. /assets/covers/...) or regular https URL, return as is
    return book.coverImage;
  }

  // 2. Fallback: Pattern to extract product ID from books.com.tw product links
  const productUrlPattern = /https?:\/\/www\.books\.com\.tw\/products\/(\w+)/;

  if (book.links?.books) {
    const match = book.links.books.match(productUrlPattern);

    if (match?.[1]) {
      const productId = match[1];
      if (productId.length >= 8) {
        const part1 = productId.substring(0, 3);
        const part2 = productId.substring(3, 6);
        const part3 = productId.substring(6, 8);
        return `https://www.books.com.tw/img/${part1}/${part2}/${part3}/${productId}.jpg`;
      }
    }
  }

  return `${import.meta.env?.BASE_URL || '/'}default-book-cover.png`;
};
