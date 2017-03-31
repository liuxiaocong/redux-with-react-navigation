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
class HomeView extends React.Component {
    static navigationOptions = {
        title: 'Home',
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
                <Button
                    style={{width:200}}
                    title={'go animate page'} onPress={()=>this.props.navigation.navigate('Animate')}></Button>
            </View>
        )
    }
}
;

export default HomeView;
