/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from 'react'
import {Provider, connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import HomeCompoment from './page/Home/HomeCompoment'
import AnimateCompoment from './page/Animate/AnimateCompoment'
import reducer from './reduces'
import {addNavigationHelpers,StackNavigator} from 'react-navigation';
import home from "./reduces/homeReduces"

const AppNavigator = StackNavigator({
    Home: {screen: HomeCompoment},
    Animate: {screen: AnimateCompoment},
});
const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};
const appReducer = combineReducers({
    nav: navReducer,
    count: home
});

const store = createStore(appReducer)


const AppWithNavigationState = connect(state => ({
    nav: state.nav,
}))(({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
));


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}
module.exports = App;

