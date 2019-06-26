import { CURRENT_USER_SET, CURRENT_USER_UNSET } from '../actions/actionTypes';

const initialState = {
  currentUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_SET: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case CURRENT_USER_UNSET: {
      return {
        ...state,
        currentUser: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
