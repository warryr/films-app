import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducers';
import filmsReducer from './filmsReducers';
import settingsReducer from './settingsReducer';

export default combineReducers({
  settings: settingsReducer,
  categories: categoriesReducer,
  films: filmsReducer,
});
