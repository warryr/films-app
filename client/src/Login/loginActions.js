import { createAction } from 'redux-actions';

export const loginUserRequested = createAction('USER_LOGIN_REQUESTED');
export const loginUserFailed = createAction('USER_LOGIN_FAILED');
