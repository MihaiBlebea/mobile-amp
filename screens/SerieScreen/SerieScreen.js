import React from 'react';

import { View, ScrollView, StyleSheet } from 'react-native';
import { Wrap } from '../../layouts/exports.js';
import { RoundButton } from '../../components/exports.js';
import { Card, Text, Divider, Button} from 'react-native-elements'
import * as localStore from '../../localStore/localStore.js';

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
            <View>
                <View style={styles.firstContainer}>
                    <View style={styles.oneThird}>
                        <RoundButton color="green" title="-10kg" fontSize={20} onPress={()=> this.handleWeightChange(-10)}/>
                        <RoundButton color="green" title="-5kg" fontSize={18} onPress={()=> this.handleWeightChange(-5)}/>
                        <RoundButton color="green" title="-2.5kg" fontSize={20} onPress={()=> this.handleWeightChange(-2.5)}/>
                    </View>
                    <View style={styles.oneThird}>
                        <Text h1 style={{textAlign: 'center'}}>{this.state.weight}kg</Text>
                    </View>
                    <View style={styles.oneThird}>
                        <RoundButton color="green" title="+10kg" fontSize={20} onPress={()=> this.handleWeightChange(10)}/>
                        <RoundButton color="green" title="+5kg" fontSize={18} onPress={()=> this.handleWeightChange(5)}/>
                        <RoundButton color="green" title="+2.5kg" fontSize={20} onPress={()=> this.handleWeightChange(2.5)}/>
                    </View>
                </View>

                <Divider style={{ backgroundColor: 'blue' }} />

                <View style={styles.firstContainer}>
                    <View style={styles.oneThird}>
                        <RoundButton color="green" title="-" fontSize={20} onPress={()=> this.handleRepsChange(-1)}/>
                    </View>
                    <View style={styles.oneThird}>
                        <Text h1 style={{textAlign: 'center'}}>{this.state.reps}reps</Text>
                    </View>
                    <View style={styles.oneThird}>
                        <RoundButton color="green" title="+" fontSize={20} onPress={()=> this.handleRepsChange(1)}/>
                    </View>
                </View>
                <Button backgroundColor='blue'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Salveaza seria'
                    onPress={()=> this.handleSaveSerie()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    oneThird: {
        flex: 1
    }
})

export default SerieScreen;
