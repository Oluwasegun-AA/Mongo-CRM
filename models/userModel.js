import { pick } from 'lodash';
import { MakeSchema } from '../helpers';

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
    minlength: 8,
    required: [true, 'password not supplied'],
  }
};

const controller = new MakeSchema('Users', rules);
const loginController = new MakeSchema(
  'Login',
  pick(rules, ['email', 'password'])
);
const LoginModel = loginController.getModel();
const UserModel = controller.getModel();
const UserSchema = controller.getSchema();

export { UserModel, UserSchema, LoginModel };
