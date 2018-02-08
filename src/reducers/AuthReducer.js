import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED,
    LOGIN_USER, NAV_LOGOUT, NAV_LOGIN } from "../actions/types";

const INITIAL_STATE = {
    email: 'test@test.com',
    password: 'test1234',
    user: null,
    error: '',
    loading: false,
    isLoggedIn: false
};

export default (state=INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload } ;
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return { ...state, error: '', loading: false, email: '',
                password: '', user: action.payload };
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication Failed', password: '', loading: false};
        case NAV_LOGIN:
            return { ...state, isLoggedIn: true };
        case NAV_LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};