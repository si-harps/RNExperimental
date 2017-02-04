import {
    StackNavigator,
} from 'react-navigation';

import TabNavigator from './tabNavigator'
import CardNavigator from './cardNavigator'

export default StackNavigator({
    Home: { screen: TabNavigator }
}, {
    headerMode: 'none'
});
