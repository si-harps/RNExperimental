import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavigationRoot from '../components/navigationRoot'
import * as NavigationActions from '../actions/navigation'

function mapStateToProps(state) {
    return {
        navigation: state.navigation
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(NavigationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRoot)
