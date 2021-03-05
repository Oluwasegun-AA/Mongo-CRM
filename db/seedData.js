import mongoose from 'mongoose';
import { Password } from '../helpers';

const object = mongoose.Types.ObjectId;

const user1 = object();
const user2 = object();

const privateChat1 = object();
const privateChat2 = object();

const groupChat1 = object();
const groupChat2 = object();

const users = [
  {
    _id: user1,
    username: 'user1',
    email: 'user@email.com',
    password: `${Password.encrypt('password')}`,
  },
  {
    _id: user2,
    username: 'admin',
    email: 'test@email.com',
    password: `${Password.encrypt('password')}`,
  }, 
];


export {
  users,
};
