import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import RegisterSaga from './Register/registerSaga';
import LoginSaga from './Login/loginSaga';
import ItemsSaga from './CatalogItems/itemsSaga';
import CategoriesSaga from './CatalogMenu/categoriesSaga';

const sagas = [RegisterSaga(), LoginSaga(), CategoriesSaga(), ItemsSaga()];

export default function* rootSaga() {
  yield all(sagas);
}
