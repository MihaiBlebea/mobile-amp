import React from 'react';

import { StackNavigator } from 'react-navigation';
import { TitleCard } from '../../components/exports.js';
import { ProgramsScreen, ProgramScreen, DayScreen, SerieScreen } from '../../screens/exports.js';
import { Icon } from 'react-native-elements';

const ProgramScreenStacked = StackNavigator({
    Programs: {
        screen: ProgramsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Antrenamente',
            headerLeft: (
                <Icon name="menu"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('DrawerOpen')}/>
            )
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

export default ProgramScreenStacked;
