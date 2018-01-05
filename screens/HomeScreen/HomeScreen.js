import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as localStore from '../../localStore/localStore.js';
import { View, AsyncStorage, NetInfo, ScrollView } from 'react-native';
import { InputText, HeaderTwin, StyledButton, TitleCard } from '../../components/exports.js';
import { Wrap } from '../../layouts/exports.js';
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

    render()
    {
        let payload = [
            {key: 'key1', value: {name: 'Cristina', job: 'Media buyer'}},
            {key: 'key2', value: {name: 'Serban', job: 'Developer'}},
            {key: 'key3', value: {name: 'Horia', job: 'Time waster'}}
        ];

        return (
            <View>
                <HeaderTwin toggleMenu={this.props.navigation}/>
                <ScrollView>
                    <TitleCard textColor={'white'} bgColor={'red'} icon='whatshot' />
                    <Wrap>
                        <Text>Serban</Text>
                        <StyledButton onPress={()=> localStore.saveData('Florinel', {name: 'Florinel', job: 'Screw seller'}) } title={'Save data'}/>
                        <StyledButton onPress={()=> localStore.saveMultipleData(payload, (result)=> {console.log(result)})} title={'Save Multiple'}/>
                        <StyledButton onPress={()=> localStore.getData('log', (result)=> {console.log(result)})} title={'Get Data'}/>
                        <StyledButton onPress={()=> localStore.getAllKeys()} title={'Get Keys'}/>
                        <StyledButton onPress={()=> localStore.mergeData('Florinel', {hillbilly: true})} title={'Merge'}/>
                        <StyledButton onPress={()=> localStore.clearData()} title={'Clear'}/>
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
