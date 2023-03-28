import express from 'express';

import { getEventos, createEventos, getOneEventos, updateEventos, deleteEventos } from '../controllers/eventosController.js';

const router = express.Router();

router.get('/', getEventos);
router.post('/', createEventos);
router.get('/:id', getOneEventos);
router.patch('/:id', updateEventos);
router.delete('/:id', deleteEventos);

export default router;