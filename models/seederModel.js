import { CreateModelAndSchema } from '../helpers';

const rules = {
  id: {
    type: Number,
    required: [true, 'valid id not supplied'],
  },
};

const seeder = new CreateModelAndSchema('Seeds', rules, { versionKey: false });
const SeedModel = seeder.getModel();
const SeedSchema = seeder.getSchema();

export { SeedModel, SeedSchema };
