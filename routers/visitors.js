import express from 'express';
import { getAllVisitor, insertVisitor, updateVisitor, searchById } from '../controllers/visitors.js';

const router = express.Router();

router.get('/', getAllVisitor);

router.post('/', insertVisitor);

router.get('/:id', searchById);

router.post('/update', updateVisitor);

export default router;
