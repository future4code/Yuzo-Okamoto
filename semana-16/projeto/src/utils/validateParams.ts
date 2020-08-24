import { Response } from 'express';

function validateParams(params: any[], res: Response): void {
  let isValid: Boolean = true;
  const invalidParams: any[] = [];

  params.forEach((param) => {
    if (!param || param.length === 0) {
      invalidParams.push(param);

      if (!isValid) {
        isValid = false;
      }
    }
  });

  if (!isValid) {
    res.status(400).send(`Invalid params: ${invalidParams}`);
    return;
  }
}

export default validateParams;
