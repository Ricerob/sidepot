import React, { Component } from 'react'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

const Pot = ({key, name, removePot}) => {

    const handleRemove = () => {
        console.log("Bruh?");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.desc}>{name}</Text>
            <TextInput
            style={{height: 50, padding: 10, fontSize: 30}}
            keyboardType='numeric'
            maxLength={9}
            placeholder='Enter Bet Amount'
            />
            <Button onClick={handleRemove} title="Remove"></Button>
        </View>
    )
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