import { createAction } from 'redux-actions';

export const getFilmsRequested = createAction('FILMS_GET_REQUESTED');
export const getFilmsSucceeded = createAction('FILMS_GET_SUCCEEDED');
export const getFilmsFailed = createAction('FILMS_GET_FAILED');
export const cleanFilms = createAction('FILMS_CLEAN');

export const updateHasMore = createAction('HAS_MORE_UPDATE');
