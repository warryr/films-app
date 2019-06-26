import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import currentUserReducer from './currentUserReducer';
import validationReducer from './validationReducer';
import registerReducer from './registerReducer';
import IndexSaga from '../sagas/registerSaga';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  validation: validationReducer,
  register: registerReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(IndexSaga);

export default store;
