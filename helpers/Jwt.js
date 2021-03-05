import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { statusCodes,status } from './status';

dotenv.config();
const { SECRETE } = process.env;

class Jwt {
  static encrypt(data) {
    return jwt.sign(data, SECRETE, {
      expiresIn: 60 * 60, // expires in 1 hour
    });
  }

  static decrypt(req, res, token) {
    return new Promise((resolve) => {
      jwt.verify(token, SECRETE, (err, data) => {
        if (err) {
          return responseHandler(
            res,
            {
            code: statusCodes.unauthorized,
            message: 'Invalid Token',
            status: status.error,
            }
          );
        }
        resolve(data);
      });
    });
  }
}

export default Jwt;
