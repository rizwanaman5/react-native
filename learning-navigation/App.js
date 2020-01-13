import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGame from './components/StartGame'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
