import connection from './dbSetup';
import {
  users,
  leads,
  seeds,
  domains,
  clients,
  messages,
} from './seedData';
import {
  UserModel,
  SeedModel,
  LeadModel,
  DomainModel,
  ClientModel,
  MessageModel,
} from '../models';

const dropCollections = async () => {
  const conn = await connection;
  await conn.dropDatabase();
};

const createCollections = async () => {
  UserModel.insertMany(users);
  ClientModel.insertMany(clients);
  MessageModel.insertMany(messages);
  LeadModel.insertMany(leads);
  DomainModel.insertMany(domains);
  SeedModel.insertMany(seeds);
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
