import { handleActions } from 'redux-actions';

const defaultState = {
  username: '',
  email: '',
  token: '',
};

export default handleActions(
  {
    USER_LOGIN_SUCCEEDED: (state, action) => ({
      username: action.payload.username,
      email: action.payload.email,
      token: action.payload.token,
    }),
    CURRENT_USER_UNSET: (state, action) => defaultState,
  },
  defaultState
);
