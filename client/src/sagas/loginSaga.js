import React from 'react';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setCurrentUser, loginUserFailed } from '../actions/actions';
import { history } from '../reducers/store';

function* loginWatcher() {
  yield takeLatest('USER_LOGIN_REQUESTED', loginFlow);
}

function* loginFlow(action) {
  try {
    const response = yield call(axios, '/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: action.payload,
    });
    yield put(setCurrentUser({ username: response.data.username, email: response.data.email, token: 'token' }));
    yield call(history.push, '/films');
  } catch (err) {
    const errors = [];

    for (let key in err.response.data) {
      errors.push(err.response.data[key]);
    }

    yield put(loginUserFailed(errors));
  }
}

export default loginWatcher;
