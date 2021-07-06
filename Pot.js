import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'

class Pot extends Component {
    render() {
        return (
        <>
            <View style={styles.container}>
                <Text style={styles.desc}>{this.props.name}</Text>
            </View>
        </>
        )}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 128,
        width: '90%',
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 20
    },
    desc: {
        margin: 10
    }
})

export default Pot;