import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        tabBar: { label: 'List' },
        header: ({ state, setParams }) => ({
            right: (<Button
                onPress={() => this.props.navigation.navigate('Chat', { name: 'Someone' })}
                title="+"
            />)
        })
    };

    componentWillMount() {
        console.log('Home')
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { name: 'Someone' })}
                title="Go to Someone's profile"
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

export default Home
