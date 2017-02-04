import React, { Component } from 'react'
import Home from './card/home'
import About from './card/about'
import Contact from './card/contact'

import {
    BackAndroid,
    NavigationExperimental
} from 'react-native'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental

class NavigationRoot extends Component {

    constructor(props) {

        super(props)

        this.renderScene = this.renderScene.bind(this)
        this.handleBackAction = this.handleBackAction.bind(this)
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction)
    }

    renderScene(props) {

        const { route } = props.scene

        switch (route.key) {

            case 'about':
                return <About
                    handleNavigate={this.handleNavigate.bind(this)}
                    goBack={this.handleBackAction.bind(this)} />

            case 'contact':
                return <Contact
                    handleNavigate={this.handleNavigate.bind(this)}
                    goBack={this.handleBackAction.bind(this)} />

            default:
                return <Home
                    handleNavigate={this.handleNavigate.bind(this)} />
        }
    }

    handleBackAction() {

        if (this.props.navigation.index === 0)
            return false

        this.props.pop()

        return true
    }

    handleNavigate(action) {

        switch (action && action.type) {

            case 'push':
                this.props.push(action.route)
                return true

            case 'back':
            case 'pop':
                return this.handleBackAction()

            default:
                return false
        }
    }

    render() {

        return (
            <NavigationCardStack
                direction="horizontal"
                navigationState={this.props.navigation}
                onNavigate={this.handleNavigate.bind(this)}
                renderScene={this.renderScene} />
        )
    }
}

export default NavigationRoot
