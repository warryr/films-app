import { createAction } from 'redux-actions';

export const getCategoriesRequested = createAction('CATEGORIES_GET_REQUESTED');
export const getCategoriesSucceeded = createAction('CATEGORIES_GET_SUCCEEDED');
export const getCategoriesFailed = createAction('CATEGORIES_GET_FAILED');
