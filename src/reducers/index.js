import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';


const AppReducer = combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
});

export default AppReducer;
