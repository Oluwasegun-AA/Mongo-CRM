import { isEmpty } from 'lodash';
import { UserModel, LoginModel } from '../models';
import {
  status,
  validate,
  statusCodes,
  GetPayloadData,
  responseHandler,
} from '../helpers';

const validateSignupData = async (req, res, next) => {
  const data = GetPayloadData.signup(req);
  const error = validate(UserModel, data);
  if (!isEmpty(error)) {
    return responseHandler(
      res,
      {
        status: status.error,
        code: statusCodes.badRequest,
        message: Object.values(error.errors).flatMap(err => err.message)
      }
    );
  }
  req.body.data = data;
  next();
};

const validateLoginData = (req, res, next) => {
  const data = GetPayloadData.login(req);
  const error = validate(LoginModel, data);
  if (!isEmpty(error)) {
    return responseHandler(
      res,
      {
        status: status.error,
        code: statusCodes.badRequest,
        message: Object.values(error.errors).flatMap(err => err.message)
      }
    );
  }
  next();
};

export { validateSignupData, validateLoginData };
