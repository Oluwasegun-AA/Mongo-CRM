import { CreateModelAndSchema } from '../helpers';

const rules = {
  message: {
    msg: {
      type: String,
      required: [true, 'valid message not supplied'],
    },
    timestamp: {
      type: String,
      default: Date.now,
      required: [true, 'valid timestamp not supplied'],
    },
  },
  userId: {
    type: Number,
    required: [true, 'valid userId not supplied'],
  },
  roomID: {
    type: String,
    required: [true, 'roomID not supplied'],
  },
  IP: {
    type: String,
    required: [true, 'valid IP not supplied'],
  },
  admin: {
    type: String,
    required: [true, 'valid admin not supplied'],
  },
  timestamp: { type: Number, default: Date.now },
};

const message = new CreateModelAndSchema('Messages', rules, { versionKey: false });
const MessageModel = message.getModel();
const MessageSchema = message.getSchema();

export { MessageModel, MessageSchema };
