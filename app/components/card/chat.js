import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/chat'
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../styles/card.style'

class Chat extends Component {

    static navigationOptions = {
        title: ({ state }) => `Chat with ${state.params.name}`,
        header: ({ state, setParams }) => ({
            right: (<Icon
                name="settings"
                style={{ fontSize: 20, right: 15 }}
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
        const { navigate, goBack } = this.props.navigation

        return (
            <ScrollView style={[ styles.wrapper ]}><Text>{ params.name }</Text>
                <View style={{ height: 300, backgroundColor: 'red' }} />
                <Button
                    onPress={() => navigate('Chat', { name: 'Someone' })}
                    title="Go to Someone's profile"
                />
                <Button
                    onPress={() => navigate('Next', { name: 'Someone' })}
                    title="Go to Someone's profile"
                />
                <Button
                    onPress={() => goBack(0)}
                    title="Logout"
                />
                <View style={{ height: 300 }} />
                <Button
                    onPress={() => navigate('Chat', { name: 'Someone' })}
                    title="Go to Someone's profile"
                />
                <Button
                    onPress={() => navigate('Next', { name: 'Someone' })}
                    title="Go to Someone's profile"
                />
                <Button
                    onPress={() => goBack(0)}
                    title="Logout"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    ...Styles,

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
