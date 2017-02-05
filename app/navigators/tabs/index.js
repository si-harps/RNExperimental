import React from 'react'
import {
    TabNavigator,
} from 'react-navigation';
import { StyleSheet } from 'react-native'

import Chat from './chat'

import HomeTab from '../../components/tabs/home'

const options = {
    lazyLoad: true,
    tabBarOptions: {
        inactiveTintColor: '#bbb',
        activeTintColor: '#fff',
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: '#333',
            borderTopColor: '#111',
            borderTopWidth: StyleSheet.hairlineWidth,
        },
        labelStyle: {
            display: 'none'
        }
    },
    animationEnabled: false,
}

export default TabNavigator({

    List:       { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<HomeTab {...props} />) }}},
    Settings:   { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<HomeTab {...props} />) }}},
    Groups:     { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<HomeTab {...props} />) }}},
    Stats:      { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<HomeTab {...props} />) }}},
    Account:    { screen: Chat, navigationOptions: { tabBar: { label: '', icon: (props) => (<HomeTab {...props} />) }}},

}, options);
