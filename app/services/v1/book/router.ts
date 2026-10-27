import { Router } from "express";
import {
    getAllBooks,
    getBookById,
    postBook,
    putBook,
    patchBook,
    deleteBook,
} from "./controller.js";

const router = Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', postBook);
router.put('/:id', putBook);
router.patch('/:id', patchBook);
router.delete('/:id', deleteBook);

export default router;
