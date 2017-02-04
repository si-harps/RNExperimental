import {
    TabNavigator,
} from 'react-navigation';

import Chat from './components/tabs/chat'

export default TabNavigator({

    List:       { screen: Chat },
    Settings:   { screen: Chat },

}, {
    lazyLoad: true,
    tabBarOptions: {
        showIcon: true
    },
    animationEnabled: false
});
