import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.use('/', () => 'Mongo CRM');

export default router;
