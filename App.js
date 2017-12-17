import React from 'react';

import { StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProgramScreen, LoginScreen } from './screens/exports.js';

const TabNav = TabNavigator({
    Home: { screen: HomeScreen },
    Programs: { screen: ProgramScreen },
    Login: { screen: LoginScreen }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: { activeTintColor: '#e91e63' },
});

class App extends React.Component {

    componentDidMount() {
       StatusBar.setHidden(true);
       alert('app mounted');
    }

    render() {
        return (
            <TabNav />
        );
    }
}

export default App;
