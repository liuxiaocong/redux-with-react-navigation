/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { connect } from 'react-redux'
import TabFirstView from './TabFirstView'
import { StyleSheet, View, Text, Alert } from "react-native";

const mapStateToProps = ( state, ownProps ) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => ({

})

const TabFirstCompoment = connect(
    mapStateToProps,
    mapDispatchToProps
)( TabFirstView )

export default TabFirstCompoment
