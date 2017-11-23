import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component
{
    render()
    {
        let title = 'antrenorul meu personal';
        return (
            <View style={styles.head}>
                <Text style={styles.title}>
                    { title.toUpperCase() }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        height: 50,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff'
    }
});

export default Header;
