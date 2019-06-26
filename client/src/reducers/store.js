import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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

const composeSetup =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(rootReducer, composeSetup(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(IndexSaga);

export default store;
