import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ErrorMessage(props)
{
    let error = (
        <View style={(props.type == 'success') ? styles.successContainer : styles.errorContainer }>
            <Text style={(props.type == 'success') ? styles.successText : styles.errorText }>{props.children}</Text>
        </View>
    );

    return (props.isShowing) ? error : null;
}

const styles = StyleSheet.create({
    successContainer: {
        borderWidth: 1,
        borderColor: '#c3e6cb',
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: '#d4edda',
        padding: 15
    },
    successText: {
        color: '#155724'
    },
    errorContainer: {
        borderWidth: 1,
        borderColor: '#f5c6cb',
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: '#f8d7da',
        padding: 15
    },
    text: {
        color: '#721c24'
    }
});

export default ErrorMessage;
