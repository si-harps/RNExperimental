// import * as ActionTypes from '../constants/ActionTypes'
// import { NavigationExperimental } from 'react-native'
//
// const {
//     StateUtils: NavigationStateUtils
// } = NavigationExperimental
//
// const initialState = {
//     index: 0,
//     key: 'root',
//     routes: [{
//         key: 'home',
//         title: 'Home'
//     }]
// }
//
// function navigationState (state = initialState, action) {
//
//     switch (action.type) {
//
//         case ActionTypes.PUSH_ROUTE:
//
//             if (state.routes[state.index].key === (action.route && action.route.key))
//                 return state
//
//             return NavigationStateUtils.push(state, action.route)
//
//         case ActionTypes.POP_ROUTE:
//
//             if (state.index === 0 || state.routes.length === 1)
//                 return state
//
//             return NavigationStateUtils.pop(state)
//
//         default:
//             return state
//     }
// }
//
// export default navigationState

import AppNavigator from '../appNavigator'

// const initialState = {
//     index: 0,
//     key: 'root',
//     routes: [{
//         key: 'home',
//         title: 'Home'
//     }]
// }

export default function navigation(state, action) {
    return AppNavigator.router.getStateForAction(action, state)
}
