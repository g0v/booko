// 從 .ts 檔案匯入 sheetData
import { sheetData } from './books_data';
import type { Book, Documentary } from './types';

// Fix: Use type assertion to cast imported data to Book[] as the literal strings in level property are compatible with ReadingLevel
export const BOOKS: Book[] = sheetData.books as unknown as Book[];
export const CHILDREN_BOOKS: Book[] = sheetData.childrenBooks as unknown as Book[];

export const DOCUMENTARIES: Documentary[] = sheetData.documentaries as unknown as Documentary[];
