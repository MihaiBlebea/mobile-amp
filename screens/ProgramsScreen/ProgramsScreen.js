import React from 'react';

import { View,
         ScrollView,
         Image,
         StyleSheet } from 'react-native';
import { HeaderTwin, ErrorMessage, Loader, TitleCard } from '../../components/exports.js';
import { Wrap } from '../../layouts/exports.js';
import { Card, Button, Text, Icon } from 'react-native-elements'
import * as localStore from '../../localStore/localStore.js';

class ProgramsScreen extends React.Component
{
    state = {
        programs: null,
        error: false
    }

    componentDidMount()
    {
        localStore.getData('AMPrograms', (result)=> {
            if(result !== null)
            {
                this.setState({
                    programs: result
                })
            } else {
                this.setState({
                    error: true
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
                            {item.detalii}
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
        return (
            <ScrollView>
                <TitleCard textColor={'white'} bgColor={'blue'} icon='whatshot' />
                <Wrap>
                    <ErrorMessage isShowing={this.state.error}
                                     type={'error'}>Se pare ca nu ai niciun program activ</ErrorMessage>
                </Wrap>
                { this.getProgramCard() }
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
