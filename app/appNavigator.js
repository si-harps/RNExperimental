import {
    StackNavigator,
} from 'react-navigation';

import TabNavigator from './tabNavigator'

export default StackNavigator({
    Home: { screen: TabNavigator }
}, {
    headerMode: 'none'
});
