import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { InputText, StyledButton } from '../../components/exports.js';

class LoginScreen extends React.Component
{
    static navigationOptions = {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="bath" size={30} color="#900" />
        ),
    };

    state = {
        api: 'https://antrenorulmeupersonal.ro/app-api/getAntrForUser.php',
        username: '',
        password: '',
        data: null
    }

    passwordHandler(event)
    {
        let value = event;
        this.setState({
            password: value
        });
    }

    usernameHandler(event)
    {
        let value = event;
        this.setState({
            username: value
        });
    }

    credentialsHandler()
    {
        if(this.state.username !== '' && this.state.password !== '')
        {
            axios.get(this.state.api + '?email=' + this.state.username + '&pwd=' + this.state.password).then((response)=> {
                this.setState({
                    data: response.data
                })
            }).catch((err)=> {
                alert(JSON.stringify(err))
            })
        }
    }

    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.content}>
                        <Text style={styles.label}>Username:</Text>
                        <InputText
                            value={this.state.username}
                            change={(event)=> this.usernameHandler(event)} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.label}>Password:</Text>
                        <InputText
                            value={this.state.password}
                            change={(event)=> this.passwordHandler(event)} />
                    </View>
                    <View style={styles.content}>
                        <StyledButton
                            onPress={this.credentialsHandler.bind(this)}
                            title="Login Now"
                            color="#ea1717"
                            accessibilityLabel="Learn more about this purple button" />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#61DAFB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%'
    },
    label: {
        color: '#000',
        marginBottom: 13
    },
    content: {
        padding: '5%'
    }
});

export default LoginScreen;
