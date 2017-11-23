import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Text,
    View,
    Image,
    StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Header } from '../../components/exports.js';

class ProgramScreen extends React.Component
{
    static navigationOptions = {
        tabBarLabel: 'Programe',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="rocket" size={30} color="#900" />
        ),
    }

    render()
    {
        const { params } = this.props.navigation.state;

        return (
            <View>
                <Header />
                <Text style={styles.titleText}>
                    Serban
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    titleText: {
        color: 'red',
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ProgramScreen;
