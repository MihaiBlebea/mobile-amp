import React from 'react';
import axios from 'axios';

import * as store from '../../localStore/exports.js';
import { Wrap } from '../../containers/exports.js';
import { AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class NativeHomeScreen extends React.Component
{

    handleCreateLog()
    {
        store.setLogSerie(1, 100, 100, {r: 20, g: 100}, (log)=> {console.log(log)});
    }

    render()
    {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Wrap>
                        <Text>
                            This is Content Section
                        </Text>
                    </Wrap>
                </Content>
            </Container>
        );
    }
}

export default NativeHomeScreen;
