import React from 'react';
import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getCategoriesSucceeded, getCategoriesFailed } from '../actions/actions';
import { history } from '../reducers/store';

const getToken = state => state.currentUser.token;

function* categoriesWatcher() {
  yield takeLatest('CATEGORIES_GET_REQUESTED', categoriesFlow);
}

function* categoriesFlow(action) {
  try {
    const token = yield select(getToken);
    const response = yield call(axios, '/api/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(getCategoriesSucceeded(response.data));
  } catch (err) {
    yield put(getCategoriesFailed(err.response.data));
    if (err.response.status === 401) {
      yield call(history.push, '/login');
    }
  }
}

export default categoriesWatcher;
