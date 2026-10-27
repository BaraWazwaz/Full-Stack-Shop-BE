import type { Book } from "@/services/types/book";
import type { RequestHandler } from "express";
import type { DeepPartial } from "@/types/partial";
import { ACCEPTED, CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from "@/services/types/http-status";
import { createBook, editBook, findBookById, readAllBooks, removeBook, replaceBook } from "./database.js";

export const getAllBooks: RequestHandler<
    Record<string, never>,
    Book[] | { error: string },
    never,
    Record<string, never>
> = (req, res) => { 
    try {
        const data = readAllBooks();
        return res.status(OK).json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(INTERNAL_SERVER_ERROR).send({ error: error.message });
        } else {
            return res.status(INTERNAL_SERVER_ERROR).send();
        }
    }
}

export const getBookById: RequestHandler<
    { id: string },
    Book | { error: string },
    never,
    Record<string, never>
> = (req, res) => {
    try {
        const book = findBookById(req.params.id);
        return res.status(OK).json(book);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(NOT_FOUND).send({ error: error.message });
        } else {
            return res.status(INTERNAL_SERVER_ERROR).send();
        }
    }
}

export const postBook: RequestHandler<
    Record<string, never>,
    Book | { error: string },
    Omit<Book, 'id'>,
    Record<string, never>
> = (req, res) => {
    try {
        const book = createBook(req.body);
        return res.status(CREATED).json(book);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(NOT_FOUND).send({ error: error.message });
        } else {
            return res.status(INTERNAL_SERVER_ERROR).send();
        }
    }
}

export const putBook: RequestHandler<
    { id: string },
    Book | { error: string },
    Omit<Book, 'id'>,
    Record<string, never>
> = (req, res) => {
    try {
        const book = replaceBook(req.params.id, req.body);
        res.status(ACCEPTED).json(book);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(NOT_FOUND).send({ error: error.message });
        } else {
            return res.status(INTERNAL_SERVER_ERROR).send();
        }
    }
}

export const patchBook: RequestHandler<
    { id: string },
    Book | { error: string },
    DeepPartial<Omit<Book, 'id'>>,
    Record<string, never>
> = (req, res) => {
    try {
        const book = editBook(req.params.id, req.body);
        res.status(ACCEPTED).json(book);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(NOT_FOUND).send({ error: error.message });
        } else {
            return res.status(INTERNAL_SERVER_ERROR).send();
        }
    }
}

export const deleteBook: RequestHandler<
    { id: string },
    Book | { error: string },
    Record<string, never>,
    Record<string, never>
> = (req, res) => {
    try {
        const book = removeBook(req.params.id);
        res.status(ACCEPTED).json(book);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(NOT_FOUND).send({ error: error.message });
        } else {
            return res.status(INTERNAL_SERVER_ERROR).send();
        }
    }
}
