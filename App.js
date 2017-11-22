import React from 'react';
import {
    StyleSheet,
    Text,
    View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomeScreen, ProgramScreen } from './screens/exports.js';

// Navigation map
const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Program: { screen: ProgramScreen }
});

class App extends React.Component {
    render() {
        return (
            <SimpleApp />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
