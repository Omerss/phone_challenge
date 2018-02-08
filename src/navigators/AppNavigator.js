import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import ChallengeScreen from '../components/ChallengeScreen';
import ProfileScreen from '../components/ProfileScreen';
import LoginForm from '../components/LoginForm';

import { addListener } from '../utils/redux';

const MainMenu = TabNavigator(
    {
        Profile: { screen: ProfileScreen },
        Challenge: { screen: ChallengeScreen },
        Friends: { screen: LoginScreen}
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
        initialRouteName: 'Profile'
    }
);


export const AppNavigator = StackNavigator(
    {
    Login: { screen: LoginForm },
    Menu: { screen: MainMenu },
    },
    {
    navigationOptions: {header: null}
    }
);

class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav,
                    addListener,
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
