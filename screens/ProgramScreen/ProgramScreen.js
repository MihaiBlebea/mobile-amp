import React from 'react';

import { View,
         ScrollView } from 'react-native';
import { TitleCard, Loader } from '../../components/exports.js';
import { Wrap } from '../../layouts/exports.js';
import { Card, Button, Text, Icon, List, ListItem } from 'react-native-elements'
import * as localStore from '../../localStore/localStore.js';

class ProgramScreen extends React.Component
{
    state = {
        programId : null,
        program: null
    }

    componentDidMount()
    {
        this.setState({
            programId: this.props.navigation.state.params.programId
        });

        localStore.getData('AMPrograms', (result)=> {
            if(result !== null)
            {
                for(let i = 0; i < Object.keys(result).length; i++)
                {
                    if(result[i].id == this.state.programId)
                    {
                        this.setState({
                            program: result[i]
                        })
                    }
                }
            }
        })
    }

    navigateToDay(id)
    {
        for(let i = 0; i < Object.values(this.state.program.zile).length; i++)
        {
            if(Object.values(this.state.program.zile)[i].id == id)
            {
                this.props.navigation.navigate('Day', {
                    dayID: id,
                    programID: this.state.program.id,
                    screenTitle: Object.values(this.state.program.zile)[i].titlu
                });
            }
        }
    }

    constructProgramCard()
    {
        if(this.state.program !== null)
        {
            return (
                <Card title='Detalii Program'>
                    <Text style={{marginBottom: 10}}>
                        { this.state.program.detalii }
                    </Text>
                </Card>
            );
        } else {
            return ( <Loader isLoading={true}/> );
        }
    }

    constructProgramList()
    {
        if(this.state.program !== null)
        {
            return  Object.values(this.state.program.zile).map((item, i) => {
                return (
                    <ListItem key={i}
                        title={item.titlu}
                        leftIcon={{ name: 'whatshot' }}
                        onPress={()=> this.navigateToDay(item.id)} />
                )
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
                    <TitleCard textColor={'white'} bgColor={'red'} icon='whatshot' />
                    { this.constructProgramCard() }
                    <Wrap>
                        <List>
                            { this.constructProgramList() }
                        </List>
                    </Wrap>
                </ScrollView>
            </View>
        );
    }
}

export default ProgramScreen;
