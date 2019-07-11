import { handleActions } from 'redux-actions';

const validationReducer = handleActions(
  {
    REGISTER_VALIDATION_SET: (state, action) => ({
      registerValidation: action.payload,
      loginValidation: {},
    }),
    LOGIN_VALIDATION_SET: (state, action) => ({
      registerValidation: {},
      loginValidation: action.payload,
    }),
  },
  {
    registerValidation: {},
    loginValidation: {},
  }
);

export default validationReducer;
