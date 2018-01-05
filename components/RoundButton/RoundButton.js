import React from 'react';
import { Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

function RoundButton(props)
{
    return (
        <Button raised
                buttonStyle={styles.buttonInner}
                containerViewStyle={styles.buttonContainer}
                backgroundColor={props.color}
                title={props.title}
                fontSize={props.fontSize}
                onPress={props.onPress} />
    );
}

const styles = StyleSheet.create({
    buttonInner: {
        borderRadius: 50
    },
    buttonContainer: {
        borderRadius: 50,
        marginBottom: 20
    }
})

export default RoundButton;
