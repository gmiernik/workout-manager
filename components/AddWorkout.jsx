import React, { useState, useEffect } from 'react';
import { Alert, Button, ButtonProps, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useWorkout from '../hooks/useWorkout';


export default () => {

    const [series, setSeries] = useState([]);
    const [exerciseType, setExerciseType] = useState("");
    const [repetition, setRepetition] = useState("");
    const [exercises, addExercise] = useWorkout();

    useEffect(() => {
        setExerciseType("");
        setSeries([]);
    }, [exercises]);

    return (
        <View>
            <Text>Rodzaj ćwiczenia</Text>
            <Picker selectedValue={exerciseType} onValueChange={(itemValue, itemIndex) => setExerciseType(itemValue)}>
                <Picker.Item label="" value="" />
                <Picker.Item label="Przysiady" value="przysiady" />
                <Picker.Item label="Pompki" value="pompki" />
                <Picker.Item label="Brzuszki" value="brzuszki" />
            </Picker>
            <Text>Ilość powtórzeń</Text>
            <TextInput keyboardType={'numeric'} value={repetition} 
                onChangeText={(data) => { console.log("Repetition has been updated."); setRepetition(data)}} />
            <Button title="Dodaj powtórzenie" onPress={addRepetition} />
            <Button title="Dodaj ćwiczenie" onPress={() => addExercise(exerciseType, series, 1)} />
        </View>
    );

    function addRepetition(event) {
        if (event) {
            event.preventDefault();
        }
        setSeries([...series, repetition]);
        setRepetition("");
    }
}