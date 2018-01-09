import React from 'react';

import * as localStore from '../../localStore/localStore.js';
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
        ListItem} from 'native-base';


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
        this.props.navigation.goBack();
    }

    // navigateToDay()
    // {
    //     this.props.navigation.navigate('Day', {
    //         exID: this.state.exerciseID,
    //         dayID: this.state.dayID,
    //         programID: this.state.programID,
    //         reps: this.state.reps,
    //         weight: this.state.weight
    //     });
    // }

    render()
    {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 700 }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 700 }}></Col>
                    </Grid>


                </Content>
            </Container>
        );
    }
}

export default SerieScreen;
