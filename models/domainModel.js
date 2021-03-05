import { Schema } from 'mongoose';
import { MakeSchema } from '../helpers';

const rules = {
  extra: {
    type: Schema.Types.Array,
  },
  status: {
    type: String,
    required: [true, 'valid status not supplied'],
  },
  TimeZone: {
    type: String,
    required: [true, 'valid TimeZone not supplied'],
  },
  qa: {
    type: Schema.Types.Array,
  },
  domain_key: {
    type: String,
    required: [true, 'valid TimeZone not supplied'],
  },
  domain_name: {
    type: String,
    required: [true, 'valid TimeZone not supplied'],
  },
  companyInfo: {
    type: Schema.Types.Array,
  },
  domain_email: {
    type: String,
    required: [true, 'valid domain_email not supplied'],
  },
  facebook_id: {
    type: String,
    required: [true, 'valid facebook_id not supplied'],
  },
  facebook_token: {
    type: String,
    required: [true, 'valid facebook_token not supplied'],
  },
};

const controller = new MakeSchema('Domains', rules, { versionKey: false });
const DomainModel = controller.getModel();
const DomainSchema = controller.getSchema();

export { DomainModel, DomainSchema };
