import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationError(error: ValidationError): Errors {
  const validatedErrors: Errors = {};

  error.inner.forEach((err) => {
    validatedErrors[err.path] = err.message;
  });

  return validatedErrors;
}
