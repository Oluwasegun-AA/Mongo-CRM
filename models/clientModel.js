import { CreateModelAndSchema } from '../helpers';

const rules = {
  userId: {
    type: String,
    unique: true,
    required: [true, 'valid userId not supplied'],
  },
  id: {
    type: Number,
    required: [true, 'valid id not supplied'],
  },
  timestamp: { type: Date, default: Date.now },
};

const client = new CreateModelAndSchema('Clients', rules, { versionKey: false });
const ClientModel = client.getModel();
const ClientSchema = client.getSchema();

export { ClientModel, ClientSchema };
