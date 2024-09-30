import express from 'express';
import { getAllEvents, createEvent, updateVisitor, searchById } from '../controllers/events.js';

const router = express.Router();

router.get('/', getAllVisitor);

router.post('/', insertVisitor);

router.get('/:id', searchById);

router.post('/update', updateVisitor);

export default router;
