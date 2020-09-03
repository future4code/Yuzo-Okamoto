import BaseError from "./BaseError";

class GenericError extends BaseError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default GenericError;
