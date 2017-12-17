import React from 'react';
import { AppRegistry, TextInput, StyleSheet } from 'react-native';

function InputText(props)
{
    return (
        <TextInput
            style={styles.input}
            onChangeText={props.change.bind(this)}
            value={props.value}/>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1 ,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default InputText;
