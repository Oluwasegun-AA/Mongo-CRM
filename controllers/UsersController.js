import { omit } from 'lodash';
import { UserModel } from '../models';
import connection from '../db/dbSetup';
import {
  status,
  statusCodes,
  responseHandler,
} from '../helpers';

class Users {
  static async getUserAndCount(req, res) {
    await connection;
    try {
      const data = await UserModel.find();
      const values = JSON.parse(JSON.stringify(data));
      const response = values.flatMap(item => omit(item, ['password']));
      responseHandler(
        res,
        {
          code: statusCodes.success,
          message: 'Users retrieved',
          status: status.success,
          data: { users: response, count: response.length }
        }
      );
    } catch (err) {
      responseHandler(
        res,
        {
          code: statusCodes.serverError,
          message: 'internal server error'
        }
      );
    }
  }

  static async getNewUsersCount(req, res) {
    await connection;
    try {
      const data = await UserModel.find();
      const values = JSON.parse(JSON.stringify(data));
      const response = values.flatMap(item => omit(item, ['password']));
      responseHandler(
        res,
        {
          code: statusCodes.success,
          message: 'Users retrieved',
          status: status.success,
          data: { users: response, count: response.length }
        }
      );
    } catch (err) {
      responseHandler(
        res,
        {
          code: statusCodes.serverError,
          message: 'internal server error'
        }
      );
    }
  }

  static async getUser(req, res) {
    await connection;
    const data = JSON.parse(JSON.stringify(req.data));
    return responseHandler(
      res,
      {
        code: statusCodes.success,
        message: 'User retrieved',
        data: omit(data, ['password'])
      }
    );
  }
}

export default Users;
