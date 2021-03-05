const statusCodes = {
  success: 200,
  notFound: 404,
  conflict: 409,
  badRequest: 400,
  serverError: 500,
  unauthorized: 401
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
