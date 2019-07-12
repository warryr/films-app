import { handleActions } from 'redux-actions';

export default handleActions(
  {
    USER_REGISTER_REQUESTED: (state, action) => ({
      processing: true,
    }),
    USER_REGISTER_SUCCEEDED: (state, action) => ({
      processing: false,
    }),
    USER_REGISTER_FAILED: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
  },
  {
    processing: false,
    errors: [],
  }
);
