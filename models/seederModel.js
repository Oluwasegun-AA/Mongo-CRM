import { MakeSchema } from '../helpers';

const rules = {
    id: {
        type: Number,
        required: [true, 'valid id not supplied'],
    },
};

const controller = new MakeSchema('Seeds', rules, { versionKey: false });
const SeedModel = controller.getModel();
const SeedSchema = controller.getSchema();

export { SeedModel, SeedSchema };
