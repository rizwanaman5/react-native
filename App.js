import React, { useState } from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {


  const [enteredTask, setEnteredTask] = useState("");

  function taskInputHandler(enteredText){
    setEnteredTask(enteredText);
  }

  console.log(enteredTask);

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
        <TextInput placeholder="Enter Your Task2" style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
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
