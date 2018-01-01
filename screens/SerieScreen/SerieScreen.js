import React from 'react';

import { View,
         ScrollView } from 'react-native';
import { Wrap } from '../../layouts/exports.js';
import { Card, Button, Text, Icon} from 'react-native-elements'
import * as localStore from '../../localStore/localStore.js';

class SerieScreen extends React.Component
{
    state = {
        reps: 0,
        weight: 0
    }

    componentDidMount()
    {

    }

    render()
    {
        return (
            <View>
                <View>
                </View>
                <Icon raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} />
            </View>
        );
    }
}

export default SerieScreen;
