import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/chat'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Chat extends Component {

    static navigationOptions = {
        title: ({ state }) => `Chat with ${state.params.name}`,
        header: ({ state, setParams }) => ({
            right: (<Button
                onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
                title="Info"
            />)
        })
    };

    componentWillMount() {
        this.props.test({ message: 'This is a test' })
    }

    componentWillUnmount() {
        console.log('Unmounting chat')
    }

    render() {

        const { params } = this.props.navigation.state;

        return (
            <View><Text>{ params.name }</Text></View>
        );
    }
}

const styles = StyleSheet.create({

    title: {
        marginBottom: 20,
        fontSize: 22,
        textAlign: 'center'
    },
    container: {
        paddingTop: 60
    }

})

function mapStateToProps(state) {
    return {}
}

function mapDispatchToprops(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(Chat)
