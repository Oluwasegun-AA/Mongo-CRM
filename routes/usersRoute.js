import express from 'express';

import { catchAllError } from '../helpers';
import { UsersController } from '../controllers';
import {
  checkUserInToken,
  checkUserInParamExist
} from '../middlewares';

const users = express.Router();
const {
  getUser,
  getUserAndCount,
} = UsersController;

users.get('/users', getUserAndCount);
users.get('/:id', checkUserInToken, checkUserInParamExist, getUser);


catchAllError(users);

export default users;
