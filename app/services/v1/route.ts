import { Router } from "express";
import books from './book/router.js';
import health from './health/router.js';

const router = Router();

router.use('/books', books);
router.use('/health', health);

export default router;
