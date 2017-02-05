import {
    TabNavigator,
} from 'react-navigation';

import Chat from './chat'

export default TabNavigator({

    List:       { screen: Chat, navigationOptions: { tabBar: { label: 'Home' }}},
    Settings:   { screen: Chat, navigationOptions: { tabBar: { label: 'Settings' }}},
    Groups:     { screen: Chat, navigationOptions: { tabBar: { label: 'Groups' }}},
    Stats:      { screen: Chat, navigationOptions: { tabBar: { label: 'Stats' }}},
    Account:    { screen: Chat, navigationOptions: { tabBar: { label: 'Account' }}},

}, {
    lazyLoad: true,
    tabBarOptions: {
        showIcon: true
    },
    animationEnabled: false
});
