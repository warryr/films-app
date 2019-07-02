import { createAction } from 'redux-actions';

export const setRegisterValidation = createAction('REGISTER_VALIDATION_SET');
export const setLoginValidation = createAction('LOGIN_VALIDATION_SET');

export const registerUserRequested = createAction('USER_REGISTER_REQUESTED');
export const registerUserSucceeded = createAction('USER_REGISTER_SUCCEEDED');
export const registerUserFailed = createAction('USER_REGISTER_FAILED');

export const loginUserRequested = createAction('USER_LOGIN_REQUESTED');
export const loginUserFailed = createAction('USER_LOGIN_FAILED');

export const getFilmsRequested = createAction('FILMS_GET_REQUESTED');
export const getFilmsSucceeded = createAction('FILMS_GET_SUCCEEDED');
export const getFilmsFailed = createAction('FILMS_GET_FAILED');

export const getCategoriesRequested = createAction('CATEGORIES_GET_REQUESTED');
export const getCategoriesSucceeded = createAction('CATEGORIES_GET_SUCCEEDED');
export const getCategoriesFailed = createAction('CATEGORIES_GET_FAILED');

export const setCurrentUser = createAction('CURRENT_USER_SET');
export const unsetCurrentUser = createAction('CURRENT_USER_UNSET');
