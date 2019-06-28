import { handleActions } from 'redux-actions';

const userReducer = handleActions(
  {
    CURRENT_USER_SET: (state, action) => ({
      ...state,
      username: action.payload.username,
      email: action.payload.email,
    }),
    CURRENT_USER_UNSET: (state, action) => ({
      username: '',
      email: '',
    }),
  },
  {
    username: '',
    email: '',
  }
);

export default userReducer;
