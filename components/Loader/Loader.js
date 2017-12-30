import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Loader(props)
{
    let loader = (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.image}
                       source={{ uri: 'https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif' }}/>
                <Text style={styles.text}>Loading</Text>
            </View>
        </View>
    );
    return (props.isLoading) ? loader : null;

}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 20
    },
    innerContainer: {
        marginTop: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    text: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center'
    }
});

export default Loader;
