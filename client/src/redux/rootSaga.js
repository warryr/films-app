import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import RegisterSaga from '../modules/Register/sagas';
import LoginSaga from '../modules/Login/sagas';
import FilmsSaga from '../modules/Catalog/sagas/filmsSaga';
import CategoriesSaga from '../modules/Catalog/sagas/categoriesSaga';

const sagas = [RegisterSaga(), LoginSaga(), CategoriesSaga(), FilmsSaga()];

export default function* rootSaga() {
  yield all(sagas);
}
