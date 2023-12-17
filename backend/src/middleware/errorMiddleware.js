import { logger } from "../utils/logger.js";

const notFound = (req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
}

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //Mongoose not found error
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found';
  }
  logger.debug(`${message}. Stack: ${err.stack}`)
  res.status(statusCode).json({
    message: message,
    stack: err.stack
  })
}

export { notFound, errorHandler }