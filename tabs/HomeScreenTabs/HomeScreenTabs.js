import React from 'react';

import { TabNavigator } from 'react-navigation';
import { HomeScreen } from '../../screens/exports.js';
import { Icon } from 'react-native-elements';

const HomeScreenTabs = TabNavigator({
    Bar: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Bar',
            tabBarIcon: ({ tintColor }) => (<Icon name="adjust" size={30} color="#900" />)
        }
    },
    Foo: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Foo',
            tabBarIcon: ({ tintColor }) => (<Icon name="adjust" size={30} color="#900" />)
        }
    },
    FooBar: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'FooBar',
            tabBarIcon: ({ tintColor }) => (<Icon name="adjust" size={30} color="#900" />)
        }
    }
}, {
    initialRouteName: 'Bar',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: { activeTintColor: '#e91e63' },
});

export default HomeScreenTabs;
