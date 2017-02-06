import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../styles/card.style'

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        header: ({ state, setParams }) => ({
            right: (<Icon
                name="menu"
                style={{ fontSize: 20, right: 15 }}
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
            <View style={[ styles.wrapper ]}>
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

export default Home
