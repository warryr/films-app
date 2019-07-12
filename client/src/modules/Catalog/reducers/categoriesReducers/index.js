import { combineReducers } from 'redux/index';

import loadingReducer from './loadingReducer';
import itemsReducer from './itemsReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  items: itemsReducer,
});
