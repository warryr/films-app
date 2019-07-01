import { all } from 'redux-saga/effects';
import RegisterSaga from './registerSaga';
import LoginSaga from './loginSaga';
import CatalogSaga from './catalogSaga';

export default function* indexSaga() {
  yield all([RegisterSaga(), LoginSaga(), CatalogSaga()]);
}
