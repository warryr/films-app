import React from 'react';
import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getFilmsSucceeded, getFilmsFailed } from '../actions/actions';

const getToken = state => state.currentUser.token;

function* filmsWatcher() {
  yield takeLatest('FILMS_GET_REQUESTED', filmsFlow);
}

function* filmsFlow(action) {
  try {
    const token = yield select(getToken);
    const query = action.payload ? action.payload : '';
    const response = yield call(axios, `/api/films${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(getFilmsSucceeded(response.data));
  } catch (err) {
    console.log(err.response);
    yield put(getFilmsFailed(err.response.data));
  }
}

export default filmsWatcher;
