import { createAction } from 'redux-actions';

export const setCurrentUser = createAction('CURRENT_USER_SET');
export const unsetCurrentUser = createAction('CURRENT_USER_UNSET');
