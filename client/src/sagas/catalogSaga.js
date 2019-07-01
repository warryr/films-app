import React from 'react';
import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getCatalogSucceeded, getCatalogFailed } from '../actions/actions';

const getToken = state => state.currentUser.token;

function* catalogWatcher() {
  yield takeLatest('CATALOG_GET_REQUESTED', catalogFlow);
}

function* catalogFlow(action) {
  try {
    const token = select(getToken);
    const response = yield call(axios, '/api/films', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(getCatalogSucceeded(response.data));
  } catch (err) {
    yield put(getCatalogFailed(err.response.data));
  }
}

export default catalogWatcher;
