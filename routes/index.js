import express from 'express';
import dotenv from 'dotenv';
import auth from './authRoute';

dotenv.config();
const router = express.Router();

router.use('/auth', auth);

export default router;
