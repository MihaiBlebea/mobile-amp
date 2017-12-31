import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';


class HeaderTwin extends React.Component
{
    render()
    {
        let title = 'AMP Mobile App';
        let navigation = this.props.toggleMenu;

        let menuIcon = (
            <Icon name='bars'
                  type='font-awesome'
                  color='#000'
                  onPress={() => navigation.navigate('DrawerToggle')} />
        );

        let homeIcon = (
            <Icon name='home'
                  type='font-awesome'
                  color='#000'
                  onPress={() => navigation.navigate('Home')} />
        )

        return (
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={ menuIcon }
                centerComponent={{ text: title.toUpperCase(), style: { color: '#000' } }}
                rightComponent={ homeIcon }
                outerContainerStyles={{ backgroundColor: '#61DAFB' }}
                innerContainerStyles={{ justifyContent: 'space-between', alignItems: 'flex-end'}}/>
        );
    }
}

export default HeaderTwin;
