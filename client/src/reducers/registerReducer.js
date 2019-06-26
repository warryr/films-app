import { USER_REGISTER_REQUESTED, USER_REGISTER_SUCCEEDED, USER_REGISTER_FAILED } from '../actions/actionTypes';

const initialState = {
  user: {},
  code: 0,
  errors: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUESTED: {
      return {
        user: action.payload,
      };
    }
    case USER_REGISTER_SUCCEEDED: {
      return {
        user: action.payload.user,
        code: action.payload.code,
      };
    }
    case USER_REGISTER_FAILED: {
      return {
        code: action.payload.code,
        errors: [...action.payload.errors],
      };
    }
    default: {
      return state;
    }
  }
};

export default registerReducer;
