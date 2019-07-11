import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import RegisterSaga from '../modules/Register/sagas/registerSaga';
import LoginSaga from '../modules/Login/sagas/loginSaga';
import FilmsSaga from '../modules/CatalogItems/sagas/filmsSaga';
import CategoriesSaga from '../modules/CatalogMenu/sagas/categoriesSaga';

const sagas = [RegisterSaga(), LoginSaga(), CategoriesSaga(), FilmsSaga()];

export default function* rootSaga() {
  yield all(sagas);
}
