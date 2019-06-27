import { handleActions } from 'redux-actions';
import { USER_REGISTER_REQUESTED, USER_REGISTER_SUCCEEDED, USER_REGISTER_FAILED } from '../actions/actionTypes';

const registerReducer = handleActions(
  {
    [USER_REGISTER_REQUESTED]: (state, action) => ({
      user: action.payload,
    }),
    [USER_REGISTER_SUCCEEDED]: (state, action) => ({
      user: action.payload,
    }),
    [USER_REGISTER_FAILED]: (state, action) => ({
      errors: [...action.payload],
    }),
  },
  {
    user: {},
    errors: [],
  }
);

export default registerReducer;
