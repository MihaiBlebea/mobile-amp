import React from 'react';

import { View,
         ScrollView } from 'react-native';
import { TitleCard, Loader } from '../../components/exports.js';
import { Wrap } from '../../containers/exports.js';
import { Card, Button, Text, Icon, List, ListItem, Divider } from 'react-native-elements';
import * as store from '../../localStore/exports.js';

class DayScreen extends React.Component
{
    state = {
        day: null,
        log: null
    }

    componentDidMount()
    {
        let dayID = this.props.navigation.state.params.dayID;
        let programID = this.props.navigation.state.params.programID;

        this.handleGetDay(programID, dayID);
        this.handleInitLogDay(programID, dayID);
        this.handleGetLogs(programID, dayID);
    }

    handleGetDay(programID, dayID)
    {
        store.getDay(programID, dayID, (day)=> {
            this.setState({
                day: day
            });
        })
    }

    handleInitLogDay(programID, dayID)
    {
        store.initLogDay(programID, dayID, (result)=> {
            console.log(result)
        })
    }

    handleGetLogs(programID, dayID)
    {
        store.getLogDay(programID, dayID, (log)=> {
            this.setState({
                log: log
            });
        })
    }

    handleSaveDay()
    {
        this.props.navigation.goBack();
    }

    navigateToSerie(id)
    {
        this.props.navigation.navigate('Serie', {
            dayID: this.state.dayID,
            programID: this.state.programID,
            exID: id,
            screenTitle: this.state.day.nume
        });
    }

    constructDayCard()
    {
        if(this.state.day !== null && this.state.log !== null)
        {
            return Object.values(this.state.day.exercitii).map((item, key)=> {
                return (
                    <Card key={key} title={item.nume + ' ' + item.varianta}>
                        <Text style={{marginBottom: 10}}>
                            {item.serii} serii a cate {item.repetari} repetari cu {item.pauza} secunde pauza
                        </Text>
                        { this.constructSerieList(item.id_ex) }
                        <Divider />
                        <Button backgroundColor='green'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Adauga Serie'
                            onPress={()=> this.navigateToSerie(item.id_ex)}/>
                    </Card>
                );
            });
        } else {
            return ( <Loader isLoading={true}/> );
        }
    }

    constructSerieList(exerciseID)
    {
        for(let i = 0; i < this.state.log.exercises.length; i++)
        {
            let exercise = this.state.log.exercises[i];
            if(exercise.id == exerciseID)
            {
                return exercise.series.map((serie, index)=> {
                    return <Text key={index}>{serie.r} - {serie.g} kg</Text>
                });
                break;
            }
        }
    }


    render()
    {
        return (
            <View>
                <ScrollView>
                    <TitleCard textColor={'white'} bgColor={'green'} icon='whatshot' />
                    { this.constructDayCard() }
                    <Button backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Salveaza Antrenamentul'
                        onPress={()=> this.handleSaveDay()}/>
                </ScrollView>
            </View>
        );
    }
}

export default DayScreen;
