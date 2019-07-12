import React from 'react';
import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { auth } from '../../../api/requests';
import { history } from '../../../redux/store';
import { setCurrentUser } from '../../Account/actions';
import { loginUserSucceeded, loginUserFailed } from '../actions';

const getUser = state => state.form.loginForm.values;

function* loginWatcher() {
  yield takeLatest('USER_LOGIN_REQUESTED', loginFlow);
}

function* loginFlow(action) {
  const user = yield select(getUser);

  try {
    const response = yield call(auth.login, user);
    yield put(loginUserSucceeded());
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
