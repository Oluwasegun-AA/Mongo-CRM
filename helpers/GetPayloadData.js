import { pick } from 'lodash';

class GetPayloadData {
  static login(req) {
    return pick(req.body, ['username', 'password']);
  }

  static signup(req) {
    return pick(req.body, [
      'email',
      'password',
      'username',
      'firstName',
      'lastName',
    ]);
  }

  static chat(req) {
    return pick(req.body, ['users', 'groupName', 'admin']);
  }

  static message(req) {
    return pick(req.body, ['chatId', 'userId', 'message']);
  }
}

export default GetPayloadData;
