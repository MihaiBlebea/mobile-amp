import React from 'react';
import { AppRegistry, TextInput } from 'react-native';

class InputText extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         text: 'Serban'
    //     };
    // }

    render()
    {
        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={this.props.change.bind(this)}
                value={this.props.value}/>
        );
    }
}

export default InputText;
