import React from 'react';

import * as store from '../../localStore/exports.js';
import { StyleSheet, Image, View } from 'react-native';
import { Wrap } from '../../containers/exports.js';
import { TitleCard } from '../../components/exports.js';
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


class NativeProgramsScreen extends React.Component
{
    state = {
        programs: null
    }

    componentDidMount()
    {
        // this.handleCheckLogin();
        this.handleGetPrograms();
    }

    handleCheckLogin()
    {
        store.isLogin((user)=> {
            if(user == null) { this.props.navigation.navigate('Login'); }
        })
    }

    handleGetPrograms()
    {
        store.getPrograms((programs)=> {
            if(programs == null) {
                this.props.navigation.navigate('Login');
            } else {
                this.setState({
                    programs: programs
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
                    <Card key={key} style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail square source={require('../../assets/img/logo.png')} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../assets/img/coperta.png')}
                                       style={{ flex:1, height: 200, width: 200}}
                                       resizeMode="contain"/>
                                <Text>
                                    //Your text here
                                </Text>
                                <Button block onPress={()=> this.navigateToProgram(item.id)}>
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
            return ( <Spinner color='green' /> );
        }
    }

    render()
    {
        let noProgramCard = (
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            Se pare ca nu ai niciun program in cont sau nu esti logat
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )

        return (
            <Container>
                <Content>
                    <TitleCard textColor={'white'} bgColor={'blue'} icon='whatshot' />
                    <Wrap>
                        { (this.state.programs == null) ? noProgramCard : this.getProgramCard() }
                    </Wrap>
                </Content>
            </Container>
        );
    }
}


export default NativeProgramsScreen;
