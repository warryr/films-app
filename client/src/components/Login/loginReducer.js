import { handleActions } from 'redux-actions';

const loginReducer = handleActions(
  {
    USER_LOGIN_REQUESTED: (state, action) => ({
      ...state.validation,
      user: action.payload,
    }),
    USER_LOGIN_FAILED: (state, action) => ({
      ...state.validation,
      errors: [...action.payload],
    }),
  },
  {
    user: {},
    errors: [],
  }
);

export default loginReducer;
