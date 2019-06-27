import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import currentUserReducer from './currentUserReducer';
import validationReducer from './validationReducer';
import registerReducer from './registerReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    validation: validationReducer,
    register: registerReducer,
    currentUser: currentUserReducer,
  });

export default rootReducer;
