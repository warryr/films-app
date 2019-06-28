import { handleActions } from 'redux-actions';

const loginReducer = handleActions(
  {
    USER_LOGIN_REQUESTED: (state, action) => ({
      user: action.payload,
    }),
    USER_LOGIN_FAILED: (state, action) => ({
      errors: [...action.payload],
    }),
  },
  {
    user: {},
    errors: [],
  }
);

export default loginReducer;
