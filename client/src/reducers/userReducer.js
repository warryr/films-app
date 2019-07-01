import { handleActions } from 'redux-actions';

const currentUserReducer = handleActions(
  {
    CURRENT_USER_SET: (state, action) => ({
      username: action.payload.username,
      email: action.payload.email,
      token: action.payload.token,
    }),
    CURRENT_USER_UNSET: (state, action) => ({
      username: '',
      email: '',
      token: '',
    }),
  },
  {
    username: '',
    email: '',
    token: '',
  }
);

export default currentUserReducer;
