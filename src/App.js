import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import { middleware } from './utils/redux';
import ReduxThunk from 'redux-thunk'; // For async actions

const store = createStore(
    AppReducer,
    applyMiddleware(middleware, ReduxThunk),
);

class ChallengeApp extends React.Component {
    // Initialize Firebase
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAFQidg4SBfzEl8Hqmp0xdutxEe-fWrgWU',
            authDomain: 'phone-challenge-a0935.firebaseapp.',
            databaseURL: 'https://phone-challenge-a0935.firebaseio.com',
            projectId: 'phone-challenge-a0935',
            storageBucket: 'phone-challenge-a0935.appspot.com',
            messagingSenderId: '458834278107'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default ChallengeApp;