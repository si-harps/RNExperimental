import {
    StackNavigator,
} from 'react-navigation';

import Home from '../../components/card/home'
import Chat from '../../components/card/chat'
import Settings from '../../components/card/settings'

export default StackNavigator({
    Home: { screen: Home },
    // Chat: { screen: Chat },
    Next: { screen: Chat }
}, {
    // headerMode: 'none'
});
