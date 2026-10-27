import { Book } from "@/services/types/book";

function* createIdGenerator(): Generator<number, never, void> {
    let result: number = 0;
    while (true) {
        yield result;
        result += 1;
    }
}

export const books: Book[] = [];

export const bookId = createIdGenerator();
