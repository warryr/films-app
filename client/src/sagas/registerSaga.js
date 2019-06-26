import { call, put, takeLatest } from 'redux-saga/effects';
import { registerUserSucceeded, registerUserFailed } from '../actions/actionCreators';
import { USER_REGISTER_REQUESTED } from '../actions/actionTypes';
import axios from 'axios';

function* registerWatcher() {
  console.log('Watching...');
  yield takeLatest(USER_REGISTER_REQUESTED, registerFlow);
}

function* registerFlow(action) {
  try {
    const response = yield call(axios, '/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: action.payload,
    });
    yield put(registerUserSucceeded({ username: response.username, email: response.email }, response.status));
  } catch (err) {
    const errors = {};

    if (err.response.status === 409) {
      if (err.response.data.includes('username')) {
        errors.username = 'Username is taken';
      }
      if (err.response.data.includes('email')) {
        errors.email = 'Email address is already used for another account';
      }
    } else {
      for (let key in err.response.data) {
        errors[key] = err.response.data[key];
      }
    }

    yield put(registerUserFailed(err.response.status, errors));
  }
}

export default registerWatcher;
