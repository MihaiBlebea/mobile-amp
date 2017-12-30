import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text, View, Button, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { InputText, Header, StyledButton } from '../../components/exports.js';
import { Wrap } from '../../layouts/exports.js';

class HomeScreen extends React.Component
{
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="bath" size={30} color="#900" />
        ),
    };

    state = {
        text: 'AMP',
        title: null,
        body: null
    }

    componentDidMount()
    {
        this.saveData();
    }

    saveData()
    {
        AsyncStorage.setItem('UID123', 'Serban', () => {
            console.log('saved')
        });
    }

    getData()
    {
        AsyncStorage.getItem('UID123', (err, result) => {
            console.log(result);
        });
    }

    render()
    {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Header toggleMenu={this.props.navigation}/>
                <Wrap>
                    <Text onPress={()=> this.getData()}>Serban</Text>
                </Wrap>
            </View>
        );
    }
}

export default HomeScreen;
