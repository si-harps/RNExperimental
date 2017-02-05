import {
    StackNavigator,
} from 'react-navigation';

import TabNavigator from './tabs'
import Login from '../components/authentication/login'
import Chat from '../components/card/chat'

export default StackNavigator({

    Auth: { screen: Login, navigationOptions: { header: { visible: false }}},
    Home: { screen: TabNavigator, navigationOptions: { header: { visible: false }}},
    Chat: { screen: Chat }

}, {
    headerMode: 'screen',
    initialRouteName: 'Auth',
});
