import React from 'react';

import { View,
         ScrollView } from 'react-native';
import { TitleCard, Loader } from '../../components/exports.js';
import { Wrap } from '../../containers/exports.js';
import { Card, Button, Text, Icon, List, ListItem } from 'react-native-elements'
import * as store from '../../localStore/exports.js';

class ProgramScreen extends React.Component
{
    state = {
        program: null
    }

    componentDidMount()
    {
        this.handleGetProgram();
    }

    handleGetProgram()
    {
        store.getProgram(this.props.navigation.state.params.programId, (program)=> {
            this.setState({ program: program })
        })
    }

    navigateToDay(id)
    {
        this.props.navigation.navigate('Day', {
            dayID: id,
            programID: this.state.program.id,
            screenTitle: this.state.program.titlu
        });
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
