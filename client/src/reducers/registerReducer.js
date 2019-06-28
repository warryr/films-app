import { handleActions } from 'redux-actions';

const registerReducer = handleActions(
  {
    USER_REGISTER_REQUESTED: (state, action) => ({
      user: action.payload,
    }),
    USER_REGISTER_SUCCEEDED: (state, action) => ({
      user: action.payload,
    }),
    USER_REGISTER_FAILED: (state, action) => ({
      errors: [...action.payload],
    }),
  },
  {
    user: {},
    errors: [],
  }
);

export default registerReducer;
