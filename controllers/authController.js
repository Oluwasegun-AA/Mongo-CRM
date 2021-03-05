import { pick } from 'lodash';
import { UserModel } from '../models';
import connection from '../db/dbSetup';
import {
  responseHandler,
  statusCodes,
  Jwt,
  Password,
} from '../helpers';

const { encrypt } = Jwt;

class Auth {
  static async login(req, res) {
    const validUser = Password.decrypt(req.body.password, res.data.password);
    if (validUser) {
      return responseHandler.success(
        res,
        {
          code: statusCodes.success,
          message: 'Login Success',
          data: {
            token: encrypt(pick(res.data, ['id', 'email', 'role'])),
          }
        }
      );
    }
    return responseHandler.error(
      res,
      {
        code: statusCodes.unauthorized,
        message: unauthorized('Incorrect email or password'),
        status: status.error
      }
    );
  }

  static async signup(req, res) {
    await connection;
    const data = {
      ...req.body.data,
      password: Password.encrypt(req.body.password),
    };
    const model = new UserModel(data);
    await model.save((err, value) => {
      if (err) {
        return responseHandler.error(
          res,
          {
            code: statusCodes.serverError,
            message: 'Internal `Server Error',
            status: status.error
          }
        );
      }
      return responseHandler(
        res,
        {
          code: statusCodes.created,
          message: created('User '),
          data: {
            token: encrypt(pick(value, ['id', 'email'])),
          }
        }
      );
    });
  }
}

export default Auth;
