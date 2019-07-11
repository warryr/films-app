import { handleActions } from 'redux-actions';

const registerReducer = handleActions(
  {
    USER_REGISTER_REQUESTED: (state, action) => ({
      ...state.validation,
      user: action.payload,
    }),
    USER_REGISTER_SUCCEEDED: (state, action) => ({
      ...state.validation,
      user: action.payload,
    }),
    USER_REGISTER_FAILED: (state, action) => ({
      ...state.validation,
      errors: [...action.payload],
    }),
  },
  {
    user: {},
    errors: [],
  }
);

export default registerReducer;
