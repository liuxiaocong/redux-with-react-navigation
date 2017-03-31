/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from "react";
import {StyleSheet, View, Text, Alert} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1
    }
});
class HomeView extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={
                    ()=>this.props.onAdd()
                }>App View</Text>
                <Text>{this.props.count}</Text>
            </View>
        )
    }
};

export default HomeView;
