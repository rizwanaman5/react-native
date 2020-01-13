import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

function Input(props) {
    const [text, setText] = useState('')
    function handleText(text) {
        setText(text)
    }
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.sec}>
                <TextInput style={styles.input}
                    placeholder="Enter task"
                    value={text}
                    onChangeText={handleText}
                />
                <Button title="press me" onPress={() => props.handleButton(text)} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: "70%",
        borderRadius: 6,
        padding: 10
    },
    sec: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default Input