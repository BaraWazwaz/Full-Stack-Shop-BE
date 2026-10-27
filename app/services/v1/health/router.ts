import { Router } from "express";
import { getTimestamp, getAuthor } from "./controller.js";

const router = Router();

router.get('/timestamp', getTimestamp);
router.get('/author', getAuthor);

export default router;
