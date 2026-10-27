export interface Book {
  id: string;
  isbn: string;
  title: string;
  pageCount: number;
  description: string;
  publishDate: {
    day: number;
    month: number;
    year: number;
  };
}