import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import validationReducer from './validationReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import catalogReducer from './catalogReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    validation: validationReducer,
    register: registerReducer,
    login: loginReducer,
    currentUser: userReducer,
    catalog: catalogReducer,
  });

export default rootReducer;
