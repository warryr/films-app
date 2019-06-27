import { all } from 'redux-saga/effects';
import RegisterSaga from './registerSaga';

export default function* indexSaga() {
  yield all([RegisterSaga()]);
}
