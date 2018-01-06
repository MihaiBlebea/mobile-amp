import React from 'react';

import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProgramsScreen, LoginScreen } from '../../screens/exports.js';
import { ProgramNavigation } from '../exports.js';

import { Icon } from 'react-native-elements';

// Declare screen view for ProgramNavigation
class ProgramNavScreen extends React.Component
{
    render()
    {
        return ( <ProgramNavigation /> );
    }
}

const MainNavigation = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (<Icon name="adjust" size={30} color="#900" />)
        }
    },
    Programs: {
        screen: ProgramNavScreen,
        navigationOptions: {
            tabBarLabel: 'Programs',
            tabBarIcon: ({ tintColor }) => (<Icon name="adjust" size={30} color="#900" />)
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            tabBarLabel: 'Login',
            tabBarIcon: ({ tintColor }) => (<Icon name="adjust" size={30} color="#900" />)
        }
    }
}, {
    initialRouteName: 'Home',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: { activeTintColor: '#e91e63' },
});

export default MainNavigation;
