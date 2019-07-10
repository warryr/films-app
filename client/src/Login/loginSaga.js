import React from 'react';
import axios from 'axios/index';
import { call, put, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { history } from '../store';
import { setCurrentUser } from './accountActions';
import { loginUserFailed } from './loginActions';

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
    yield put(
      setCurrentUser({ username: response.data.username, email: response.data.email, token: response.data.token })
    );
    yield call(history.push, '/catalog');
  } catch (err) {
    const errors = [];

    for (let key in err.response.data) {
      errors.push(err.response.data[key]);
    }

    yield put(loginUserFailed(errors));
  }
}

export default loginWatcher;