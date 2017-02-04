import {
    TabNavigator,
} from 'react-navigation';

import CardNavigator from './cardNavigator'
import Home from './components/card/home'

export default TabNavigator({
    List: { screen: CardNavigator },
    Settings: { screen: CardNavigator },
});
