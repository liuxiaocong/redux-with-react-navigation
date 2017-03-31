/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from 'react'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import AppNavigator from './reduces/AppNavigator'
import reducer from './reduces'
import {addNavigationHelpers} from 'react-navigation';
const store = createStore(reducer)

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

