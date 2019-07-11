import React from 'react';
import axios from 'axios/index';
import { call, put, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { history } from '../../redux/store';
import { registerUserSucceeded, registerUserFailed } from './registerActions';

function* registerWatcher() {
  yield takeLatest('USER_REGISTER_REQUESTED', registerFlow);
}

function* registerFlow(action) {
  try {
    const response = yield call(axios, '/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: action.payload,
    });
    yield put(registerUserSucceeded({ username: response.data.username, email: response.data.email }));
    yield call(history.push, '/login');
  } catch (err) {
    const errors = [];

    if (err.response.status === 409) {
      if (err.response.data.includes('username')) {
        errors.push('Username is taken');
      }
      if (err.response.data.includes('email')) {
        errors.push('Email address is already used for another account');
      }
    } else {
      for (let key in err.response.data) {
        errors.push(err.response.data[key]);
      }
    }

    yield put(registerUserFailed(errors));
  }
}

export default registerWatcher;
