import {
    StackNavigator,
} from 'react-navigation';

import TabNavigator from './tabs'
import ModalStack from './modalStack'
import Authenticate from '../components/authentication/authenticate'
import Settings from '../components/card/settings'

export default StackNavigator({

    Home:       { screen: TabNavigator, navigationOptions: { header: { visible: false }}},
    Settings:   { screen: Settings },
    // Modals:     { screen: ModalStack }

}, {
    headerMode: 'screen',
    initialRouteName: 'Home',
});
