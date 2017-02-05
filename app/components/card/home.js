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
        header: ({ state, setParams }) => ({
            right: (<Button
                onPress={() => this.props.navigation.back('Chat', { name: 'Someone' })}
                title="+"
            />)
        })
    };

    componentWillMount() {
        console.log('Home')

        console.log(this.props.navigation)
    }

    render() {

        const { navigate, goBack } = this.props.navigation

        return (
            <View>
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
            </View>
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
