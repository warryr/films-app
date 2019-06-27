import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import IndexSaga from '../sagas/indexSaga';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composeSetup =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore(
  rootReducer(history),
  composeSetup(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(IndexSaga);
