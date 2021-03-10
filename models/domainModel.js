import { Schema } from 'mongoose';
import { CreateModelAndSchema } from '../helpers';

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

const domain = new CreateModelAndSchema('Domains', rules, { versionKey: false });
const DomainModel = domain.getModel();
const DomainSchema = domain.getSchema();

export { DomainModel, DomainSchema };
