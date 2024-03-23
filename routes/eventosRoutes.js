import express from 'express';

import { getEventos, createEventos, getEvento, updateEventos, deleteEventos } from '../controllers/eventosController.js';

const router = express.Router();

router.get('/', getEventos);
router.post('/', createEventos);
router.get('/:id', getEvento);
router.patch('/:id', updateEventos);
router.delete('/:id', deleteEventos);

export default router;