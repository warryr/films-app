import { userActionTypes } from '../actions/actionTypes';

const getInitialState = () => ({
  registerValidation: {},
  loginValidation: {},
  currentUser: {},
});

const userReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case userActionTypes.SET_REGISTER_VALIDATION: {
      return {
        ...state,
        registerValidation: action.payload,
      };
    }
    case userActionTypes.SET_LOGIN_VALIDATION: {
      return {
        ...state,
        loginValidation: action.payload,
      };
    }
    case userActionTypes.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case userActionTypes.CLEAN_CURRENT_USER: {
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
