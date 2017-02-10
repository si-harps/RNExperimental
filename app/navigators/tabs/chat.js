import {
    StackNavigator,
} from 'react-navigation';

import Home from '../../components/card/home'
import Chat from '../../components/card/chat'
import Settings from '../../components/card/settings'

const options = {

}

export default StackNavigator({

    Home: { screen: Home },
    Next: { screen: Chat }
    
}, options);
