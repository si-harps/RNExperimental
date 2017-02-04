import {
    StackNavigator,
} from 'react-navigation';

import Home from '../card/home'
import Chat from '../card/chat'
import Settings from '../card/settings'

export default StackNavigator({
    Home: { screen: Home },
    Chat: { screen: Chat },
});
