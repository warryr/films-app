import React from 'react';
import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getCategoriesSucceeded, getCategoriesFailed } from '../actions/actions';

const getToken = state => state.currentUser.token;

function* categoriesWatcher() {
  yield takeLatest('CATEGORIES_GET_REQUESTED', categoriesFlow);
}

function* categoriesFlow(action) {
  try {
    const token = select(getToken);
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
