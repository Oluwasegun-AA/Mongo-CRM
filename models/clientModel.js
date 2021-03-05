import { MakeSchema } from '../helpers';

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

const controller = new MakeSchema('Clients', rules, { versionKey: false });
const ClientModel = controller.getModel();
const ClientSchema = controller.getSchema();

export { ClientModel, ClientSchema };
