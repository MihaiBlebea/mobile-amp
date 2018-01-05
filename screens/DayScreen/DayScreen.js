import React from 'react';

import { View,
         ScrollView } from 'react-native';
import { TitleCard } from '../../components/exports.js';
import { Wrap, MarginLayout, Loader } from '../../layouts/exports.js';
import { Card, Button, Text, Icon, List, ListItem } from 'react-native-elements'
import * as localStore from '../../localStore/localStore.js';

class DayScreen extends React.Component
{
    state = {
        day: null,
        date: null,
        exercise: [],
        series: []
    }

    componentDidMount()
    {
        this.setState({ date: this.getTodayDate() });
        this.getDayModel();
        this.getNewSerie();
    }

    getNewSerie()
    {
        let reps = this.props.navigation.state.params.reps;
        let weight = this.props.navigation.state.params.weight;
        if(reps !== undefined && weight !== undefined)
        {
            console.log(reps, weight);
        }
    }

    getDayModel()
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
                                    day: Object.values(result[i].zile)[j],
                                    dayID: dayID,
                                    programID: programID
                                })
                            }
                        }
                    }
                }
            } else {
                return ( <Loader isLoading={true}/> );
            }
        });
    }

    getTodayDate()
    {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        dd = (dd < 10) ? '0' + dd : dd;
        mm = (mm < 10) ? '0' + mm : mm;

        return yyyy + '-' + mm + '-' + dd;
    }

    handleSaveDay()
    {
        this.props.navigation.goBack();
    }

    navigateToSerie(id)
    {
        for(let i = 0; i < Object.values(this.state.day.exercitii).length; i++)
        {
            if(Object.values(this.state.day.exercitii)[i].id_ex == id)
            {
                this.props.navigation.navigate('Serie', {
                    dayID: this.state.dayID,
                    programID: this.state.programID,
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
                            title='Salveaza Antrenamentul'
                            onPress={()=> this.handleSaveDay()}/>
                    </MarginLayout>
                </ScrollView>
            </View>
        );
    }
}

export default DayScreen;
