import { requiredField, textFieldLength } from '../../../util/validation/validators';
import validateFields from '../../../util/validation/validateFields';

const getLoginRules = user => [
  () => requiredField(user.username, 'username', textFieldLength, 6),
  () => requiredField(user.password, 'password', textFieldLength, 6),
];

const validate = user => {
  return validateFields(...getLoginRules(user));
};

export default validate;
