import React from 'react';
import axios from 'axios';

import { Text, View, Button } from 'react-native';
import { InputText } from '../../components/exports.js';

class HomeScreen extends React.Component
{
    static navigationOptions = {
        title: 'Home screen',
    };

    state = {
        text: 'Serban',
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
                <Text>
                    Please delete the name below and insert your own:
                </Text>
                <InputText
                    value={this.state.text}
                    change={(event) => this.inputChangeHandler(event)} />
                <Button
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
