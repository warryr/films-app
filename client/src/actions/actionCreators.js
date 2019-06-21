import { userActionTypes } from './actionTypes';

export const setRegisterValidation = validation => ({
  type: userActionTypes.SET_REGISTER_VALIDATION,
  payload: validation,
});

export const setLoginValidation = validation => ({
  type: userActionTypes.SET_LOGIN_VALIDATION,
  payload: validation,
});

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const cleanCurrentUser = () => ({
  type: userActionTypes.CLEAN_CURRENT_USER,
});
