import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Button from '../ui/button'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <Button
                    onPress={() => this.props.handleNavigate({ type: 'push', route: { key: 'about', title: 'About' }})}
                    label='Go To About'
                />

            </View>
        )
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
