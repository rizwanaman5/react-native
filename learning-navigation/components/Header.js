import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Number Game</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        backgroundColor: 'pink',
        alignItems: "center",
        paddingTop: 50,
    },
    headerText: {
        fontSize: 30,
    }
})

export default Header