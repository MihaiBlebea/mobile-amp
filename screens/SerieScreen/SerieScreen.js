import React from 'react';

import * as store from '../../localStore/exports.js';
import { Wrap } from '../../containers/exports.js';
import { Col, Row, Grid } from 'react-native-easy-grid';
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
        ListItem,
        Badge} from 'native-base';


class SerieScreen extends React.Component
{
    state = {
        exerciseID: null,
        programID: null,
        dayID: null,
        reps: 0,
        weight: 0
    }

    componentDidMount()
    {
        let exerciseID = this.props.navigation.state.params.exID;
        let dayID = this.props.navigation.state.params.dayID;
        let programID = this.props.navigation.state.params.programID;
        this.setState({
            exerciseID: exerciseID,
            programID: programID,
            dayID: dayID
        });
    }

    handleWeightChange(number)
    {
        if(typeof number == 'number')
        {
            let updatedWeight = this.state.weight + number;
            this.setState({
                weight: (updatedWeight > 0) ? updatedWeight : 0
            });
        }
    }

    handleRepsChange(number)
    {
        if(typeof number == 'number')
        {
            let updatedReps = this.state.reps + number;
            this.setState({
                reps: (updatedReps > 0) ? updatedReps : 0
            });
        }
    }

    handleSaveSerie()
    {
        let foo = this.props.navigation;
        store.setLogSerie(this.state.programID, this.state.dayID, this.state.exerciseID, {r: this.state.reps, g: this.state.weight}, (result)=> {
            console.log('ceva', foo)
            foo.navigate('Day', {
                dayID: this.state.dayID,
                programID: this.state.programID
            });
        });
    }

    render()
    {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7' }}>
                            <Wrap>
                                <Button block success onPress={()=> this.handleWeightChange(-2.5)}><Text>{'-2.5 kg'}</Text></Button>
                            </Wrap>
                            <Wrap>
                                <Button block success onPress={()=> this.handleWeightChange(-5)}><Text>{'-5 kg'}</Text></Button>
                            </Wrap>
                            <Wrap>
                                <Button block success onPress={()=> this.handleWeightChange(-10)}><Text>{'-10 kg'}</Text></Button>
                            </Wrap>
                        </Col>
                        <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>{this.state.weight} kg</Text>
                        </Col>
                        <Col style={{ backgroundColor: '#00CE9F' }}>
                            <Wrap>
                                <Button block success onPress={()=> this.handleWeightChange(2.5)}><Text>{'2.5 kg'}</Text></Button>
                            </Wrap>
                            <Wrap>
                                <Button block success onPress={()=> this.handleWeightChange(5)}><Text>{'5 kg'}</Text></Button>
                            </Wrap>
                            <Wrap>
                                <Button block success onPress={()=> this.handleWeightChange(10)}><Text>{'10 kg'}</Text></Button>
                            </Wrap>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: '#00CE9F' }}>
                            <Wrap>
                                <Button block success onPress={()=> this.handleRepsChange(-1)}><Text>{'-1 rep'}</Text></Button>
                            </Wrap>
                        </Col>
                        <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>{this.state.reps} Rep</Text>
                        </Col>
                        <Col style={{ backgroundColor: '#00CE9F' }}>
                            <Wrap>
                                <Button block success onPress={()=> this.handleRepsChange(1)}><Text>{'1 rep'}</Text></Button>
                            </Wrap>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: '#00CE9F' }}>
                            <Wrap>
                                <Button block success onPress={()=> this.handleSaveSerie()}><Text>Salveaza</Text></Button>
                            </Wrap>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default SerieScreen;
