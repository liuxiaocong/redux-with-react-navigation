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
class TabFirstView extends React.Component {
    static navigationOptions = {
        title: 'Tab 1',
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab First</Text>
            </View>
        )
    }
}
;

export default TabFirstView;
