const validate = (Model, data) => {
  const newModel = new Model(data);
  const error = newModel.validateSync();
  return error;
};


export default validate;
