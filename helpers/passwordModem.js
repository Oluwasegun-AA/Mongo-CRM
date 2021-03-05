import bcrypt from 'bcrypt';

class Password {
  static encrypt(password) {
    return bcrypt.hashSync(password, 10);
  }

  static decrypt(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

export default Password;
