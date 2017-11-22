import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet } from 'react-native';

class ProgramScreen extends React.Component
{
    static navigationOptions = {
        title: 'Program screen'
    };

    render()
    {
        const { params } = this.props.navigation.state;

        let check = (params.name === 'Florin' || params.name === 'florin') ? 'Florinache esti lache?' : `${params.name} esti baiat bun`;
        let imageFlorin = 'http://www.screengeek.net/wp-content/uploads/2016/07/borat.jpg';
        let imageSerban = 'http://www.hoodedutilitarian.com/wp-content/uploads/2016/03/latest.jpg';
        let displayImage = (params.name === 'Florin' || params.name === 'florin') ? imageFlorin : imageSerban;

        return (
            <View>
                <Text style={styles.titleText}>
                    { check }
                </Text>
                <Image
                    style={styles.image}
                    source={{ uri: displayImage }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    titleText: {
        color: 'red',
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ProgramScreen;
