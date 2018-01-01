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
    }
}, {
    initialRouteName: 'Bar',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: { activeTintColor: '#e91e63' },
});

export default HomeScreenTabs;
