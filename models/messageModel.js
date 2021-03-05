import { MakeSchema } from '../helpers';

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

const controller = new MakeSchema('Messages', rules, { versionKey: false });
const MessageModel = controller.getModel();
const MessageSchema = controller.getSchema();

export { MessageModel, MessageSchema };
