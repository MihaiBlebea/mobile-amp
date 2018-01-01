import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements'

function TitleCard(props)
{
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
            backgroundColor: props.bgColor
        }}>
            <Icon color={props.textColor} name={props.icon} size={62} type="material" />
            <Text style={{
                marginTop: 10,
                fontSize: 22,
                color: props.textColor
            }}>Buttons & Icons</Text>
        </View>
    );
}


export default TitleCard;
