import React from 'react';

import { View,
         Image,
         StyleSheet } from 'react-native';
import { HeaderTwin, ErrorMessage, Loader } from '../../components/exports.js';
import { Wrap } from '../../layouts/exports.js';
import { Card, Button, Text } from 'react-native-elements'
import * as localStore from '../../localStore/localStore.js';

class ProgramScreen extends React.Component
{
    state = {
        programs: null,
        error: false,
        loading: false
    }

    componentDidMount()
    {
        localStore.getData('programs', (result)=> {
            if(result !== null)
            {
                this.setState({
                    programs: result
                })
            } else {
                this.setState({
                    error: true
                })
            }
        })
    }

    toggleLoading()
    {
        let loading = this.state.loading;
        this.setState({
            loading: !loading
        });
    }

    render()
    {

        // if(this.state.programs !== null)
        // {
        //     let programs = this.state.programs;
        //     programs.map((item)=> {
        //         console.log(item)
        //     })
        // }

        // if(this.state.programs !== null)
        // {
        //     let programs = this.state.programs.map((index, item)=> {
        //         return (
        //             <Card title={item.titlu}
        //                   image={require('../../assets/img/coperta.png')}>
        //                 <Text style={{marginBottom: 10}}>
        //                     The idea with React Native Elements is more about component structure than actual design.
        //                 </Text>
        //                 <Button backgroundColor='#03A9F4'
        //                         buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        //                         title='VIEW NOW' />
        //             </Card>
        //         );
        //     });
        // }

        return (
            <View>
                <HeaderTwin toggleMenu={this.props.navigation}/>
                <Loader isLoading={this.state.loading}/>
                <Wrap>
                    <ErrorMessage isShowing={this.state.error}
                                  type={'error'}>Se pare ca nu ai niciun program activ</ErrorMessage>
                    <Text style={styles.titleText}>
                        Serban
                    </Text>
                </Wrap>
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
