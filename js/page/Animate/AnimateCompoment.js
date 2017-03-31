/**
 * Created by xiaoconglau on 29/03/2017.
 */
import {connect} from 'react-redux'
import AnimateView from './AnimateView'
import {StyleSheet, View, Text, Alert, Animated} from "react-native";

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const AnimateCompoment = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnimateView)

export default AnimateCompoment
