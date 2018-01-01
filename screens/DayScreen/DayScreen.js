import React from 'react';

import { View,
         ScrollView } from 'react-native';
import { TitleCard } from '../../components/exports.js';
import { Wrap, MarginLayout } from '../../layouts/exports.js';
import { Card, Button, Text, Icon, List, ListItem } from 'react-native-elements'
import * as localStore from '../../localStore/localStore.js';

class DayScreen extends React.Component
{
    state = {
        day: null
    }

    componentDidMount()
    {
        let dayID = this.props.navigation.state.params.dayID;
        let programID = this.props.navigation.state.params.programID;

        localStore.getData('AMPrograms', (result)=> {
            if(result !== null)
            {
                for(let i = 0; i < Object.keys(result).length; i++)
                {
                    if(result[i].id == programID)
                    {
                        for(let j = 0; j < Object.values(result[i].zile).length; j++)
                        {
                            if(Object.values(result[i].zile)[j].id == dayID)
                            {
                                this.setState({
                                    day: Object.values(result[i].zile)[j]
                                })
                            }
                        }
                    }
                }
            }
        });
    }

    navigateToSerie(id)
    {
        for(let i = 0; i < Object.values(this.state.day.exercitii).length; i++)
        {
            if(Object.values(this.state.day.exercitii)[i].id_ex == id)
            {
                this.props.navigation.navigate('Serie', {
                    exID: id,
                    screenTitle: Object.values(this.state.day.exercitii)[i].nume
                });
            }
        }
    }

    constructDayCard()
    {
        if(this.state.day !== null)
        {
            return Object.values(this.state.day.exercitii).map((item, key)=> {
                return (
                    <Card key={key} title={item.nume + ' ' + item.varianta}>
                        <Text style={{marginBottom: 10}}>
                            {item.serii} serii a cate {item.repetari} repetari cu {item.pauza} secunde pauza
                        </Text>
                        <Button backgroundColor='green'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Adauga Serie'
                            onPress={()=> this.navigateToSerie(item.id_ex)}/>
                    </Card>
                );
            });
        } else {
            return null;
        }
    }


    render()
    {
        return (
            <View>
                <ScrollView>
                    <TitleCard textColor={'white'} bgColor={'green'} icon='whatshot' />
                    { this.constructDayCard() }
                    <MarginLayout>
                        <Button backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Salveaza Antrenamentul'/>
                    </MarginLayout>
                </ScrollView>
            </View>
        );
    }
}

export default DayScreen;
