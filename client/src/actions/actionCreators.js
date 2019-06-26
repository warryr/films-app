import {
  REGISTER_VALIDATION_SET,
  LOGIN_VALIDATION_SET,
  CURRENT_USER_SET,
  CURRENT_USER_UNSET,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUESTED,
  USER_REGISTER_SUCCEEDED,
} from './actionTypes';

export const setRegisterValidation = validation => ({
  type: REGISTER_VALIDATION_SET,
  payload: validation,
});

export const setLoginValidation = validation => ({
  type: LOGIN_VALIDATION_SET,
  payload: validation,
});

export const registerUserRequested = user => ({
  type: USER_REGISTER_REQUESTED,
  payload: user,
});

export const registerUserSucceeded = (user, code) => ({
  type: USER_REGISTER_SUCCEEDED,
  payload: { user, code },
});

export const registerUserFailed = (code, errors) => ({
  type: USER_REGISTER_FAILED,
  payload: { code, errors },
});

export const setCurrentUser = user => ({
  type: CURRENT_USER_SET,
  payload: user,
});

export const unsetCurrentUser = () => ({
  type: CURRENT_USER_UNSET,
});
