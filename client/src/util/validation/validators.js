const getErrorObject = (error, fieldName) => ({
  valid: false,
  error,
  fieldName: fieldName,
});

const getValidObject = fieldName => ({
  valid: true,
  error: '',
  fieldName: fieldName,
});

export const requiredField = (value, fieldName, validator, ...args) => {
  if (value === '' || value === null || value === undefined) {
    return getErrorObject('Введите значение', fieldName);
  }
  if (validator === undefined) {
    return getValidObject(fieldName);
  }
  return validator(value, fieldName, ...args);
};

export const confirmPassword = (value, fieldName, confirmValue) => {
  if (value === confirmValue) {
    return getValidObject(fieldName);
  } else {
    return getErrorObject('Пароли не совпадают', fieldName);
  }
};

export const validateFields = (...validators) => {
  return validators.reduce(
    (value, current) => {
      const result = current();
      if (!result.valid) {
        value.errors[result.fieldName] = result.error;
        value.valid = false;
      }
      return value;
    },
    { valid: true, errors: {} }
  );
};
