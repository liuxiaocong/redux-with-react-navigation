/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { connect } from 'react-redux'
import TabSecondView from './TabSecondView'
import { StyleSheet, View, Text, Alert } from "react-native";

const mapStateToProps = ( state, ownProps ) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => ({

})

const TabSecondCompoment = connect(
    mapStateToProps,
    mapDispatchToProps
)( TabSecondView )

export default TabSecondCompoment
