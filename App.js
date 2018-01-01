import React from 'react';

import { StatusBar, Dimensions, View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { ProgramsScreen, LoginScreen } from './screens/exports.js';
import { HomeScreenTabs, ProgramScreenStacked } from './navigations/exports.js';


// Determine the mobile screen width
const SCREEN_WIDTH = Dimensions.get('window').width;

const DrawerNav = DrawerNavigator(
{
    Home: {
        screen: HomeScreenTabs,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (<Icon name="attachment" size={25} color="#900" />)
        }
    },
    Programs: {
        screen: ProgramScreenStacked,
        navigationOptions: {
            drawerLabel: 'Programs',
            drawerIcon: ({ tintColor }) => (<Icon name="attachment" size={25} color="#900" />)
        }
    },
    Login: { screen: LoginScreen }
}, {
    initialRouteName: 'Home',
    contentOptions: {
        activeTintColor: 'red',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: 'blue',
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
            fontSize: 15
        },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
});

class App extends React.Component {

    componentDidMount() {
       // StatusBar.setHidden(true);
       alert('app mounted');
    }

    render() {
        return (
            <DrawerNav />
        );
    }
}

export default App;
