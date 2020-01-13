import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from './Card'

const StartGame = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>
                Guess the magic number
            </Text>
            <Text >
               Maximum 5 tries
            </Text>
            <Card style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your Number"
                    style={styles.input}
                    keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset"   /></View>
                    <View style={styles.button}><Button title="confirm" /></View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: "center"
    },
    text: {
        fontSize: 20
    },
    input: {
        margin: 20,
        fontSize: 25
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: 'pink',
        width: 100
    }
})

export default StartGame