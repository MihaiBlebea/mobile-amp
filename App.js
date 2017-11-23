import React from 'react';

import { TabNavigator } from 'react-navigation';
import { HomeScreen, ProgramScreen } from './screens/exports.js';

const TabNav = TabNavigator({
    Home: { screen: HomeScreen },
    Notifications: { screen: ProgramScreen }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: { activeTintColor: '#e91e63' },
});

class App extends React.Component {
    render() {
        return (
            <TabNav />
        );
    }
}

export default App;
