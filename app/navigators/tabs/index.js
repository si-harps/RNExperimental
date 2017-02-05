import React from 'react'
import {
    TabNavigator,
} from 'react-navigation';
// import { StyleSheet } from 'react-native'

import Chat from './chat'

import HomeTab from '../../components/tabs/home'
import GroupsTab from '../../components/tabs/groups'
import StatsTab from '../../components/tabs/stats'
import UserTab from '../../components/tabs/user'
import SettingsTab from '../../components/tabs/settings'

const options = {
    lazyLoad: true,
    tabBarOptions: {
        inactiveTintColor: '#aaa',
        activeTintColor: '#fff',
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: '#222',
            borderTopColor: '#111',
            // borderTopWidth: StyleSheet.hairlineWidth,
        }
    },
    animationEnabled: false,
}

export default TabNavigator({

    List:       { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<HomeTab {...props} />) }}},
    Groups:     { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<GroupsTab {...props} />) }}},
    Stats:      { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<StatsTab {...props} />) }}},
    User:       { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<UserTab {...props} />) }}},
    Settings:   { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<SettingsTab {...props} />) }}},

}, options);
