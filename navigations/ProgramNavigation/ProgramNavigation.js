import React from 'react';

import { StackNavigator } from 'react-navigation';
import { ProgramsScreen, ProgramScreen, DayScreen, SerieScreen } from '../../screens/exports.js';
import { Icon } from 'react-native-elements';

const ProgramNavigation = StackNavigator({
    Programs: {
        screen: ProgramsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Antrenamente',
        })
    },
    Program: {
        screen: ProgramScreen,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.screenTitle
        })
    },
    Day: {
        screen: DayScreen,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.screenTitle
        })
    },
    Serie: {
        screen: SerieScreen,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.screenTitle
        })
    }
}, {
    initialRouteName: 'Programs',
    headerMode: 'float',
    mode: 'card'
});

export default ProgramNavigation;
