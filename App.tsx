import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, ButtonProps, StyleSheet, Text, TextInput, View } from 'react-native';
import AddWorkout from './components/AddWorkout';


export default function App() {
  const [workoutList, setWorkoutList] = useState<Array<Workout>>();

  return (
    <View style={styles.container}>
      <Text>Workout Manager!</Text>
      <Button title="Ładuj testowe dane" onPress={loadTestWorkoutList} />
      <AddWorkout />
      <StatusBar style="auto" />
    </View>
  );

  function loadTestWorkoutList() {
     let testWorkoutList = [
      {
        performedOn: new Date('2021-12-01T15:24:00'),
        durationInMinutes: 50,
        exercises: [
          { type: "przysiady", series: [10, 12, 14], difficulty: 3 },
          { type: "pompki", series: [8, 10, 12], difficulty: 5 },
          { type: "brzuszki", series: [20, 25, 30], difficulty: 7 }
        ],
        notes: ""
      },
      {
        performedOn: new Date('2021-12-03T17:42:00'),
        durationInMinutes: 55,
        exercises: [
          { type: "pompki", series: [10, 10, 12], difficulty: 4 },
          { type: "przysiady", series: [14, 14, 14], difficulty: 2 },
          { type: "brzuszki", series: [22, 23, 24], difficulty: 5 }
        ],
        notes: ""
      }
    ];
    setWorkoutList(testWorkoutList);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


