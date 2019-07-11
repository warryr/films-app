import {
  requiredField,
  confirmPassword,
  textFieldLength,
  emailPattern,
  validateFields,
  strictSymbols,
} from '../validation/validators';

const getRegisterRules = user => [
  () => requiredField(user.username, 'username', strictSymbols, textFieldLength, 6),
  () => requiredField(user.email, 'email', emailPattern),
  () => requiredField(user.password, 'password', textFieldLength, 6),
  () => requiredField(user.confirmPassword, 'confirmPassword', confirmPassword, user.password),
];

const validate = (user, setValidation) => {
  const result = validateFields(...getRegisterRules(user));
  setValidation(result);
  return result.valid;
};

export default validate;
