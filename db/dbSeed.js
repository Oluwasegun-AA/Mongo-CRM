import connection from './dbSetup';
import {
  users,
} from './seedData';
import {
  UserModel
} from '../models';

const dropCollections = async () => {
  const conn = await connection;
  await conn.dropDatabase();
};

const createCollections = async () => {
  UserModel.insertMany(users);
};

const seedDb = async () => {
  try {
    await dropCollections();
    await createCollections();
    process.stdout.write('db seeded');
  } catch (err) {
    process.stdout.write(`Seeding error ${err}`);
  }
};

seedDb();
