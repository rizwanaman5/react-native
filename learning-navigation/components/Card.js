import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = (props) => {
    return (
        <View style={style.inputContainer}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        elevation: 10,
        padding: 20,
        margin: 20,
        borderRadius: 8
    }
})

export default Card