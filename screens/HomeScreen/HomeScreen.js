import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { InputText, Header, StyledButton } from '../../components/exports.js';



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
        let baseUrl = 'https://jsonplaceholder.typicode.com';
        axios.get(baseUrl + '/posts/1').then((response)=> {
            console.log('Receive via http');
            this.setState({
                title: response.data.title,
                body: response.data.body
            });
        }).catch((err)=> {
            console.log(err);
        })
    }

    inputChangeHandler(event)
    {
        let value = event;
        this.setState({
            text: value
        })
    }

    render()
    {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Header />
                <InputText
                    value={this.state.text}
                    change={(event) => this.inputChangeHandler(event)} />
                <StyledButton
                    onPress={ () => navigate('Program', { name: this.state.text }) }
                    title="Check result!"
                    color="#ea1717"
                    accessibilityLabel="Learn more about this purple button" />
                <Text>
                    This content is requested via http:
                </Text>
                <Text>
                    {this.state.title}
                </Text>
                <Text>
                    {this.state.body}
                </Text>
            </View>
        );
    }
}

export default HomeScreen;
