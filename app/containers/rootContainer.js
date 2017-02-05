import React, { Component} from 'react'
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

export default connect(mapStateToProps, mapDispatchToProps)(Root)
