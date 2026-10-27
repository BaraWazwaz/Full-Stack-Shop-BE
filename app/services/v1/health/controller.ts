import { OK } from "@/services/types/http-status";
import { RequestHandler } from "express";

export const getTimestamp: RequestHandler<
    Record<string, never>,
    Date,
    Record<string, never>,
    Record<string, never>
> = (req, res) => {
    return res.status(OK).send(new Date());
}

export const getAuthor: RequestHandler<
    Record<string, never>,
    string,
    Record<string, never>,
    Record<string, never>
> = (req, res) => {
    return res.status(OK).send('Bara Wazwaz');
}
