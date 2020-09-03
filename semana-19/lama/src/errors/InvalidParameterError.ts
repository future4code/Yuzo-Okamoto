import BaseError from "./BaseError";

class InvalidParameterError extends BaseError {
  constructor(message: string) {
    super(message, 422);
  }
}

export default InvalidParameterError;
