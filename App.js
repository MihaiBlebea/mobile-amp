import React from 'react';
import { StatusBar, Dimensions } from 'react-native';

import { MainNavigation} from './navigations/exports.js';

// Determine the mobile screen width
const SCREEN_WIDTH = Dimensions.get('window').width;

class App extends React.Component
{
    componentDidMount() {
       // StatusBar.setHidden(true);
       alert('app mounted');
    }

    render() {
        return (
            <MainNavigation />
        );
    }
}

export default App;
