import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, ButtonProps, StyleSheet, Text, TextInput, View } from 'react-native';
import AddWorkout from './components/AddWorkout';
import Info from './components/Info';


export default function App() {
  const [info, setInfo] = useState("Test123")

  return (
    <View style={styles.container}>
      <Text>Workout Manager!</Text>
      <AddWorkout />
      <StatusBar style="auto" />
    </View>
  );

  function addWorkout(abc : string) {
    console.info(abc);
    setInfo(abc);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


