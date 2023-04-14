import express from 'express';

import { getNoticias, createNoticias, getNoticia, updateNoticias, deleteNoticias } from '../controllers/noticiasController.js';

const router = express.Router();

router.get('/', getNoticias);
router.post('/', createNoticias);
router.get('/:id', getNoticia);
router.patch('/:id', updateNoticias);
router.delete('/:id', deleteNoticias);

export default router;