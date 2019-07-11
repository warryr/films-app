import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import RegisterSaga from '../modules/Register/registerSaga';
import LoginSaga from '../modules/Login/loginSaga';
import FilmsSaga from '../modules/CatalogItems/filmsSaga';
import CategoriesSaga from '../modules/CatalogMenu/categoriesSaga';

const sagas = [RegisterSaga(), LoginSaga(), CategoriesSaga(), FilmsSaga()];

export default function* rootSaga() {
  yield all(sagas);
}
