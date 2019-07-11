import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import RegisterSaga from '../components/Register/registerSaga';
import LoginSaga from '../components/Login/loginSaga';
import ItemsSaga from '../components/CatalogItems/itemsSaga';
import CategoriesSaga from '../components/CatalogMenu/categoriesSaga';

const sagas = [RegisterSaga(), LoginSaga(), CategoriesSaga(), ItemsSaga()];

export default function* rootSaga() {
  yield all(sagas);
}
