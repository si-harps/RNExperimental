import React, { Component } from 'react'
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

export default Chat
