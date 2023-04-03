import express from 'express';

import { getTalleres, createTalleres, getTaller, updateTalleres, deleteTalleres } from '../controllers/noticiasController.js';

const router = express.Router();

router.get('/', getTalleres);
router.post('/', createTalleres);
router.get('/:id', getTaller);
router.patch('/:id', updateTalleres);
router.delete('/:id', deleteTalleres);

export default router;