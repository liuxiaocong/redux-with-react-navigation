/**
 * Created by Administrator on 3/31/2017.
 */
import AppNavigator from './AppNavigator'
export default function nav(state, action) {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};