import { bookId, books } from "@/data/data";
import type { Book } from "@/services/types/book";
import type { DeepPartial } from "@/types/partial";
import { mergeDeepPartial, mergePartial } from "@/utils/partial";

export function readAllBooks() {
    return structuredClone(books);
}

export function findBookById(id: string) {
    const book = books.find(book => book.id === id);
    if (!book)
        throw new Error('book not found');
    return structuredClone(book);
}

export function createBook(body: Omit<Book, 'id'>) {
    const book: Book = { id: `${bookId.next().value}`, ...body };
    books.push(book);
    return structuredClone(book);
}

export function replaceBook(id: string, body: Omit<Book, 'id'>) {
    const index = books.findIndex(x => x.id === id);
    if (index === -1)
        throw new Error('book not found');
    books[index] = mergePartial(books[index], body);
    return structuredClone(books[index]);
}

export function editBook(id: string, body: DeepPartial<Omit<Book, 'id'>>) {
    const index = books.findIndex(x => x.id === id);
    if (index === -1)
        throw new Error('book not found');
    books[index] = mergeDeepPartial(books[index], body);
    return structuredClone(books[index]);
}

export function removeBook(id: string) {
    const index = books.findIndex(x => x.id === id);
    if (index === -1)
        throw new Error('book not found');
    return structuredClone(books.splice(index, 1)[0]);
}
