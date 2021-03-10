import { CreateModelAndSchema } from '../helpers';

const rules = {
  domain_name: {
    type: String,
    unique: true,
    required: [true, 'valid userId not supplied'],
  },
  widget_settings: {
    theme_color: {
      type: String,
      unique: true,
      required: [true, 'valid theme_color not supplied'],
    },
    image_base64: {
      type: String,
      unique: true,
      required: [true, 'valid image_base64 not supplied'],
    },
    font_size: {
      type: String,
      unique: true,
      required: [true, 'valid font_size not supplied'],
    },
    position: {
      type: String,
      unique: true,
      required: [true, 'valid position not supplied'],
    },
    message_size: {
      type: String,
      unique: true,
      required: [true, 'valid message_size not supplied'],
    },
    timestamp_size: {
      type: String,
      unique: true,
      required: [true, 'valid timestamp_size not supplied'],
    },
    agent_name: {
      type: String,
      unique: true,
      required: [true, 'valid agent_name not supplied'],
    }
  }
};

const chatWidget = new CreateModelAndSchema('ChatWidgets', rules, { versionKey: false });
const ChatWidgetModel = chatWidget.getModel();
const ChatWidgetSchema = chatWidget.getSchema();

export { ChatWidgetModel, ChatWidgetSchema };
