import React from 'react';
import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { getCategoriesSucceeded, getCategoriesFailed } from './categoriesActions';

const getToken = state => state.account.token;

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
  }
}

export default categoriesWatcher;
