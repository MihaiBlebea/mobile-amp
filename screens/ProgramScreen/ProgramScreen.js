import React from 'react';

import * as store from '../../localStore/exports.js';
import { View,
         ScrollView } from 'react-native';
import { TitleCard, Loader } from '../../components/exports.js';
import { Wrap } from '../../containers/exports.js';
import { List, ListItem } from 'react-native-elements'
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
        Spinner} from 'native-base';

class ProgramScreen extends React.Component
{
    state = {
        program: null,
        toggleDetails: false
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

    handleToggleDetails()
    {
        this.setState({
            toggleDetails: !this.state.toggleDetails
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
            let details = (
                <CardItem>
                    <Body>
                        <Text>
                          { this.state.program.detalii }
                        </Text>
                    </Body>
                </CardItem>
            )

            return (
                <Card>
                    <CardItem button header onPress={()=> this.handleToggleDetails()}>
                        <Left>
                            <Text>Detalii program</Text>
                        </Left>
                        <Right>
                            {(this.state.toggleDetails) ? <Icon name="arrow-up" /> : <Icon name="arrow-down" />}
                        </Right>
                    </CardItem>
                    { (this.state.toggleDetails) ? details : null }
                </Card>
            );
        } else {
            return ( <Spinner /> );
        }
    }

    constructDaysList()
    {
        if(this.state.program !== null)
        {
            return  Object.values(this.state.program.zile).map((item, key) => {
                return (
                    <CardItem key={key} button onPress={()=> this.navigateToDay(item.id)}>
                        <Left>
                            <Icon active name="logo-googleplus" />
                            <Text>{item.titlu}</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                )
            });
        } else {
            return ( <Spinner /> );
        }
    }

    render()
    {
        return (
            <Container>
                <Content>
                <TitleCard textColor={'white'} bgColor={'red'} icon='whatshot' />
                    <Wrap>
                        { this.constructProgramCard() }
                        <Card>
                            { this.constructDaysList() }
                        </Card>
                    </Wrap>
                </Content>
            </Container>
        );
    }
}

export default ProgramScreen;
