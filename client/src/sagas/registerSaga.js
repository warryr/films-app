import { call, put, takeLatest } from 'redux-saga/effects';
import { registerUserSucceeded, registerUserFailed } from '../actions/actionCreators';
import { USER_REGISTER_REQUESTED } from '../actions/actionTypes';
import registerApi from '../apiRequests/register';

function* registerWatcher() {
  console.log('Watching...');
  yield takeLatest(USER_REGISTER_REQUESTED, registerFlow);
}

function* registerFlow(action) {
  try {
    const user = action.payload;
    const response = yield call(registerApi.registerUser, user);
    yield put(registerUserSucceeded(response.user, response.code));
  } catch (error) {
    yield put(registerUserFailed(error.status, error.errors));
  }
}

export default registerWatcher;
