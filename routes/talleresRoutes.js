import express from 'express';

import { getTalleres, createTalleres, getTalleres, updateTalleres, deleteTalleres } from '../controllers/noticiasController.js';

const router = express.Router();

router.get('/', getTalleres);
router.post('/', createTalleres);
router.get('/:id', getTalleres);
router.patch('/:id', updateTalleres);
router.delete('/:id', deleteTalleres);

export default router;