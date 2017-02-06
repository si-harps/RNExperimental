import React, { Component} from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NavigationActions from '../actions/navigation'

import RootNavigator from '../navigators/root'

class Root extends Component {

    render() {
        return (
            <RootNavigator />
        );
    }
}

function mapStateToProps(state) {
    return {
        navigation: state.navigation
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(NavigationActions, dispatch);
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'red',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
