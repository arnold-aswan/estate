export const errorHandler = (statusCode, msg) => {
  const error = new Error();
  error.status = statusCode;
  error.message = msg;
  return error;
};
