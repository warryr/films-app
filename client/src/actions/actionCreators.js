import { createAction } from 'redux-actions';
import {
  REGISTER_VALIDATION_SET,
  LOGIN_VALIDATION_SET,
  CURRENT_USER_SET,
  CURRENT_USER_UNSET,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUESTED,
  USER_REGISTER_SUCCEEDED,
} from './actionTypes';

export const setRegisterValidation = createAction(REGISTER_VALIDATION_SET);
export const setLoginValidation = createAction(LOGIN_VALIDATION_SET);

export const registerUserRequested = createAction(USER_REGISTER_REQUESTED);
export const registerUserSucceeded = createAction(USER_REGISTER_SUCCEEDED);
export const registerUserFailed = createAction(USER_REGISTER_FAILED);

export const setCurrentUser = createAction(CURRENT_USER_SET);
export const unsetCurrentUser = createAction(CURRENT_USER_UNSET);
