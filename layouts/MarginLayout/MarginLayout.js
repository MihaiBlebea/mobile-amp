import React from 'react';
import { View, StyleSheet } from 'react-native';

function MarginLayout(props)
{
    return (
        <View style={styles.content}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop:10,
        marginBottom:10
    }
});

export default MarginLayout;
