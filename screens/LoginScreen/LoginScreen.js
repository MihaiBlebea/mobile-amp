import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as localStore from '../../localStore/localStore.js';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { InputText, StyledButton, Loader, ErrorMessage } from '../../components/exports.js';

class LoginScreen extends React.Component
{
    state = {
        api: 'https://antrenorulmeupersonal.ro/app-api/getAntrForUser.php',
        username: 'tester.aplicatie@yahoo.com',
        password: 'AMi665hVRZ',
        data: null,
        loading: false,
        error: false
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

    toggleLoading()
    {
        let loading = this.state.loading;
        this.setState({
            loading: !loading
        });
    }

    credentialsHandler()
    {
        if(this.state.username !== '' && this.state.password !== '')
        {
            this.toggleLoading();
            axios.get(this.state.api + '?email=' + this.state.username + '&pwd=' + this.state.password).then((response)=> {
                let payload = [
                    {
                        key: 'isLogged',
                        value: {
                            isLogged: true,
                            username: this.state.username,
                            password: this.state.password
                        }
                    },
                    {
                        key: 'AMPrograms',
                        value: response.data
                    }
                ];

                localStore.saveMultipleData(payload, ()=> {
                    this.props.navigation.goBack();
                });

            }).catch((err)=> {
                this.setState({
                    error: true
                })
                this.toggleLoading();
                console.log(JSON.stringify(err))
            })
        }
    }

    render()
    {
        return (
            <View style={styles.container}>

                <Loader isLoading={this.state.loading}/>
                <ErrorMessage isShowing={this.state.error}
                              type={'error'}>Datele introduse nu sunt valabile</ErrorMessage>

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
