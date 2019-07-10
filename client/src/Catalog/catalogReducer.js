import { combineReducers } from 'redux';

import categoriesReducer from '../CatalogMenu/categoriesReducer';
import filmsReducer from '../CatalogItems/filmsReducer';
import settingsReducer from '../Catalog/settingsReducer';

const catalogReducer = combineReducers({
  settings: settingsReducer,
  categories: categoriesReducer,
  films: filmsReducer,
});

export default catalogReducer;
