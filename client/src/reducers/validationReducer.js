import { handleActions } from 'redux-actions';
import { REGISTER_VALIDATION_SET, LOGIN_VALIDATION_SET } from '../actions/actionTypes';

const validationReducer = handleActions(
  {
    [REGISTER_VALIDATION_SET]: (state, action) => ({
      ...state,
      registerValidation: action.payload,
    }),
    [LOGIN_VALIDATION_SET]: (state, action) => ({
      ...state,
      loginValidation: action.payload,
    }),
  },
  {
    registerValidation: {},
    loginValidation: {},
  }
);

export default validationReducer;
