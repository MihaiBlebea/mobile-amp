import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

function StyledButton(props)
{
    return (
        <Button
            style={styles.button}
            onPress={props.onPress}
            title={props.title}
            color="#ea1717"
            accessibilityLabel="This is a button" />

    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        borderColor: '#f3f3f3',
        borderWidth: 1
    }
});

export default StyledButton;
