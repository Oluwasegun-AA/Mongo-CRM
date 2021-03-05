import mongoose from 'mongoose';
import { MakeSchema, validatePath } from '../helpers';

const { ObjectId } = mongoose.Types;

const rules = {
    lead_id: {
        type: String,
        unique: true,
        required: [true, 'valid userId not supplied'],
    },
    lead_type: {
        type: Number,
        required: [true, 'valid id not supplied'],
    },
    timestamp: { type: Date, default: Date.now },
};

const controller = new MakeSchema('Leads', rules, { versionKey: false });
const LeadModel = controller.getModel();
const LeadSchema = controller.getSchema();

export { LeadModel, LeadSchema };
