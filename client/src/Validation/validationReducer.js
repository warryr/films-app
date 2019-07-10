import { handleActions } from 'redux-actions';

const validationReducer = handleActions(
  {
    REGISTER_VALIDATION_SET: (state, action) => ({
      registerValidation: action.payload,
    }),
    LOGIN_VALIDATION_SET: (state, action) => ({
      loginValidation: action.payload,
    }),
  },
  {
    registerValidation: {},
    loginValidation: {},
  }
);

export default validationReducer;
