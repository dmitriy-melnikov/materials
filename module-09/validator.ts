const DEFAULT_CONVERTER = (value) => value;

type ValidationError = {
  fieldName: string,
  fieldValue: string,
  errorMessage: string
};

const printError = (name, value, message) => ({
  fieldName: name,
  fieldValue: value,
  errorMessage: message
});

const exists = (value) => {
  switch (typeof value) {
    case `number`:
      return !Number.isNaN(value);
    case `string`:
      return value.length > 0;
    default:
      return value;
  }
};

const validateField = (data, fieldName, {required = false, converter = DEFAULT_CONVERTER, assertions}): Array<ValidationError> => {
  const rawValue = data[fieldName];
  if (!rawValue && !required) {
    return [];
  }

  const errors: Array<ValidationError> = [];
  try {
    if (exists(rawValue)) {
      const value = converter(rawValue);
      for (const assertion of assertions) {
        if (!(assertion.assert(value, data))) {
          errors.push(printError(fieldName, rawValue, assertion.message));
        }
      }
    } else if (required) {
      errors.push(printError(fieldName, rawValue, `is required`));
    }
  } catch (e) {
    errors.push(printError(fieldName, rawValue, e.message));
  }

  return errors;
};

const validate = (data: object, schema):Array<ValidationError> => {
  const errors:Array<ValidationError> = [];
  for (const key of Object.keys(schema)) {
    for (const error of validateField(data, key, schema[key])) {
      errors.push(error);
    }
  }
  return errors;
};

module.exports = {
  validate,
  exists
};
