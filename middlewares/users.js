import { isEmpty, pick } from 'lodash';
import { UserModel } from '../models';
import {
  Jwt,
  GetPayloadData,
  responseHandler,
  statusCodes,
} from '../helpers';

const checkUserExist = async (req, res, next) => {
  const {
    url,
    params: { id },
  } = req;
  const { email } = GetPayloadData.login(req);
  const data = await UserModel.findOne({ email });
  if (!isEmpty(data) && (url === '/signup' || url === '/')) {
    return responseHandler(
      res,
      {
      code:statusCodes.conflict,
      message: 'User Already signed up',
      status: status.error
      }
    );
  }
  if (isEmpty(data) && (url === '/login' || id)) {
    return responseHandler(
      res,
      {
      code: statusCodes.notFound,
      message: 'User not found',
      status: status.error
      }
    );
  }
  if (url === '/login') {
    res.data = pick(data, ['uusername','email', 'password']);
  }
  next();
};

const checkUserInParamExist = async (req, res, next) => {
  const response = await UserModel.findById(req.params.id);
  if (!response) {
    return responseHandler(
      res,
      {
      code: statusCodes.notFound,
      message: 'User not found',
      status: status.error
      }
    );
  }
  req.data = response;
  next();
};

const checkUserInToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  const data = await Jwt.decrypt(req, res, token);
  const user = await UserModel.findOne({ username: data.username });
  if (isEmpty(data) || isEmpty(user)) {
    return responseHandler(
      res,
      {
      code: statusCodes.unauthorized,
      message: 'Unauthorized, Invalid Token',
      status: status.error
      }
    );
  }
  next();
};


export {
  checkUserExist,
  checkUserInParamExist,
  checkUserInToken,
  checkAdminInToken,
};