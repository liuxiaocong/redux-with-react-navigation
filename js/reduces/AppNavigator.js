/**
 * Created by Administrator on 3/31/2017.
 */
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import HomeCompoment from '../page/Home/HomeCompoment'
import AnimateCompoment from '../page/Animate/AnimateCompoment'

const AppNavigator = StackNavigator({
    Home: {screen: HomeCompoment},
    Animate: {screen: AnimateCompoment},
});

export default AppNavigator