import { requiredField, validateFields, textFieldLength } from '../validation/validators';

const getLoginRules = user => [
  () => requiredField(user.username, 'username', textFieldLength, 6),
  () => requiredField(user.password, 'password', textFieldLength, 6),
];

const validate = (user, setValidation) => {
  const result = validateFields(...getLoginRules(user));
  setValidation(result);
  return result.valid;
};

export default validate;
