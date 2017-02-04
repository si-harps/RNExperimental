import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Settings extends Component {

    static navigationOptions = {
        title: 'Settings',
        // header: ({ state, setParams }) => ({
        //     right: (<Button
        //         onPress={() => this.props.navigation.navigate('Chat', { name: 'Someone' })}
        //         title="+"
        //     />)
        // })
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { name: 'Someone' })}
                title="Settings Screen"
            />
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

export default Settings
