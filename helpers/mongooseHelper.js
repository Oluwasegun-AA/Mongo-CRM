import mongoose from 'mongoose';

const { Schema } = mongoose;

class MakeSchema {
  constructor(collectionName, schemaObj, customSettings) {
    this.schemaRules = schemaObj;
    this.collectionName = collectionName;
    this.CreatedSchema = new Schema(this.schemaRules, customSettings);
  }

  getModel() {
    return mongoose.model(
      this.collectionName,
      this.CreatedSchema,
      this.collectionName
    );
  }

  getSchema() {
    return this.CreatedSchema;
  }
}

export { MakeSchema, Schema };
