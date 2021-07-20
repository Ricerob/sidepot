import React, { Component } from 'react'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

class Pot extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.desc}>{this.props.text}</Text>
                <TextInput
                style={{height: 50, padding: 10, fontSize: 30}}
                keyboardType='numeric'
                maxLength={9}
                placeholder='Enter Bet Amount'
                />
                <Button onPress={() => this.props.onDelete(this.props.text)} title="Remove"><Text style={styles.desc}>Remove</Text></Button>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 128,
        width: '99%',
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 20
    },
    desc: {
        margin: 10
    }
})

export default Pot;