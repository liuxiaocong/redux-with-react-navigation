/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from "react";
import {StyleSheet, View, Text, Alert, Animated, Image} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1
    }
});
class AnimateView extends React.Component{
    constructor( props ) {
        super( props );
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


    render () {
        return (
            <Animated.Image                         // Base: Image, Text, View
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
                  flex: 1,
                  transform: [                        // `transform` is an ordered array
                    {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                  ]
                }}
            />
        )
    }
}

export default AnimateView;
