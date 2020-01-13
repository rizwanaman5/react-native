import React, { useState } from 'react';

import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

//import TaskItem
import TaskItem from "./components/TaskItem";

export default function App() {

//Hook2
  const [enteredTask, setEnteredTask] = useState("");
//Hook2
  const [enteredTasks, setEnteredTasks] = useState([]);

  function taskInputHandler(enteredText){
    setEnteredTask(enteredText);
  }

  function addTasksHandler(){
    setEnteredTasks((enteredTasks)=> [...enteredTasks, {id : Math.random().toString(), value : enteredTask}])
  }

  console.log(enteredTask);

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
        <TextInput placeholder="Enter Your Task2" style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
         />
				<Button title="Add"  onPress={addTasksHandler}/>
			</View>
      <FlatList 
          keyExtractor={(item,index)=> item.id}
          data = {enteredTasks}
          renderItem = {(itemdata) => ( <TaskItem title={itemdata.item.value} />)}
      />
       
      
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
