import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Button from '../ui/button'

class Contact extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Contact</Text>
                <Button
                    onPress={() => this.props.goBack(this.props.route)}
                    label='Go Back'
                />
                <Button
                    onPress={() => this.props.handleNavigate({ type: 'push', route: { key: 'home', title: 'Contact' }})}
                    label='Go To Contact'
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

export default Contact
