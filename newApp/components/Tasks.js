import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Task(props) {
    return (
        <TouchableOpacity onPress={() => props.deleteTask(props.item.id)}>
            <View style={styles.list}>
                <Text>{props.item.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
        backgroundColor: 'powderblue',
        marginVertical: 5
    }
})

export default Task