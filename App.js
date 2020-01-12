import React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
        <TextInput placeholder="Enter Your Task" style={styles.input}
         />
				<Button title="Add" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	},
	inputContainer: {
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  input : {
    borderColor : 'black',
    borderWidth : 2,
    padding : 10,
    width : '80%'
  }
});
