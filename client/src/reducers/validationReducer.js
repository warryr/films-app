import { REGISTER_VALIDATION_SET, LOGIN_VALIDATION_SET } from '../actions/actionTypes';

const initialState = {
  registerValidation: {},
  loginValidation: {},
};

const validationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_VALIDATION_SET: {
      return {
        ...state,
        registerValidation: action.payload,
      };
    }
    case LOGIN_VALIDATION_SET: {
      return {
        ...state,
        loginValidation: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default validationReducer;
