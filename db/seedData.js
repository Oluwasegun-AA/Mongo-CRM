import mongoose from 'mongoose';
import { Password } from '../helpers';

const object = mongoose.Types.ObjectId;

const user1 = object();
const admin = object();
const client = object();

const randomNumber = Math.floor(Math.random() * 10) + 1;

const roomId = object();

const ipAddress = '225.41.169.163';

const users = [
  {
    _id: user1,
    username: 'user1',
    email: 'user@email.com',
    password: `${Password.encrypt('password')}`,
  },
  {
    _id: admin,
    username: 'damin',
    email: 'test@email.com',
    password: `${Password.encrypt('password')}`,
  },
  {
    _id: client,
    username: 'client',
    email: 'test@email.com',
    password: `${Password.encrypt('password')}`,
  },
];

const clients = [
  {
    userId: client,
    username: 'client1',
    id: randomNumber
  },
];

const messages = [
  {
    message: {
      msg: 'Hello world'
    },
    userId: randomNumber,
    roomID: roomId,
    IP: ipAddress,
    admin,
  },
];

const leads = [
  {
    lead_id: 'demo_id',
    lead_type: randomNumber,
  },
];

const seeds = [
  {
    id: randomNumber,
  },
];

const domains = [
  {
    extra: [{
      somekey: 'some value'
    }],
    status: 'created',
    TimeZone: 'GMT+1',
    qa: [{
      somekey: 'some value'
    }],
    domain_key: 'some key',
    domain_name: 'domain name',
    companyInfo: [{
      somekey: 'some value'
    }],
    domain_email: 'test@email.com',
    facebook_id: 'fbkId',
    facebook_token: 'fbkToken',
  },
];

const chatWidgets = [
  {
    domain_name: 'chatcloud.co',
    widget_settings: {
      theme_color: 'linear-gradient()',
      image_base64: 'base64;image',
      font_size: '24px',
      position: 'bottom-right',
      message_size: '8px',
      timestamp_size: '8px',
      agent_name: 'Felicia'
    }
  }
];


export {
  seeds,
  users,
  leads,
  clients,
  domains,
  messages,
  chatWidgets,
};
