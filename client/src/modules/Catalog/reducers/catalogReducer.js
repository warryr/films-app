import { combineReducers } from 'redux/index';

import categoriesReducer from '../../CatalogMenu/reducers/categoriesReducer';
import filmsReducer from '../../CatalogItems/reducers/filmsReducer';
import settingsReducer from './settingsReducer';

const catalogReducer = combineReducers({
  settings: settingsReducer,
  categories: categoriesReducer,
  films: filmsReducer,
});

export default catalogReducer;
