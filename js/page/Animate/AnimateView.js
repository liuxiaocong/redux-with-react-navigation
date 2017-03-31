/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from "react";
import {StyleSheet, View, Text, Alert, Animated, Image,Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1
    }
});
class AnimateView extends React.Component {
    static navigationOptions = {
        title: 'Animate',
    };

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.8,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();
    }

    componentWillUnmount() {

    }


    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={{width:200}}
                    title={'go tab page'} onPress={()=>this.props.navigation.navigate('MainScreenNavigator')}></Button>
                <Animated.Image                         // Base: Image, Text, View
                    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                    style={{
                  flex: 1,
                  transform: [                        // `transform` is an ordered array
                    {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                  ]
                }}
                />
            </View>
        )
    }
}

export default AnimateView;
