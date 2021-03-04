const statusCodes = {
  success: 200,
  badRequest: 400,
  notFound: 404,
  serverError: 500,
};

const status = {
  success: 'success',
  error: 'error',
};

const statusMessages = {
  home: 'Mongo CRM',
  forbidden: 'forbidden route',
  notAllowed: 'Method not allowed',
  serverErrorMessage: (err) => `internal server error ${err}`,
};

export { status, statusCodes, statusMessages };
