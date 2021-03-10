import express from 'express';
import dotenv from 'dotenv';
import auth from './authRoute';
import users from './usersRoute';

dotenv.config();
const router = express.Router();

router.use('/auth', auth);
router.use('/users', users);

export default router;
