import { combineReducers } from 'redux';

import categoriesReducer from '../../CatalogMenu/reducers';
import filmsReducer from '../../CatalogItems/reducers';
import settingsReducer from './settingsReducer';

export default combineReducers({
  settings: settingsReducer,
  categories: categoriesReducer,
  films: filmsReducer,
});
