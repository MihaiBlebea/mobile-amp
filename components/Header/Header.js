import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component
{
    render()
    {
        let title = 'AMP Mobile App';
        let navigation = this.props.toggleMenu;

        return (
            <View style={styles.head}>
                <Icon style={styles.icon}
                      onPress={() => navigation.navigate('DrawerToggle')}
                      name="bars"
                      size={30}
                      color="#000" />
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
        backgroundColor: '#61DAFB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 3,
        color: '#000'
    },
    icon: {
        padding: 5,
        flex:1
    }
});

export default Header;
