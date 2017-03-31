/**
 * Created by Administrator on 3/31/2017.
 */
import {TabNavigator, StackNavigator} from 'react-navigation';
import HomeCompoment from '../page/Home/HomeCompoment'
import AnimateCompoment from '../page/Animate/AnimateCompoment'
import TabFirstCompoment from '../page/tabFirst/TabFirstCompoment'
import TabSecondCompoment from '../page/tabSecond/TabSecondCompoment'

const MainScreenNavigator = TabNavigator({
    Recent: {screen: TabFirstCompoment},
    All: {screen: TabSecondCompoment},
});

const AppNavigator = StackNavigator({
    Home: {screen: HomeCompoment},
    Animate: {screen: AnimateCompoment},
    MainScreenNavigator: {
        screen: MainScreenNavigator,
        navigationOptions: {
            header: {
                visible: false
            }
        },
    }
});

export default AppNavigator