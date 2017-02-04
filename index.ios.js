import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './app/store/configureStore'
const store = configureStore()

import NavigationRootContainer from './app/containers/navigationRootContainer'

const App = () => (
    <Provider store={store}>
        <NavigationRootContainer />
    </Provider>
)

AppRegistry.registerComponent('RNExperimental', () => App)
