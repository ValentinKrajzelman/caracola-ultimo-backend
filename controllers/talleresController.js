import express from 'express';

import { getNoticias, createNoticias, getNoticias, updateNoticias, deleteNoticias } from '../controllers/eventosController.js';

const router = express.Router();

router.get('/', getNoticias);
router.post('/', createNoticias);
router.get('/:id', getNoticias);
router.patch('/:id', updateNoticias);
router.delete('/:id', deleteNoticias);

export default router;