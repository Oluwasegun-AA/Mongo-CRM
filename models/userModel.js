import { pick } from 'lodash';
import { CreateModelAndSchema } from '../helpers';

const rules = {
  email: {
    type: String,
    maxlength: 30,
    minlength: 10,
    unique: true,
    required: [true, 'email not supplied'],
  },
  username: {
    type: String,
    maxlength: 30,
    minlength: 3,
    unique: true,
    required: [true, 'username not supplied'],
  },
  password: {
    type: String,
    required: [true, 'password not supplied'],
  }
};

const user = new CreateModelAndSchema('Users', rules);
const login = new CreateModelAndSchema(
  'Login',
  pick(rules, ['username', 'password'])
);
const LoginModel = login.getModel();
const UserModel = user.getModel();
const UserSchema = user.getSchema();

export { UserModel, UserSchema, LoginModel };
