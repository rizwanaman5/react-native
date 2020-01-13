import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Task from './components/Tasks'
import InputTask from './components/InputText'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [addMode, setAddMode] = useState(false)

  function handleButton(text) {
    setTasks((tasks) => [{ id: Math.random().toString(), value: text }, ...tasks])
    
    setAddMode((addMode) => !addMode)
  }
  function deleteTask(id) {
    setTasks((tasks) => tasks.filter((item) => item.id !== id))
  }
  return (
    <View style={styles.container}>
      <Button title="add task" onPress={() => setAddMode((addMode) => !addMode)}></Button>
      <InputTask
        visible={addMode}
        tasks={tasks}
        handleButton={handleButton}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={tasks}
        renderItem={({ item }) => (
          <Task item={item} deleteTask={deleteTask} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    
  },
});
