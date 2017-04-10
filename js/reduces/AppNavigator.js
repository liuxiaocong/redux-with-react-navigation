/**
 * Created by Administrator on 3/31/2017.
 */
import {TabNavigator, StackNavigator} from 'react-navigation';
import HomeCompoment from '../page/Home/HomeCompoment'
import AnimateCompoment from '../page/Animate/AnimateCompoment'
import TabFirstCompoment from '../page/tabFirst/TabFirstCompoment'
import TabSecondCompoment from '../page/tabSecond/TabSecondCompoment'
import TabThirdCompoment from '../page/tabThird/TabThirdCompoment'
import {Dimensions} from 'react-native'

var {height, width} = Dimensions.get('window');
var tagCount = 3;
let TabNavigatorConfig = {
    tabBarOptions: {
        style: {
            margin: 0,
            padding: 0
        },
        tabStyle: {
            backgroundColor: '#f00',
            padding: 0,
            margin: 0
        },
        labelStyle: {
            fontSize: 15,
            height: 20,
            padding: 0,
            margin: 0,
            backgroundColor: '#ffff00'
        },
        activeTintColor: '#000',
        inactiveTintColor: '#666',
        pressColor: '#ddd',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            alignSelf: 'center',
            width: 30,
            marginLeft: (width / (tagCount * 2)) - 15,
            backgroundColor: '#000',
        }
    }
}
const tabBarConfig = {
    tabBarOptions: ({
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'green',
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        style: {backgroundColor: 'blue'},
        labelStyle: {fontWeight: 'bold'},
    })
};
const MainScreenNavigator = TabNavigator({
    Recent: {screen: TabFirstCompoment},
    All: {screen: TabSecondCompoment},
    TagThird: {screen: TabThirdCompoment},
}, TabNavigatorConfig);

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