import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const { DATABASE_URL } = process.env;

const connect = async () => {
  const db = mongoose.connection;
  mongoose.connection.on('open', () => {
    process.stdout.write('Connected to mongo server.\n');
  });

  await mongoose.connect(
    DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      config: { autoIndex: false },
    },
    err => {
      if (err) {
        process.stdout.write(`Could not connect to mongo server!\n ${err} \n`);
        process.exit(1);
      }
    }
  );
  return db;
};

const connection = connect();

export default connection;
