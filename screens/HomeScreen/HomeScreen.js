import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as store from '../../localStore/exports.js';
import * as localStore from '../../localStore/localStore.js';
import { View, AsyncStorage, ScrollView } from 'react-native';
import { InputText, HeaderTwin, StyledButton, TitleCard } from '../../components/exports.js';
import { Wrap } from '../../containers/exports.js';
import { Card, Button, Text } from 'react-native-elements';

class HomeScreen extends React.Component
{

    componentWillMount()
    {
        localStore.getData('isLogged', (result)=> {
            if(result == null)
            {
                this.props.navigation.navigate('Login');
            }
        })
    }

    handleCreateLog()
    {
        store.setLogSerie(1, 100, 100, {r: 20, g: 100}, (log)=> {console.log(log)});
    }

    render()
    {
        let payload = [
            {key: 'key1', value: {name: 'Cristina', job: 'Media buyer'}},
            {key: 'key2', value: {name: 'Serban', job: 'Developer'}},
            {key: 'key3', value: {name: 'Horia', job: 'Time waster'}}
        ];

        return (
            <View>
                <ScrollView>
                    <TitleCard textColor={'white'} bgColor={'red'} icon='whatshot' />
                    <Wrap>
                        <Text>Serban</Text>
                        <StyledButton onPress={()=> store.getProgram(1, (result)=> {console.log(result)})} title={'Get Data'}/>
                        <StyledButton onPress={()=> store.getDay(1, 100, (result)=> {console.log(result)})} title={'Get Day'}/>
                        <StyledButton onPress={()=> store.getExercise(1, 100, 100, (result)=> {console.log(result)})} title={'Get Exercise'}/>
                        <StyledButton onPress={()=> store.initLogDay(1, 100, null, (result)=> {console.log(result)})} title={'Set log'}/>
                        <StyledButton onPress={()=> store.getLogs((result)=> {console.log(result)})} title={'Get logs'}/>
                        <StyledButton onPress={()=> store.resetLogs((result)=> {console.log(result)})} title={'Reset Logs'}/>
                        <StyledButton onPress={()=> this.handleCreateLog()} title={'Save Serie Logs'}/>
                    </Wrap>
                    <Card title={'Antrenorul Meu Personal'}>
                        <Button icon={{name: 'code'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;
