import React from 'react';

import * as store from '../../localStore/exports.js';
import { View,
         ScrollView,
         Image,
         StyleSheet } from 'react-native';
import { HeaderTwin, ErrorMessage, Loader, TitleCard } from '../../components/exports.js';
import { Wrap } from '../../containers/exports.js';
import { Card, Button, Text, Icon } from 'react-native-elements'


class ProgramsScreen extends React.Component
{
    state = {
        programs: null
    }

    componentDidMount()
    {
        // this.handleCheckLogin();
        this.handleGetPrograms();
    }

    handleCheckLogin()
    {
        store.isLogin((user)=> {
            if(user == null) { this.props.navigation.navigate('Login'); }
        })
    }

    handleGetPrograms()
    {
        store.getPrograms((programs)=> {
            if(programs == null) {
                this.props.navigation.navigate('Login');
            } else {
                this.setState({
                    programs: programs
                })
            }
        })
    }

    toggleLoading()
    {
        let loading = this.state.loading;
        this.setState({
            loading: !loading
        });
    }

    navigateToProgram(id)
    {
        this.props.navigation.navigate('Program', {
            programId: id,
            screenTitle: this.state.programs[id].titlu
        });
    }

    getProgramCard()
    {
        if(this.state.programs !== null)
        {
            return Object.values(this.state.programs).map((item, key)=> {
                return (
                    <Card key={key} title={item.titlu}
                          image={require('../../assets/img/coperta.png')}>
                        <Text style={{marginBottom: 10}}>
                            Detalii
                        </Text>
                        <Button backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='VIEW NOW'
                                onPress={()=> this.navigateToProgram(item.id)} />
                    </Card>
                );
            });
        } else {
            return ( <Loader isLoading={true}/> );
        }
    }

    render()
    {
        let noProgramCard = (
            <Card title={'Login'}>
                <Text style={{marginBottom: 10}}>
                    Din pacate nu ai niciun program valabil.
                </Text>
                <Button backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Login in cont'
                        onPress={()=> this.props.navigation.navigate('Login')} />
            </Card>
        )

        return (
            <ScrollView>
                <TitleCard textColor={'white'} bgColor={'blue'} icon='whatshot' />
                { (this.state.programs == null) ? noProgramCard : this.getProgramCard() }
            </ScrollView>
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
    }
});

export default ProgramsScreen;
