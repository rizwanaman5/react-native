import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
	return (
  <View style={{ flex: 1 }}>
    <View style={{flex : 2,backgroundColor : 'yellow', height: 50, width: '100%'}}></View>
    <View style={{flex: 4,backgroundColor : 'red', height: 50, width: '100%'}}></View>
    <View style={{flex: 6,backgroundColor : 'green', height: 50, width: '100%'}}></View>
    </View>
  )
}
