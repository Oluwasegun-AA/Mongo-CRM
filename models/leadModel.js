import { CreateModelAndSchema, } from '../helpers';

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

const lead = new CreateModelAndSchema('Leads', rules, { versionKey: false });
const LeadModel = lead.getModel();
const LeadSchema = lead.getSchema();

export { LeadModel, LeadSchema };
