import express from 'express';
import { UsersController } from '../controllers';
import {
  checkUserInParamExist
} from '../middlewares';

const users = express.Router();
const {
  getUser,
  getUserAndCount,
} = UsersController;

users.get('/', getUserAndCount);
users.get('/:username', checkUserInParamExist, getUser);


export default users;
