import express from 'express';
import { getMessage } from '../controllers/get-message.js';

const router = express.Router();

// Define the route for GET /api/message
router.get('/message', getMessage);

export { router };
