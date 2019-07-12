import { createAction } from 'redux-actions';

export const getCategoriesRequested = createAction('CATEGORIES_GET_REQUESTED');
export const getCategoriesSucceeded = createAction('CATEGORIES_GET_SUCCEEDED');
export const getCategoriesFailed = createAction('CATEGORIES_GET_FAILED');

export const getFilmsRequested = createAction('FILMS_GET_REQUESTED');
export const getFilmsSucceeded = createAction('FILMS_GET_SUCCEEDED');
export const getFilmsFailed = createAction('FILMS_GET_FAILED');

export const cleanFilms = createAction('FILMS_CLEAN');

export const updateCatalogSettings = createAction('CATALOG_SETTINGS_UPDATE');
export const updateHasMore = createAction('HAS_MORE_UPDATE');
