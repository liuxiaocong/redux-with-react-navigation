/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { connect } from 'react-redux'
import HomeView from './HomeView'
import { StyleSheet, View, Text, Alert } from "react-native";

const mapStateToProps = ( state, ownProps ) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    onAdd: () => {

        dispatch( {
            type: 'add'
        } )
    }
})

const HomeCompoment = connect(
    mapStateToProps,
    mapDispatchToProps
)( HomeView )

export default HomeCompoment
