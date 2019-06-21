import { requiredField, confirmPassword, validateFields } from './validators';

const getRegisterRules = user => [
  () => requiredField(user.username, 'username'),
  () => requiredField(user.email, 'email'),
  () => requiredField(user.password, 'password'),
  () => requiredField(user.confirmPassword, 'confirmPassword', confirmPassword, user.password),
];

const validate = (user, setValidation) => {
  const result = validateFields(...getRegisterRules(user));
  setValidation(result);
  return result.valid;
};

export default validate;
