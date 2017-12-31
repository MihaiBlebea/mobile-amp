import React from 'react';

import { StatusBar } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { ProgramScreen, LoginScreen } from './screens/exports.js';
import { HomeScreenTabs } from './tabs/exports.js';
import { Icon } from 'react-native-elements';

const DrawerNav = DrawerNavigator({
    Home: {
        screen: HomeScreenTabs,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (<Icon name="attachment" size={25} color="#900" />)
        }
    },
    Programs: {
        screen: ProgramScreen,
        navigationOptions: {
            drawerLabel: 'Programs',
            drawerIcon: ({ tintColor }) => (<Icon name="attachment" size={25} color="#900" />)
        }
    },
    Login: { screen: LoginScreen }
});

class App extends React.Component {

    componentDidMount() {
       StatusBar.setHidden(true);
       alert('app mounted');
    }

    render() {
        return (
            <DrawerNav />
        );
    }
}

export default App;
