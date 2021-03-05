import express from 'express';

import { catchAllError } from '../helpers';
import { AuthController } from '../controllers';
import {
  validateSignupData,
  validateLoginData,
  checkUserExist,
} from '../middlewares';

const auth = express.Router();
const { login, signup } = AuthController;

auth.post('/login', validateLoginData, checkUserExist, login);
auth.post('/signup', validateSignupData, checkUserExist, signup);

catchAllError(auth);

export default auth;
