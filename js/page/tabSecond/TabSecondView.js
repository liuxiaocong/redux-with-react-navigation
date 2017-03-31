/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from "react";
import {StyleSheet, View, Text, Alert, Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1
    }
});
class TabSecondView extends React.Component {
    static navigationOptions = {
        title: 'Tab 2',
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab second</Text>
            </View>
        )
    }
}
;

export default TabSecondView;
