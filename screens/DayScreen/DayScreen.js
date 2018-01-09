import React from 'react';

import * as store from '../../localStore/exports.js';
import { View,
         ScrollView } from 'react-native';
import { TitleCard } from '../../components/exports.js';
import { Wrap } from '../../containers/exports.js';
import { Container,
        Header,
        Title,
        Content,
        Card,
        CardItem,
        Thumbnail,
        Footer,
        Button,
        FooterTab,
        Left,
        Right,
        Body,
        Icon,
        Text,
        Toast,
        Spinner,
        List,
        ListItem} from 'native-base';


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
                    <Card key={key} style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail square source={require('../../assets/img/logo.png')} />
                                <Body>
                                    <Text>{item.nume + ' ' + item.varianta}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{marginBottom: 10}}>
                                    {item.serii} serii a cate {item.repetari} repetari cu {item.pauza} secunde pauza
                                </Text>
                                <List>
                                    { this.constructSerieList(item.id_ex) }
                                </List>
                                <Button block onPress={()=> this.navigateToSerie(item.id_ex)}>
                                    <Text>Primary</Text>
                                </Button>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                );
            });
        } else {
            return ( <Spinner /> );
        }
    }

    constructSerieList(exerciseID)
    {
        for(let i = 0; i < this.state.log.exercises.length; i++)
        {
            let exercise = this.state.log.exercises[i];
            if(exercise.id == exerciseID)
            {

                return exercise.series.map((serie, key)=> {
                    return (
                        <ListItem icon key={key}>
                            <Left>
                                <Icon name="arrow-forward" />
                            </Left>
                            <Body>
                                <Text>reps</Text>
                            </Body>
                            <Right>
                                <Text>{serie.r} reps cu {serie.g} kg</Text>
                            </Right>
                        </ListItem>
                    )
                });
            }
        }
    }

    render()
    {
        return (
            <Container>
                <Content>
                    <TitleCard textColor={'white'} bgColor={'green'} icon='whatshot' />
                    <Wrap>
                        { this.constructDayCard() }
                        <Button block onPress={()=> this.handleSaveDay()}>
                            <Text>Salveaza</Text>
                        </Button>
                    </Wrap>
                </Content>
            </Container>
        );
    }
}

export default DayScreen;
