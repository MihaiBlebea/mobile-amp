import React from 'react';
import { View, StyleSheet } from 'react-native';

function Wrap(props)
{
    return (
        <View style={styles.content}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding:10
    }
});

export default Wrap;
