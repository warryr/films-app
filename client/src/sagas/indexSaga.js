import { all } from 'redux-saga/effects';
import RegisterSaga from './registerSaga';
import LoginSaga from './loginSaga';
import FilmsSaga from './filmsSaga';
import CategoriesSaga from './categoriesSaga';

export default function* indexSaga() {
  yield all([RegisterSaga(), LoginSaga(), CategoriesSaga(), FilmsSaga()]);
}
