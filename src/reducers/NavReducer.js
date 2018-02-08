import {AppNavigator} from "../navigators/AppNavigator";
import {NavigationActions} from "react-navigation";
import {NAV_LOGIN, NAV_LOGOUT, NAV_CHALLENGE, NAV_PROFILE, SCREEN_LOGIN} from "../actions/types";

// Start with two routes: The Main screen, with the Login screen on top.
const initialNavState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(SCREEN_LOGIN)
);

export default (state = initialNavState, action) => {
    console.log(action);
    let nextState;
    switch (action.type) {
        case NAV_LOGIN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Menu' }),
                state
            );
            break;
        case NAV_LOGOUT:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: SCREEN_LOGIN }),
                state
            );
            break;
        case NAV_CHALLENGE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: NAV_CHALLENGE }),
                state
            );
            break;
        case NAV_PROFILE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Profile' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};
